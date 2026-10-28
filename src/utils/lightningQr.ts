import qrcode from 'qrcode-generator';

// Modules of white margin around the code inside the SVG viewBox
const QUIET_ZONE = 2;
const FINDER_SIZE = 7;
const DOT_RADIUS = 0.46;
// Width / height of public/images/mostro-logo.png
const LOGO_ASPECT = 1000 / 1446;

export interface StyledQr {
  size: number;
  dots: string;
  eyesOuter: string;
  eyesInner: string;
  logo: { x: number; y: number; width: number; height: number };
}

const round = (value: number) => Math.round(value * 1000) / 1000;

function roundedRect(x: number, y: number, w: number, h: number, r: number): string {
  return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}` +
    `A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}` +
    `V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
}

function dot(x: number, y: number): string {
  const d = round(2 * DOT_RADIUS);
  return `M${round(x + 0.5 - DOT_RADIUS)} ${y + 0.5}a${DOT_RADIUS} ${DOT_RADIUS} 0 1 0 ${d} 0` +
    `a${DOT_RADIUS} ${DOT_RADIUS} 0 1 0 ${-d} 0Z`;
}

export interface StyledQrOptions {
  /** 'Alphanumeric' gives a smaller code for upper-cased payloads such as BOLT11 invoices */
  mode?: 'Byte' | 'Alphanumeric';
  /** Q still leaves enough redundancy for the logo and suits long payloads */
  errorCorrection?: 'Q' | 'H';
}

/**
 * Builds the SVG paths for a QR code with round dots, rounded finder eyes
 * and a cleared center for the Mostro logo. Defaults to error correction
 * level H so the code still scans with the center modules removed.
 */
export function buildStyledQr(data: string, { mode = 'Byte', errorCorrection = 'H' }: StyledQrOptions = {}): StyledQr {
  const qr = qrcode(0, errorCorrection);
  qr.addData(data, mode);
  qr.make();

  const n = qr.getModuleCount();
  const logoModules = n >= 33 ? 9 : 7;
  const logoStart = Math.floor((n - logoModules) / 2);
  const logoEnd = logoStart + logoModules - 1;

  const inFinder = (x: number, y: number) =>
    (x < FINDER_SIZE && y < FINDER_SIZE) ||
    (x >= n - FINDER_SIZE && y < FINDER_SIZE) ||
    (x < FINDER_SIZE && y >= n - FINDER_SIZE);
  const inLogo = (x: number, y: number) =>
    x >= logoStart && x <= logoEnd && y >= logoStart && y <= logoEnd;

  let dots = '';
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!qr.isDark(y, x) || inFinder(x, y) || inLogo(x, y)) continue;
      dots += dot(x + QUIET_ZONE, y + QUIET_ZONE);
    }
  }

  const finderOrigins = [[0, 0], [n - FINDER_SIZE, 0], [0, n - FINDER_SIZE]];
  const eyesOuter = finderOrigins
    .map(([fx, fy]) => {
      const x = fx + QUIET_ZONE;
      const y = fy + QUIET_ZONE;
      return roundedRect(x, y, 7, 7, 2.2) + roundedRect(x + 1, y + 1, 5, 5, 1.4);
    })
    .join('');
  const eyesInner = finderOrigins
    .map(([fx, fy]) => roundedRect(fx + QUIET_ZONE + 2, fy + QUIET_ZONE + 2, 3, 3, 1))
    .join('');

  const height = logoModules - 1.4;
  const width = height * LOGO_ASPECT;
  const center = QUIET_ZONE + n / 2;

  return {
    size: n + 2 * QUIET_ZONE,
    dots,
    eyesOuter,
    eyesInner,
    logo: {
      x: round(center - width / 2),
      y: round(center - height / 2),
      width: round(width),
      height: round(height),
    },
  };
}

/** Renders a styled QR as SVG markup, for building it in the browser. */
export function styledQrSvg(qr: StyledQr): string {
  const { x, y, width, height } = qr.logo;
  return `<svg viewBox="0 0 ${qr.size} ${qr.size}" aria-hidden="true">` +
    `<path d="${qr.dots}" fill="#0E130C" />` +
    `<path d="${qr.eyesOuter}" fill="#0E130C" fill-rule="evenodd" />` +
    `<path d="${qr.eyesInner}" fill="#4A9A26" />` +
    `<image href="/images/mostro-logo.png" x="${x}" y="${y}" width="${width}" height="${height}" />` +
    `</svg>`;
}
