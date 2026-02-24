export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      howItWorks: "How it works",
      features: "Features",
      faq: "FAQ",
      getStarted: "Get Started",
      donate: "Donate",
    },
    hero: {
      badge: "🚀 Open Protocol",
      title: "Mostro",
      subtitle: "Non-custodial P2P Bitcoin exchange on Lightning Network & Nostr",
      desc: "Revolutionary peer-to-peer Bitcoin trading without intermediaries. Buy and sell Bitcoin directly with other users while maintaining complete privacy and control of your funds.",
      ctaPrimary: "Get Started",
      ctaSecondary: "How it works",
      stat1: "Non-custodial",
      stat1Label: "Your keys, your coins",
      stat2: "Lightning fast",
      stat2Label: "Instant settlements",
      stat3: "Censorship resistant",
      stat3Label: "Built on Nostr",
    },
    about: {
      title: "About Mostro",
      content: "Mostro, an avant-garde project, unfolds a revolutionary approach to facilitate Bitcoin transactions through the Lightning Network. The project addresses the growing demand for buying and selling Bitcoin without compromising personal data, introducing a groundbreaking solution for peer-to-peer platform.\n\nMostro manages communications on top of Nostr, creating a decentralized platform without a single point of failure. This design enhances resistance to censorship compared to other existing options.",
    },
    howItWorks: {
      title: "How it works?",
      subtitle: "Non-custodial P2P trading in 4 simple steps. No middlemen, no KYC.",
      content: "Mostro works as an escrow that allows the buyer and seller to exchange bitcoin p2p, reducing the risk for both parties, while only holding the Sats for the minimum time necessary. Mostro handles Bitcoin using a Lightning Network node. The node creates hold invoices for sellers and pays the buyers lightning regular invoices.\n\nIt works within the Nostr protocol so buyers and sellers will need Mostro's clients to buy/sell Bitcoin. Users will be able to rate Mostros and Mostros will compete to obtain more users to survive. Users should reject bad Mostros which will lose incentives to keep existing.",
      step1: "Get a Lightning wallet",
      step1Desc: "Download any Lightning-compatible wallet and fund it with some sats.",
      step2: "Choose a Mostro client",
      step2Desc: "Use a mobile app, web client, or CLI to connect to Mostro nodes.",
      step3: "Create or take an order",
      step3Desc: "Post a buy/sell order or browse existing offers from other traders.",
      step4: "Trade peer-to-peer",
      step4Desc: "Bitcoin is held in escrow via Lightning hold invoices. Once fiat payment is confirmed, sats are released instantly.",
    },
    features: {
      title: "Why choose Mostro?",
      subtitle: "Built for privacy, security, and freedom",
      feature1: "Privacy by Design",
      feature1Desc: "End-to-end encrypted communications. No accounts, no personal data stored.",
      feature2: "Censorship Resistant", 
      feature2Desc: "Decentralized on Nostr protocol. No single point of failure or control.",
      feature3: "Non-Custodial",
      feature3Desc: "Your Bitcoin stays in your wallet until the moment of exchange. Minimal custody time.",
      feature4: "Open Protocol",
      feature4Desc: "100% open source. Anyone can run nodes, build clients, audit the code.",
      feature5: "Multiple Nodes",
      feature5Desc: "Choose from different Mostro nodes. Competition ensures better service.",
      feature6: "No KYC",
      feature6Desc: "No registration, verification, or identity checks required.",
    },
    faq: {
      title: "Frequently Asked Questions", 
      subtitle: "Everything you need to know about Mostro",
      items: [
        {
          q: "What is Mostro? Is it an app?",
          a: "Mostro is not an app, it is a protocol for exchanging Bitcoin peer-to-peer using Lightning Network and Nostr. The protocol defines the rules and messages that allow two people to exchange bitcoin without intermediaries. To use Mostro you need a client, which can be a mobile app, a desktop application, or a command-line interface.\n\nThe confusion is common because there are apps that implement the Mostro protocol, but those apps are not Mostro: they are just a way to interact with it. Thinking that Mostro is an app is like thinking that Bitcoin is a wallet. Mostro is neither a blockchain nor an additional layer (L2 or L3) of Bitcoin, nor does it create a new monetary system: it is exclusively limited to coordinating P2P bitcoin exchanges using existing infrastructure."
        },
        {
          q: "Do I need to register or verify my identity?",
          a: "No. Mostro does not require registration, email, phone, or any type of KYC. Your identity is automatically generated in the client you use and only you control it through a 12-word recovery phrase."
        },
        {
          q: "How does Mostro protect me if my counterpart tries to scam me?",
          a: "The seller's sats are held in their wallet through a hold invoice until they confirm having received the fiat payment. If a problem arises, either party can open a dispute and a mediator will review the case. Additionally, the chat between users cannot be deleted or altered, which allows verifying what actually happened during the operation."
        },
        {
          q: "Are my operations private?",
          a: "Yes. All communication is end-to-end encrypted. Mostro uses different keys for each operation, which prevents linking your exchanges to each other. You can even operate in an advanced privacy mode in which not even the Mostro node itself can know which operations belong to you. Mostro node operators also have no access to any personal information of the users."
        },
        {
          q: "What happens if I have a problem with my phone during an operation?",
          a: "If your phone shuts down, breaks, you lose it, or it gets stolen during an operation, you can regain control only if you have a backup of your recovery phrase. By restoring that phrase on another device, you regain access to your keys and can continue the operation.\n\nWithout that backup, there is no way to recover the session or the associated funds, because Mostro has no accounts, central support, or recovery mechanisms. That is why it is critical to make the backup before starting your first operation."
        },
        {
          q: "What makes Mostro different from other P2P exchanges?",
          a: "Three fundamental differences:\n\n**Real censorship resistance:** Mostro is not a platform or a company: it is a protocol. There is no central server to shut down, no app to \"take down,\" no database to confiscate. It runs on Nostr, an open and decentralized protocol.\n\n**Privacy by design, not as an option:** There are no accounts, emails, or persistent identities. Each operation uses different keys and message exchange occurs through end-to-end encrypted chat.\n\n**Minimal and non-permanent custody:** Mostro does not hold users' funds. It uses Lightning hold invoices: the sats remain locked in the seller's wallet until they confirm receipt of the fiat."
        },
        {
          q: "How much does Mostro charge per operation?",
          a: "Each operator of a Mostro node sets their own fees. They are generally low (for example, around 0.3% for both buyer and seller). Before operating, always check the fees of the node you choose."
        },
        {
          q: "What currencies and payment methods does Mostro accept?",
          a: "It depends on each Mostro node. Operators decide which fiat currencies they support and users decide the payment method (bank transfer, cash, mobile payment, etc.). Mostro does not intervene in the fiat exchange, it only coordinates the exchange of sats."
        },
        {
          q: "Is there only one Mostro node or are there several?",
          a: "There are several. Mostro is the protocol, and each Mostro node is an independent implementation that runs it. Anyone can operate their own node, with their own fees, supported currencies, and operational rules. There is no central or official node: if one node stops working, others remain available and the protocol continues operating without interruptions."
        },
        {
          q: "Why do several Mostro nodes exist instead of just one?",
          a: "Because decentralization is what makes the system resistant to censorship. If there were a single node, it would be enough to shut it down or block it to stop all exchange. By having multiple nodes operated by different people in different jurisdictions, there is no single point of failure. Additionally, this diversity introduces competition: better fees, better service, and more options for users, who can decide which node to interact with."
        },
        {
          q: "How do I start using Mostro?",
          a: "Download a Mostro client, back up your 12-word recovery phrase and you're ready. You can create a buy or sell order, or take an existing order from the order book. You only need a Lightning wallet to send or receive sats."
        },
        {
          q: "I want to run my own Mostro node, where do I start?",
          a: "Mostro is free software and anyone can operate their own node. You will need a server, a Lightning Network node (LND), and access to Nostr relays. The complete technical documentation is available in Mostro's official GitHub repository, with step-by-step installation guides. If you are part of a local Bitcoin community, running your own node can be a direct way to offer P2P exchange without intermediaries to your users."
        }
      ],
    },
    getStarted: {
      title: "Get Started with Mostro",
      subtitle: "Everything you need to start trading Bitcoin peer-to-peer",
      mobile: "Mobile App",
      mobileDesc: "Download Mostro for Android from GitHub. iOS version coming soon.",
      mobileLink: "https://github.com/MostroP2P/mobile/releases",
      cli: "Mostrix TUI",
      cliDesc: "A user-friendly terminal interface for Mostro. Easy to use, no GUI needed.",
      cliLink: "https://github.com/MostroP2P/mostrix",
      community: "Join Communities",
      communityDesc: "Find local trading communities on mostro.community.",
      communityLink: "https://mostro.community",
      docs: "Documentation",
      docsDesc: "Learn the protocol, setup guides, and developer resources.",
      docsLink: "https://mostro.network/docs-english/",
    },
    donate: {
      title: "Support Mostro Development",
      content: "Mostro is FOSS (Free and Open Source Software). If you think the project is useful, consider making a donation to help us develop and maintain it in the long term. Thanks!",
      button: "Donate on Geyser",
      link: "https://geyser.fund/project/mostro",
    },
    footer: {
      desc: "Non-custodial P2P Bitcoin exchange built on Lightning Network and Nostr.",
      protocol: "Protocol",
      community: "Community", 
      development: "Development",
      support: "Contribute",
      github: "GitHub",
      telegram: "Telegram",
      nostr: "Nostr",
      foundation: "Foundation",
      supportedBy: "Supported by",
      geyser: "Donate",
      bottom: "Made with ⚡ by the Mostro community · 100% Open Source",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      howItWorks: "Cómo funciona",
      features: "Características",
      faq: "FAQ",
      getStarted: "Comenzar",
      donate: "Donar",
    },
    hero: {
      badge: "🚀 Protocolo Abierto",
      title: "Mostro",
      subtitle: "Exchange P2P de Bitcoin sin KYC sobre Lightning Network y Nostr",
      desc: "Trading revolucionario de Bitcoin peer-to-peer sin intermediarios. Compra y vende Bitcoin directamente con otros usuarios manteniendo privacidad completa y control de tus fondos.",
      ctaPrimary: "Comenzar",
      ctaSecondary: "Cómo funciona",
      stat1: "No custodial",
      stat1Label: "Tus llaves, tus monedas",
      stat2: "Rápido como un rayo",
      stat2Label: "Liquidación instantánea", 
      stat3: "Resistente a la censura",
      stat3Label: "Construido sobre Nostr",
    },
    about: {
      title: "Acerca de Mostro",
      content: "Mostro, un proyecto de vanguardia, desarrolla un enfoque revolucionario para facilitar las transacciones de Bitcoin a través de Lightning Network. El proyecto aborda la creciente demanda en la compra y venta de Bitcoin sin comprometer los datos personales, presentando una solución innovadora para intercambios entre pares.\n\nMostro gestiona las comunicaciones sobre Nostr, lo que lo convierte en una plataforma descentralizada sin un único punto de falla. Este diseño mejora la resistencia a la censura en comparación con otras opciones existentes.",
    },
    howItWorks: {
      title: "¿Cómo funciona?",
      subtitle: "Trading P2P no custodial en 4 simples pasos. Sin intermediarios, sin KYC.",
      content: "Mostro funciona como un depósito de garantía que permite al comprador y al vendedor intercambiar bitcoin de forma p2p reduciendo el riesgo para ambas partes, a la vez que solo custodia los Sats el tiempo mínimamente necesario. Utiliza un nodo Lightning Network, que crea las facturas retenidas para los vendedores y paga a los compradores facturas comunes de lightning.\n\nFunciona dentro del protocolo Nostr por lo que los compradores y vendedores necesitarán los clientes de Mostro para poder comprar/vender Bitcoin. Los usuarios podrán calificar a los Mostros, que competirán para obtener más usuarios para poder sobrevivir.",
      step1: "Obtén una wallet Lightning",
      step1Desc: "Descarga cualquier wallet compatible con Lightning y cárgala con algunos sats.",
      step2: "Elige un cliente Mostro",
      step2Desc: "Usa una app móvil, cliente web o CLI para conectarte a nodos Mostro.",
      step3: "Crea o toma una orden",
      step3Desc: "Publica una orden de compra/venta o explora ofertas de otros usuarios.",
      step4: "Opera peer-to-peer", 
      step4Desc: "El Bitcoin se mantiene en custodia temporal mediante hold invoices de Lightning. Cuando se confirma el pago fiat, los sats se liberan al instante.",
    },
    features: {
      title: "¿Por qué elegir Mostro?",
      subtitle: "Construido para privacidad, seguridad y libertad",
      feature1: "Privacidad por Diseño",
      feature1Desc: "Comunicaciones cifradas de extremo a extremo. Sin cuentas, sin datos personales almacenados.",
      feature2: "Resistente a la Censura",
      feature2Desc: "Descentralizado sobre protocolo Nostr. Sin punto único de falla o control.",
      feature3: "No Custodial",
      feature3Desc: "Tu Bitcoin permanece en tu wallet hasta el momento del intercambio. Tiempo de custodia mínimo.",
      feature4: "Protocolo Abierto", 
      feature4Desc: "100% código abierto. Cualquiera puede correr nodos, construir clientes, auditar el código.",
      feature5: "Múltiples Nodos",
      feature5Desc: "Elige entre diferentes nodos Mostro. La competencia asegura mejor servicio.",
      feature6: "Sin KYC",
      feature6Desc: "Sin registro, verificación o controles de identidad requeridos.",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre Mostro",
      items: [
        {
          q: "¿Qué es Mostro? ¿Es una app?",
          a: "Mostro no es una app, es un protocolo para intercambiar Bitcoin de forma peer-to-peer usando Lightning Network y Nostr. El protocolo define las reglas y mensajes que permiten a dos personas intercambiar bitcoin sin intermediarios. Para usar Mostro necesitas un cliente, que puede ser una app móvil, una aplicación de escritorio o una interfaz de línea de comandos.\n\nLa confusión es común porque existen apps que implementan el protocolo Mostro, pero esas apps no son Mostro: solo son una forma de interactuar con él. Pensar que Mostro es una app es como pensar que Bitcoin es una wallet. Mostro tampoco es una blockchain ni una capa adicional (L2 o L3) de Bitcoin, ni crea un nuevo sistema monetario: se limita exclusivamente a coordinar intercambios P2P de bitcoin utilizando infraestructura existente."
        },
        {
          q: "¿Necesito registrarme o verificar mi identidad?",
          a: "No. Mostro no requiere registro, email, teléfono ni ningún tipo de KYC. Tu identidad se genera automáticamente en el cliente que uses y solo tú la controlas mediante una frase de recuperación de 12 palabras."
        },
        {
          q: "¿Cómo me protege Mostro si mi contraparte intenta estafarme?",
          a: "Los sats del vendedor quedan retenidos en su wallet mediante una hold invoice hasta que confirme haber recibido el pago fiat. Si surge un problema, cualquiera de las partes puede abrir una disputa y un mediador revisará el caso. Además, el chat entre usuarios no puede ser borrado ni alterado, lo que permite verificar qué ocurrió realmente durante la operación."
        },
        {
          q: "¿Mis operaciones son privadas?",
          a: "Sí. Toda la comunicación está cifrada de extremo a extremo. Mostro usa claves diferentes para cada operación, lo que impide vincular tus intercambios entre sí. Incluso puedes operar en un modo de privacidad avanzada en el que ni el propio nodo de Mostro puede saber qué operaciones te pertenecen. Los operadores de nodos de Mostro tampoco tienen acceso a ninguna información personal de los usuarios."
        },
        {
          q: "¿Qué pasa si tengo un problema con mi teléfono durante una operación?",
          a: "Si tu teléfono se apaga, se rompe, lo pierdes o te lo roban durante una operación, puedes recuperar el control solo si tienes respaldo de tu frase de recuperación. Restaurando esa frase en otro dispositivo vuelves a tener acceso a tus claves y puedes continuar la operación.\n\nSin ese respaldo, no hay forma de recuperar la sesión ni los fondos asociados, porque Mostro no tiene cuentas, soporte central ni mecanismos de recuperación. Por eso es crítico hacer el backup antes de iniciar tu primera operación."
        },
        {
          q: "¿Qué hace diferente a Mostro de otros exchanges P2P?",
          a: "Tres diferencias fundamentales:\n\n**Resistencia real a la censura:** Mostro no es una plataforma ni una empresa: es un protocolo. No hay un servidor central que apagar, ni una app que \"bajar\", ni una base de datos que confiscar. Funciona sobre Nostr, un protocolo abierto y descentralizado.\n\n**Privacidad por diseño, no como opción:** No existen cuentas, correos electrónicos ni identidades persistentes. Cada operación usa claves distintas y el intercambio de mensajes ocurre mediante chat cifrado de extremo a extremo.\n\n**Custodia mínima y no permanente:** Mostro no mantiene fondos de los usuarios. Utiliza hold invoices de Lightning: los sats permanecen bloqueados en la wallet del vendedor hasta que este confirma la recepción del fiat."
        },
        {
          q: "¿Cuánto cobra Mostro por cada operación?",
          a: "Cada operador de un nodo de Mostro define sus propias tarifas. Generalmente son bajas (por ejemplo, alrededor de 0.3% para comprador y vendedor). Antes de operar, revisa siempre las tarifas del nodo que elijas."
        },
        {
          q: "¿Qué monedas y métodos de pago acepta Mostro?",
          a: "Depende de cada nodo de Mostro. Los operadores deciden qué monedas fiat soportan y los usuarios deciden el método de pago (transferencia bancaria, efectivo, pago móvil, etc.). Mostro no interviene en el intercambio de fiat, solo coordina el intercambio de sats."
        },
        {
          q: "¿Existe un solo nodo de Mostro o hay varios?",
          a: "Hay varios. Mostro es el protocolo, y cada nodo de Mostro es una implementación independiente que lo ejecuta. Cualquiera puede operar su propio nodo, con sus propias tarifas, monedas soportadas y reglas operativas. No existe un nodo central u oficial: si un nodo deja de funcionar, otros siguen disponibles y el protocolo continúa operando sin interrupciones."
        },
        {
          q: "¿Por qué existen varios nodos de Mostro en lugar de uno solo?",
          a: "Porque la descentralización es lo que hace al sistema resistente a la censura. Si existiera un único nodo, bastaría con cerrarlo o bloquearlo para detener todo el intercambio. Al haber múltiples nodos operados por personas distintas y en diferentes jurisdicciones, no existe un punto único de falla. Además, esta diversidad introduce competencia: mejores tarifas, mejor servicio y más opciones para los usuarios."
        },
        {
          q: "¿Cómo empiezo a usar Mostro?",
          a: "Descarga un cliente de Mostro, haz backup de tu frase de recuperación de 12 palabras y listo. Puedes crear una orden de compra o venta, o tomar una orden existente del libro de ofertas. Solo necesitas una wallet Lightning para enviar o recibir sats."
        },
        {
          q: "¿Quiero correr mi propio nodo de Mostro, por dónde empiezo?",
          a: "Mostro es software libre y cualquiera puede operar su propio nodo. Necesitarás un servidor, un nodo de Lightning Network (LND) y acceso a relays de Nostr. La documentación técnica completa está disponible en el repositorio oficial de GitHub de Mostro, con guías de instalación paso a paso."
        }
      ],
    },
    getStarted: {
      title: "Comenzar con Mostro",
      subtitle: "Todo lo que necesitas para empezar a operar Bitcoin peer-to-peer",
      mobile: "App Móvil",
      mobileDesc: "Descarga Mostro para Android desde GitHub. Versión iOS próximamente.",
      mobileLink: "https://github.com/MostroP2P/mobile/releases",
      cli: "Mostrix TUI",
      cliDesc: "Una interfaz de terminal amigable para Mostro. Fácil de usar, sin necesidad de GUI.",
      cliLink: "https://github.com/MostroP2P/mostrix",
      community: "Únete a Comunidades",
      communityDesc: "Encuentra comunidades locales de trading en mostro.community.",
      communityLink: "https://mostro.community",
      docs: "Documentación",
      docsDesc: "Aprende el protocolo, guías de configuración y recursos para desarrolladores.",
      docsLink: "https://mostro.network/docs-spanish/",
    },
    donate: {
      title: "Apoya el Desarrollo de Mostro",
      content: "Mostro es FOSS (Software Libre y de Código Abierto). Si encuentras útil el proyecto, considera hacer una donación para ayudarnos a desarrollarlo y mantenerlo a largo plazo. ¡Gracias!",
      button: "Donar en Geyser",
      link: "https://geyser.fund/project/mostro",
    },
    footer: {
      desc: "Exchange P2P de Bitcoin no custodial construido sobre Lightning Network y Nostr.",
      protocol: "Protocolo",
      community: "Comunidad",
      development: "Desarrollo", 
      support: "Contribuir",
      github: "GitHub",
      telegram: "Telegram",
      nostr: "Nostr",
      foundation: "Fundación",
      supportedBy: "Apoyado por",
      geyser: "Donar",
      bottom: "Hecho con ⚡ por la comunidad Mostro · 100% Código Abierto",
    },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi siamo",
      howItWorks: "Come funziona",
      features: "Caratteristiche",
      faq: "FAQ",
      getStarted: "Inizia",
      donate: "Dona",
    },
    hero: {
      badge: "🚀 Protocollo Aperto",
      title: "Mostro", 
      subtitle: "Exchange P2P di Bitcoin senza KYC su Lightning Network e Nostr",
      desc: "Trading rivoluzionario di Bitcoin peer-to-peer senza intermediari. Compra e vendi Bitcoin direttamente con altri utenti mantenendo completa privacy e controllo dei tuoi fondi.",
      ctaPrimary: "Inizia",
      ctaSecondary: "Come funziona",
      stat1: "Non-custodial",
      stat1Label: "Le tue chiavi, i tuoi coin",
      stat2: "Veloce come un fulmine",
      stat2Label: "Transazioni istantanee",
      stat3: "Resistente alla censura", 
      stat3Label: "Costruito su Nostr",
    },
    about: {
      title: "Cosa è Mostro",
      content: "Mostro è un progetto innovativo che utilizza un nuovo modo per facilitare gli scambi di valuta via Lightning Network. Cerchiamo di favorire la crescita delle richieste di vendita e acquisto di Bitcoin senza compromettere dati personali introducendo un nuovo modo di fare scambi peer-to-peer.\n\nMostro permette di eseguire gli scambi attraverso il nuovo protocollo di comunicazione Nostr, creando un sistema decentralizzato senza singolo punto di attacco, questo permette a Mostro di essere più resistente a possibili attacchi rispetto ad altre piattaforme di scambio peer-to-peer già esistenti.",
    },
    howItWorks: {
      title: "Come funziona?",
      subtitle: "Trading P2P non-custodial in 4 semplici passaggi. Senza intermediari, senza KYC.",
      content: "Mostro funziona da garante nelle scambio tra chi vuole vendere e chi vuole acquistare bitcoin in modalità p2p, riducendo il rischio per entrambe le parti, i satoshi scambiati sono trattenuti solo per il tempo necessario e Mostro provvederà a concludere lo scambio tramite un nodo lightning che utilizzerà una hold invoice per il venditore e pagherà il compratore tramite una invoice inviata dal compratore.\n\nUtilizzando il protocollo Nostr per lo scambio le due parti avranno bisogno di un client per eseguire l'operazione di acquisto/vendita di Bitcoin.",
      step1: "Ottieni un wallet Lightning",
      step1Desc: "Scarica un wallet compatibile con Lightning e caricalo con alcuni sats.",
      step2: "Scegli un client Mostro",
      step2Desc: "Usa un'app mobile, client web o CLI per connetterti ai nodi Mostro.",
      step3: "Crea o prendi un ordine",
      step3Desc: "Pubblica un ordine di acquisto/vendita o sfoglia le offerte di altri trader.",
      step4: "Fai trading peer-to-peer",
      step4Desc: "Il Bitcoin è trattenuto in custodia temporanea tramite hold invoice di Lightning. Quando il pagamento fiat è confermato, i sats vengono rilasciati istantaneamente.",
    },
    features: {
      title: "Perché scegliere Mostro?",
      subtitle: "Costruito per privacy, sicurezza e libertà",
      feature1: "Privacy by Design",
      feature1Desc: "Comunicazioni crittografate end-to-end. Nessun account, nessun dato personale memorizzato.",
      feature2: "Resistente alla Censura", 
      feature2Desc: "Decentralizzato sul protocollo Nostr. Nessun singolo punto di guasto o controllo.",
      feature3: "Non-Custodial",
      feature3Desc: "Il tuo Bitcoin rimane nel tuo wallet fino al momento dello scambio. Tempo di custodia minimo.",
      feature4: "Protocollo Aperto",
      feature4Desc: "100% open source. Chiunque può gestire nodi, costruire client, auditare il codice.",
      feature5: "Nodi Multipli",
      feature5Desc: "Scegli tra diversi nodi Mostro. La competizione assicura un servizio migliore.",
      feature6: "Niente KYC",
      feature6Desc: "Nessuna registrazione, verifica o controllo di identità richiesti.",
    },
    faq: {
      title: "Domande Frequenti",
      subtitle: "Tutto quello che devi sapere su Mostro",
      items: [
        {
          q: "Cos'è Mostro? È un'app?",
          a: "Mostro non è un'app, è un protocollo per scambiare Bitcoin in modalità peer-to-peer utilizzando Lightning Network e Nostr. Il protocollo definisce le regole e i messaggi che permettono a due persone di scambiare bitcoin senza intermediari. Per usare Mostro hai bisogno di un client, che può essere un'app mobile, un'applicazione desktop o un'interfaccia a riga di comando.\n\nLa confusione è comune perché esistono app che implementano il protocollo Mostro, ma quelle app non sono Mostro: sono solo un modo per interagire con esso. Pensare che Mostro sia un'app è come pensare che Bitcoin sia un wallet."
        },
        {
          q: "Devo registrarmi o verificare la mia identità?",
          a: "No. Mostro non richiede registrazione, email, telefono né alcun tipo di KYC. La tua identità viene generata automaticamente nel client che utilizzi e solo tu la controlli tramite una frase di recupero di 12 parole."
        },
        {
          q: "Come mi protegge Mostro se la controparte tenta di truffarmi?",
          a: "I sat del venditore restano trattenuti nel suo wallet tramite una hold invoice fino a quando non conferma di aver ricevuto il pagamento fiat. Se sorge un problema, una delle parti può aprire una disputa e un mediatore esaminerà il caso. Inoltre, la chat tra utenti non può essere cancellata né alterata."
        },
        {
          q: "Le mie operazioni sono private?",
          a: "Sì. Tutta la comunicazione è cifrata end-to-end. Mostro utilizza chiavi diverse per ogni operazione, il che impedisce di collegare i tuoi scambi tra loro. Puoi anche operare in una modalità di privacy avanzata in cui nemmeno il nodo Mostro stesso può sapere quali operazioni ti appartengono."
        },
        {
          q: "Cosa succede se ho un problema con il telefono durante un'operazione?",
          a: "Se il tuo telefono si spegne, si rompe, lo perdi o te lo rubano durante un'operazione, puoi recuperare il controllo solo se hai un backup della tua frase di recupero. Ripristinando quella frase su un altro dispositivo, riacquisti l'accesso alle tue chiavi e puoi continuare l'operazione.\n\nSenza quel backup, non c'è modo di recuperare la sessione né i fondi associati."
        },
        {
          q: "Cosa rende Mostro diverso dagli altri exchange P2P?",
          a: "Tre differenze fondamentali:\n\n**Vera resistenza alla censura:** Mostro non è una piattaforma né un'azienda: è un protocollo. Funziona su Nostr, un protocollo aperto e decentralizzato.\n\n**Privacy by design:** Non esistono account, email o identità persistenti. Ogni operazione utilizza chiavi diverse.\n\n**Custodia minima:** Mostro non detiene fondi degli utenti. I sat rimangono bloccati nel wallet del venditore fino alla conferma."
        },
        {
          q: "Quanto costa ogni operazione su Mostro?",
          a: "Ogni operatore di un nodo Mostro definisce le proprie tariffe. Generalmente sono basse (ad esempio, circa lo 0,3% per compratore e venditore). Prima di operare, verifica sempre le tariffe del nodo che scegli."
        },
        {
          q: "Quali valute e metodi di pagamento accetta Mostro?",
          a: "Dipende da ogni nodo Mostro. Gli operatori decidono quali valute fiat supportano e gli utenti decidono il metodo di pagamento (bonifico bancario, contanti, pagamento mobile, ecc.)."
        },
        {
          q: "Esiste un solo nodo Mostro o ce ne sono diversi?",
          a: "Ce ne sono diversi. Mostro è il protocollo e ogni nodo Mostro è un'implementazione indipendente che lo esegue. Chiunque può operare il proprio nodo, con le proprie tariffe, valute supportate e regole operative."
        },
        {
          q: "Perché esistono diversi nodi Mostro invece di uno solo?",
          a: "Perché la decentralizzazione è ciò che rende il sistema resistente alla censura. Avendo più nodi operati da persone diverse in giurisdizioni diverse, non esiste un singolo punto di guasto. Inoltre, questa diversità introduce competizione."
        },
        {
          q: "Come inizio a usare Mostro?",
          a: "Scarica un client Mostro, fai il backup della tua frase di recupero di 12 parole e sei pronto. Puoi creare un ordine di acquisto o vendita, o prendere un ordine esistente dal libro degli ordini."
        },
        {
          q: "Voglio gestire il mio nodo Mostro, da dove comincio?",
          a: "Mostro è software libero e chiunque può operare il proprio nodo. Avrai bisogno di un server, un nodo Lightning Network (LND) e accesso ai relay Nostr. La documentazione tecnica completa è disponibile nel repository ufficiale GitHub di Mostro."
        }
      ],
    },
    getStarted: {
      title: "Inizia con Mostro",
      subtitle: "Tutto ciò di cui hai bisogno per iniziare a fare trading di Bitcoin peer-to-peer",
      mobile: "App Mobile",
      mobileDesc: "Scarica Mostro per Android da GitHub. Versione iOS in arrivo.",
      mobileLink: "https://github.com/MostroP2P/mobile/releases", 
      cli: "Mostrix TUI",
      cliDesc: "Un'interfaccia terminale user-friendly per Mostro. Facile da usare, senza bisogno di GUI.",
      cliLink: "https://github.com/MostroP2P/mostrix",
      community: "Unisciti alle Comunità", 
      communityDesc: "Trova comunità di trading locali su mostro.community.",
      communityLink: "https://mostro.community",
      docs: "Documentazione",
      docsDesc: "Impara il protocollo, guide di configurazione e risorse per sviluppatori.",
      docsLink: "https://mostro.network/docs-english/",
    },
    donate: {
      title: "Supporta lo Sviluppo di Mostro",
      content: "Mostro è FOSS (Software Libero e Open Source). Se pensi che il progetto sia utile, considera di fare una donazione per aiutarci a svilupparlo e mantenerlo a lungo termine. Grazie!",
      button: "Dona su Geyser",
      link: "https://geyser.fund/project/mostro",
    },
    footer: {
      desc: "Exchange P2P di Bitcoin non-custodial costruito su Lightning Network e Nostr.",
      protocol: "Protocollo",
      community: "Comunità",
      development: "Sviluppo",
      support: "Contribuisci", 
      github: "GitHub",
      telegram: "Telegram",
      nostr: "Nostr", 
      foundation: "Fondazione",
      supportedBy: "Supportato da",
      geyser: "Dona",
      bottom: "Fatto con ⚡ dalla comunità Mostro · 100% Open Source",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      howItWorks: "Como funciona",
      features: "Características",
      faq: "FAQ",
      getStarted: "Começar",
      donate: "Doar",
    },
    hero: {
      badge: "🚀 Protocolo Aberto",
      title: "Mostro",
      subtitle: "Exchange P2P de Bitcoin sem KYC na Lightning Network e Nostr",
      desc: "Trading revolucionário de Bitcoin peer-to-peer sem intermediários. Compre e venda Bitcoin diretamente com outros usuários mantendo privacidade completa e controle dos seus fundos.",
      ctaPrimary: "Começar",
      ctaSecondary: "Como funciona",
      stat1: "Não-custodial",
      stat1Label: "Suas chaves, suas moedas",
      stat2: "Rápido como um raio",
      stat2Label: "Liquidação instantânea",
      stat3: "Resistente à censura",
      stat3Label: "Construído sobre Nostr",
    },
    about: {
      title: "Sobre Mostro",
      content: "Mostro, um projeto de vanguarda, desenvolve uma abordagem revolucionária para facilitar as transações de Bitcoin através da Lightning Network. O projeto aborda a crescente demanda na compra e venda de Bitcoin sem comprometer os dados pessoais, apresentando uma solução inovadora para trocas entre pares.\n\nMostro gerencia as comunicações sobre Nostr, o que o torna uma plataforma descentralizada sem um único ponto de falha. Esse design melhora a resistência à censura em comparação com outras opções existentes.",
    },
    howItWorks: {
      title: "Como funciona?",
      subtitle: "Trading P2P não-custodial em 4 passos simples. Sem intermediários, sem KYC.",
      content: "Mostro funciona como um depósito de garantia que permite ao comprador e ao vendedor trocar bitcoin de forma p2p, reduzindo o risco para ambas as partes, ao mesmo tempo em que custodia apenas os sats pelo tempo mínimo necessário. Ele utiliza um nó da Lightning Network, que cria faturas retidas para os vendedores e paga aos compradores faturas comuns da lightning.\n\nFunciona dentro do protocolo Nostr, portanto, os compradores e vendedores precisarão dos clientes do Mostro para poder comprar/vender Bitcoin.",
      step1: "Obtenha uma carteira Lightning", 
      step1Desc: "Baixe qualquer carteira compatível com Lightning e carregue com alguns sats.",
      step2: "Escolha um cliente Mostro",
      step2Desc: "Use um app móvel, cliente web ou CLI para se conectar aos nós Mostro.",
      step3: "Crie ou aceite uma ordem",
      step3Desc: "Publique uma ordem de compra/venda ou explore ofertas de outros traders.",
      step4: "Negocie peer-to-peer",
      step4Desc: "O Bitcoin é mantido em custódia temporária via hold invoices da Lightning. Quando o pagamento fiat é confirmado, os sats são liberados instantaneamente.",
    },
    features: {
      title: "Por que escolher Mostro?",
      subtitle: "Construído para privacidade, segurança e liberdade",
      feature1: "Privacidade por Design",
      feature1Desc: "Comunicações criptografadas ponta a ponta. Sem contas, sem dados pessoais armazenados.",
      feature2: "Resistente à Censura",
      feature2Desc: "Descentralizado no protocolo Nostr. Sem ponto único de falha ou controle.",
      feature3: "Não-Custodial",
      feature3Desc: "Seu Bitcoin permanece na sua carteira até o momento da troca. Tempo de custódia mínimo.",
      feature4: "Protocolo Aberto",
      feature4Desc: "100% código aberto. Qualquer pessoa pode rodar nós, construir clientes, auditar o código.",
      feature5: "Múltiplos Nós",
      feature5Desc: "Escolha entre diferentes nós Mostro. A competição garante melhor serviço.",
      feature6: "Sem KYC",
      feature6Desc: "Sem registro, verificação ou controles de identidade necessários.",
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que você precisa saber sobre Mostro",
      items: [
        {
          q: "O que é o Mostro? É um app?",
          a: "Mostro não é um app, é um protocolo para trocar Bitcoin de forma peer-to-peer usando Lightning Network e Nostr. O protocolo define as regras e mensagens que permitem que duas pessoas troquem bitcoin sem intermediários. Para usar o Mostro você precisa de um cliente, que pode ser um app móvel, um aplicativo de desktop ou uma interface de linha de comando.\n\nA confusão é comum porque existem apps que implementam o protocolo Mostro, mas esses apps não são o Mostro: são apenas uma forma de interagir com ele."
        },
        {
          q: "Preciso me registrar ou verificar minha identidade?",
          a: "Não. Mostro não requer registro, e-mail, telefone nem nenhum tipo de KYC. Sua identidade é gerada automaticamente no cliente que você usa e somente você a controla por meio de uma frase de recuperação de 12 palavras."
        },
        {
          q: "Como o Mostro me protege se a contraparte tentar me enganar?",
          a: "Os sats do vendedor ficam retidos na sua carteira por meio de uma hold invoice até que ele confirme ter recebido o pagamento fiat. Se surgir um problema, qualquer uma das partes pode abrir uma disputa e um mediador revisará o caso. Além disso, o chat entre usuários não pode ser apagado nem alterado."
        },
        {
          q: "Minhas operações são privadas?", 
          a: "Sim. Toda a comunicação é criptografada de ponta a ponta. Mostro usa chaves diferentes para cada operação, o que impede vincular suas trocas entre si. Você pode até operar em um modo de privacidade avançada no qual nem mesmo o próprio nó do Mostro pode saber quais operações pertencem a você."
        },
        {
          q: "O que acontece se eu tiver um problema com meu celular durante uma operação?",
          a: "Se seu celular desligar, quebrar, você perdê-lo ou for roubado durante uma operação, você pode recuperar o controle somente se tiver backup da sua frase de recuperação. Restaurando essa frase em outro dispositivo, você recupera o acesso às suas chaves e pode continuar a operação.\n\nSem esse backup, não há como recuperar a sessão nem os fundos associados."
        },
        {
          q: "O que torna o Mostro diferente de outros exchanges P2P?",
          a: "Três diferenças fundamentais:\n\n**Resistência real à censura:** Mostro não é uma plataforma nem uma empresa: é um protocolo. Funciona sobre Nostr, um protocolo aberto e descentralizado.\n\n**Privacidade por design:** Não existem contas, e-mails ou identidades persistentes. Cada operação usa chaves diferentes.\n\n**Custódia mínima:** Mostro não mantém fundos dos usuários. Os sats permanecem bloqueados na carteira do vendedor até a confirmação."
        },
        {
          q: "Quanto o Mostro cobra por operação?",
          a: "Cada operador de um nó Mostro define suas próprias tarifas. Geralmente são baixas (por exemplo, cerca de 0,3% para comprador e vendedor). Antes de operar, verifique sempre as tarifas do nó que escolher."
        },
        {
          q: "Quais moedas e métodos de pagamento o Mostro aceita?",
          a: "Depende de cada nó Mostro. Os operadores decidem quais moedas fiat suportam e os usuários decidem o método de pagamento (transferência bancária, dinheiro, pagamento móvel, etc.)."
        },
        {
          q: "Existe apenas um nó Mostro ou há vários?",
          a: "Há vários. Mostro é o protocolo, e cada nó Mostro é uma implementação independente que o executa. Qualquer pessoa pode operar seu próprio nó, com suas próprias tarifas, moedas suportadas e regras operacionais."
        },
        {
          q: "Por que existem vários nós Mostro em vez de apenas um?",
          a: "Porque a descentralização é o que torna o sistema resistente à censura. Ao haver múltiplos nós operados por pessoas diferentes em diferentes jurisdições, não existe um ponto único de falha. Além disso, essa diversidade introduz competição."
        },
        {
          q: "Como começo a usar o Mostro?",
          a: "Baixe um cliente Mostro, faça backup da sua frase de recuperação de 12 palavras e pronto. Você pode criar uma ordem de compra ou venda, ou aceitar uma ordem existente do livro de ofertas."
        },
        {
          q: "Quero rodar meu próprio nó Mostro, por onde começo?",
          a: "Mostro é software livre e qualquer pessoa pode operar seu próprio nó. Você precisará de um servidor, um nó Lightning Network (LND) e acesso a relays Nostr. A documentação técnica completa está disponível no repositório oficial do Mostro no GitHub."
        }
      ],
    },
    getStarted: {
      title: "Começar com Mostro",
      subtitle: "Tudo o que você precisa para começar a negociar Bitcoin peer-to-peer",
      mobile: "App Mobile",
      mobileDesc: "Baixe Mostro para Android do GitHub. Versão iOS em breve.",
      mobileLink: "https://github.com/MostroP2P/mobile/releases",
      cli: "Mostrix TUI",
      cliDesc: "Uma interface de terminal amigável para o Mostro. Fácil de usar, sem necessidade de GUI.",
      cliLink: "https://github.com/MostroP2P/mostrix",
      community: "Junte-se às Comunidades",
      communityDesc: "Encontre comunidades de trading locais em mostro.community.",
      communityLink: "https://mostro.community",
      docs: "Documentação",
      docsDesc: "Aprenda o protocolo, guias de configuração e recursos para desenvolvedores.",
      docsLink: "https://mostro.network/docs-english/",
    },
    donate: {
      title: "Apoie o Desenvolvimento do Mostro",
      content: "Mostro é FOSS (Software Livre e de Código Aberto). Se você acha o projeto útil, considere fazer uma doação para nos ajudar a desenvolvê-lo e mantê-lo a longo prazo. Obrigado!",
      button: "Doar no Geyser",
      link: "https://geyser.fund/project/mostro",
    },
    footer: {
      desc: "Exchange P2P de Bitcoin não-custodial construído sobre Lightning Network e Nostr.",
      protocol: "Protocolo",
      community: "Comunidade",
      development: "Desenvolvimento",
      support: "Contribuir",
      github: "GitHub",
      telegram: "Telegram",
      nostr: "Nostr",
      foundation: "Fundação",
      supportedBy: "Apoiado por",
      geyser: "Doar",
      bottom: "Feito com ⚡ pela comunidade Mostro · 100% Código Aberto",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      howItWorks: "Comment ça marche",
      features: "Fonctionnalités",
      faq: "FAQ", 
      getStarted: "Commencer",
      donate: "Faire un don",
    },
    hero: {
      badge: "🚀 Protocole Ouvert",
      title: "Mostro",
      subtitle: "Échange P2P de Bitcoin sans KYC sur Lightning Network et Nostr",
      desc: "Trading révolutionnaire de Bitcoin peer-to-peer sans intermédiaires. Achetez et vendez du Bitcoin directement avec d'autres utilisateurs tout en maintenant une confidentialité complète et le contrôle de vos fonds.",
      ctaPrimary: "Commencer",
      ctaSecondary: "Comment ça marche",
      stat1: "Non-custodial",
      stat1Label: "Vos clés, vos bitcoins",
      stat2: "Rapide comme l'éclair",
      stat2Label: "Règlements instantanés",
      stat3: "Résistant à la censure",
      stat3Label: "Construit sur Nostr",
    },
    about: {
      title: "À propos de Mostro", 
      content: "Mostro, un projet d'avant-garde, développe une approche révolutionnaire pour faciliter les transactions Bitcoin via le Lightning Network. Le projet répond à la demande croissante d'achat et de vente de Bitcoin sans compromettre les données personnelles, introduisant une solution innovante pour les échanges peer-to-peer.\n\nMostro gère les communications sur Nostr, ce qui en fait une plateforme décentralisée sans point de défaillance unique. Cette conception améliore la résistance à la censure par rapport aux autres options existantes.",
    },
    howItWorks: {
      title: "Comment ça marche ?",
      subtitle: "Trading P2P non-custodial en 4 étapes simples. Sans intermédiaires, sans KYC.",
      content: "Mostro fonctionne comme un entiercement qui permet à l'acheteur et au vendeur d'échanger des bitcoins en P2P, réduisant les risques pour les deux parties, tout en ne détenant les Sats que le temps minimum nécessaire. Il utilise un nœud Lightning Network, qui crée des factures de retenue pour les vendeurs et paie les acheteurs avec des factures lightning ordinaires.\n\nIl fonctionne dans le protocole Nostr, donc les acheteurs et vendeurs auront besoin de clients Mostro pour pouvoir acheter/vendre du Bitcoin.",
      step1: "Obtenez un portefeuille Lightning",
      step1Desc: "Téléchargez n'importe quel portefeuille compatible Lightning et alimentez-le avec quelques sats.",
      step2: "Choisissez un client Mostro",
      step2Desc: "Utilisez une app mobile, un client web ou CLI pour vous connecter aux nœuds Mostro.",
      step3: "Créez ou acceptez un ordre",
      step3Desc: "Publiez un ordre d'achat/vente ou explorez les offres d'autres traders.",
      step4: "Négociez en peer-to-peer",
      step4Desc: "Le Bitcoin est maintenu en garde temporaire via des hold invoices Lightning. Lorsque le paiement fiat est confirmé, les sats sont libérés instantanément.",
    },
    features: {
      title: "Pourquoi choisir Mostro ?",
      subtitle: "Construit pour la confidentialité, la sécurité et la liberté",
      feature1: "Confidentialité par Conception",
      feature1Desc: "Communications chiffrées de bout en bout. Pas de comptes, pas de données personnelles stockées.",
      feature2: "Résistant à la Censure",
      feature2Desc: "Décentralisé sur le protocole Nostr. Aucun point unique de défaillance ou de contrôle.",
      feature3: "Non-Custodial",
      feature3Desc: "Votre Bitcoin reste dans votre portefeuille jusqu'au moment de l'échange. Temps de garde minimal.",
      feature4: "Protocole Ouvert",
      feature4Desc: "100% open source. Tout le monde peut gérer des nœuds, construire des clients, auditer le code.",
      feature5: "Nœuds Multiples",
      feature5Desc: "Choisissez parmi différents nœuds Mostro. La concurrence garantit un meilleur service.",
      feature6: "Pas de KYC",
      feature6Desc: "Aucune inscription, vérification ou contrôle d'identité requis.",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur Mostro",
      items: [
        {
          q: "Qu'est-ce que Mostro ? Est-ce une app ?",
          a: "Mostro n'est pas une app, c'est un protocole pour échanger du Bitcoin de façon peer-to-peer en utilisant Lightning Network et Nostr. Le protocole définit les règles et messages qui permettent à deux personnes d'échanger du bitcoin sans intermédiaires. Pour utiliser Mostro vous avez besoin d'un client, qui peut être une app mobile, une application de bureau ou une interface en ligne de commande.\n\nLa confusion est courante car il existe des apps qui implémentent le protocole Mostro, mais ces apps ne sont pas Mostro : elles sont juste un moyen d'interagir avec lui."
        },
        {
          q: "Dois-je m'inscrire ou vérifier mon identité ?",
          a: "Non. Mostro ne nécessite pas d'inscription, d'email, de téléphone ou aucun type de KYC. Votre identité est générée automatiquement dans le client que vous utilisez et seul vous la contrôlez via une phrase de récupération de 12 mots."
        },
        {
          q: "Comment Mostro me protège-t-il si ma contrepartie tente de m'arnaquer ?",
          a: "Les sats du vendeur restent retenus dans son portefeuille via une hold invoice jusqu'à ce qu'il confirme avoir reçu le paiement fiat. Si un problème survient, l'une des parties peut ouvrir un litige et un médiateur examinera le cas."
        },
        {
          q: "Mes opérations sont-elles privées ?",
          a: "Oui. Toute la communication est chiffrée de bout en bout. Mostro utilise des clés différentes pour chaque opération, ce qui empêche de lier vos échanges entre eux. Vous pouvez même opérer en mode de confidentialité avancée où même le nœud Mostro lui-même ne peut pas savoir quelles opérations vous appartiennent."
        },
        {
          q: "Que se passe-t-il si j'ai un problème avec mon téléphone pendant une opération ?",
          a: "Si votre téléphone s'éteint, casse, si vous le perdez ou qu'il soit volé pendant une opération, vous ne pouvez reprendre le contrôle que si vous avez une sauvegarde de votre phrase de récupération. En restaurant cette phrase sur un autre appareil, vous regagnez l'accès à vos clés et pouvez continuer l'opération.\n\nSans cette sauvegarde, il n'y a aucun moyen de récupérer la session ou les fonds associés."
        },
        {
          q: "Qu'est-ce qui rend Mostro différent des autres échanges P2P ?",
          a: "Trois différences fondamentales :\n\n**Résistance réelle à la censure :** Mostro n'est ni une plateforme ni une entreprise : c'est un protocole. Il fonctionne sur Nostr, un protocole ouvert et décentralisé.\n\n**Confidentialité par conception :** Il n'existe pas de comptes, d'emails ou d'identités persistantes. Chaque opération utilise des clés différentes.\n\n**Garde minimale :** Mostro ne détient pas les fonds des utilisateurs. Les sats restent bloqués dans le portefeuille du vendeur jusqu'à confirmation."
        },
        {
          q: "Combien Mostro facture-t-il par opération ?",
          a: "Chaque opérateur d'un nœud Mostro définit ses propres frais. Ils sont généralement bas (par exemple, environ 0,3% pour l'acheteur et le vendeur). Avant d'opérer, vérifiez toujours les frais du nœud que vous choisissez."
        },
        {
          q: "Quelles devises et méthodes de paiement Mostro accepte-t-il ?",
          a: "Cela dépend de chaque nœud Mostro. Les opérateurs décident quelles devises fiat ils supportent et les utilisateurs décident de la méthode de paiement (virement bancaire, espèces, paiement mobile, etc.)."
        },
        {
          q: "Existe-t-il un seul nœud Mostro ou y en a-t-il plusieurs ?",
          a: "Il y en a plusieurs. Mostro est le protocole, et chaque nœud Mostro est une implémentation indépendante qui l'exécute. N'importe qui peut opérer son propre nœud, avec ses propres frais, devises supportées et règles opérationnelles."
        },
        {
          q: "Pourquoi plusieurs nœuds Mostro existent-ils au lieu d'un seul ?",
          a: "Parce que la décentralisation est ce qui rend le système résistant à la censure. En ayant plusieurs nœuds opérés par différentes personnes dans différentes juridictions, il n'y a pas de point unique de défaillance. De plus, cette diversité introduit de la concurrence."
        },
        {
          q: "Comment commencer à utiliser Mostro ?",
          a: "Téléchargez un client Mostro, sauvegardez votre phrase de récupération de 12 mots et vous êtes prêt. Vous pouvez créer un ordre d'achat ou de vente, ou prendre un ordre existant du carnet d'ordres."
        },
        {
          q: "Je veux gérer mon propre nœud Mostro, par où commencer ?",
          a: "Mostro est un logiciel libre et n'importe qui peut opérer son propre nœud. Vous aurez besoin d'un serveur, d'un nœud Lightning Network (LND) et d'un accès aux relais Nostr. La documentation technique complète est disponible dans le référentiel officiel GitHub de Mostro."
        }
      ],
    },
    getStarted: {
      title: "Commencer avec Mostro",
      subtitle: "Tout ce dont vous avez besoin pour commencer à négocier du Bitcoin peer-to-peer",
      mobile: "App Mobile",
      mobileDesc: "Téléchargez Mostro pour Android depuis GitHub. Version iOS prochainement.",
      mobileLink: "https://github.com/MostroP2P/mobile/releases",
      cli: "Mostrix TUI",
      cliDesc: "Une interface terminal conviviale pour Mostro. Facile à utiliser, sans GUI nécessaire.",
      cliLink: "https://github.com/MostroP2P/mostrix",
      community: "Rejoindre les Communautés",
      communityDesc: "Trouvez des communautés de trading locales sur mostro.community.",
      communityLink: "https://mostro.community",
      docs: "Documentation",
      docsDesc: "Apprenez le protocole, guides de configuration et ressources développeur.",
      docsLink: "https://mostro.network/docs-english/",
    },
    donate: {
      title: "Soutenir le Développement de Mostro",
      content: "Mostro est FOSS (Logiciel Libre et Open Source). Si vous trouvez le projet utile, considérez faire un don pour nous aider à le développer et le maintenir à long terme. Merci !",
      button: "Faire un don sur Geyser",
      link: "https://geyser.fund/project/mostro",
    },
    footer: {
      desc: "Échange P2P de Bitcoin non-custodial construit sur Lightning Network et Nostr.",
      protocol: "Protocole",
      community: "Communauté", 
      development: "Développement",
      support: "Contribuer",
      github: "GitHub",
      telegram: "Telegram",
      nostr: "Nostr",
      foundation: "Fondation",
      supportedBy: "Soutenu par",
      geyser: "Faire un don",
      bottom: "Fait avec ⚡ par la communauté Mostro · 100% Open Source",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export const locales: Locale[] = ['en', 'es', 'it', 'pt', 'fr'];

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  if (lang === 'it') return 'it';  
  if (lang === 'pt') return 'pt';
  if (lang === 'fr') return 'fr';
  return 'en';
}

export function getLocalePath(locale: Locale, path: string = '/') {
  if (locale === 'en') return path;
  return `/${locale}${path === '/' ? '' : path}`;
}

export function getOtherLocales(locale: Locale): Locale[] {
  return locales.filter(l => l !== locale);
}

export function getLocaleLabel(locale: Locale): string {
  const labels: Record<Locale, string> = {
    en: 'EN 🇺🇸',
    es: 'ES 🇪🇸', 
    it: 'IT 🇮🇹',
    pt: 'PT 🇧🇷',
    fr: 'FR 🇫🇷',
  };
  return labels[locale];
}