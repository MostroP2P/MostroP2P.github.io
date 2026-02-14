// Copy code button
function copyCode(btn) {
  var code = btn.closest('.code-block').querySelector('code');
  var text = code.innerText;
  var copyLabel = btn.getAttribute('data-copy') || 'Copy';
  var copiedLabel = btn.getAttribute('data-copied') || 'Copied!';
  navigator.clipboard.writeText(text).then(function() {
    btn.textContent = copiedLabel;
    setTimeout(function() { btn.textContent = copyLabel; }, 2000);
  });
}

// Sidebar toggle (mobile)
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

// Back to top visibility
window.addEventListener('scroll', function() {
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

// Active TOC highlighting
document.addEventListener('DOMContentLoaded', function() {
  var tocLinks = document.querySelectorAll('.toc-list a');
  var sections = [];
  tocLinks.forEach(function(link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });

  function updateActiveToc() {
    var current = '';
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.getBoundingClientRect().top <= 100) current = sections[i].id;
    }
    tocLinks.forEach(function(l) { l.classList.remove('active'); });
    if (current) {
      var active = document.querySelector('.toc-list a[href="#' + current + '"]');
      if (active) active.classList.add('active');
    }
  }
  window.addEventListener('scroll', updateActiveToc);
  updateActiveToc();
});
