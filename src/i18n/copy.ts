export const languages = [
  { id: "it", label: "Italiano", short: "IT" },
  { id: "en", label: "English", short: "EN" },
  { id: "es", label: "Español", short: "ES" },
  { id: "de", label: "Deutsch", short: "DE" },
  { id: "fr", label: "Français", short: "FR" },
] as const;

export type Lang = (typeof languages)[number]["id"];

export type Copy = {
  langLabel: string;
  skip: string;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  footerLabel: string;
  pageTitle: string;
  serverPageTitle: string;
  meta: string;
  locale: string;
  cta: string;
  seePlugins: string;
  code: string;
  email: string;
  role: string;
  headlineLead: string;
  headlineRest: string;
  lede: string;
  availability: string;
  response: string;
  skillsLabel: string;
  nav: { servizi: string; plugin: string; design: string; server: string; processo: string; prezzi: string; faq: string };
  zoom: string;
  close: string;
  designPageTitle: string;
  designTitle: string;
  designLede: string;
  design: { banner: Card; icon: Card; wordmark: Card; poster: Card; skins: Card };
  servicesTitle: string;
  servicesLede: string;
  services: { siti: Card; plugin: Card; server: Card };
  projectsTitle: string;
  projectsLede: string;
  filterLabel: string;
  filters: { tutti: string; web: string; plugin: string };
  techLabel: string;
  emptyWeb: string;
  samePlugin: string;
  plugin: {
    moderncore: Card;
    moderncrates: Card;
    modernarena: Card;
    modernstore: Card;
  };
  processTitle: string;
  processLede: string;
  steps: Card[];
  pricingTitle: string;
  pricingLede: string;
  onQuote: string;
  packages: { sito: Pack; plugin: Pack; setup: Pack };
  faqTitle: string;
  faq: { q: string; a: string }[];
  contactTitle: string;
  mailHint: string;
  mailSkip: string;
  mailSent: string;
  missing: string;
  name: string;
  contact: string;
  contactPlaceholder: string;
  projectType: string;
  choose: string;
  message: string;
  messagePlaceholder: string;
  types: { sito: string; plugin: string; server: string };
  errors: { name: string; contact: string; type: string; message: string };
  mail: { subject: string; name: string; contact: string; type: string };
  serverTitle: string;
  serverLede: string;
  serverCard: Card;
};

type Card = { title: string; text: string };
type Pack = { title: string; points: [string, string, string] };

const it: Copy = {
  langLabel: "Lingua",
  skip: "Salta al contenuto",
  menuOpen: "Apri il menu",
  menuClose: "Chiudi il menu",
  navLabel: "Pagine",
  footerLabel: "Piè di pagina",
  pageTitle: "Nyxon — plugin Paper, server e siti",
  serverPageTitle: "Nyxon — Server made",
  meta: "Plugin Paper pubblici: modernCore, modernCrates, modernArena, modernStore. Server e siti su richiesta.",
  locale: "it_IT",
  cta: "Preventivo",
  seePlugins: "Vedi i plugin",
  code: "Codice",
  email: "Email",
  role: "Web & Minecraft Developer",
  headlineLead: "Plugin Paper, server e siti.",
  headlineRest: "Core, crate, arene, shop.",
  lede: "Quelli pubblici sono su GitHub. Gli altri li scrivo su richiesta: comandi, permessi e YAML.",
  availability: "Questo mese ho posto per un lavoro.",
  response: "Rispondo in italiano entro un giorno.",
  skillsLabel: "Competenze",
  nav: { servizi: "Servizi", plugin: "Plugin", design: "Design", server: "Server", processo: "Processo", prezzi: "Prezzi", faq: "Domande" },
  zoom: "Ingrandisci",
  close: "Chiudi",
  designPageTitle: "Nyxon — Design",
  designTitle: "Design",
  designLede: "Logo di RiftMC e le skin Nyxon.",
  design: {
    banner: { title: "Banner", text: "Mascotte, wordmark e una crepa. Per header e Discord." },
    icon: { title: "Icona", text: "Pianeta, occhiali e due spade. Per l’icona del server." },
    wordmark: { title: "Wordmark", text: "RIFTMC in piatto, con le spade dietro." },
    poster: { title: "Poster 9:16", text: "Stessa mascotte e un solo pianeta. Per TikTok e Shorts." },
    skins: { title: "Skin", text: "23 skin Nyxon, vista frontale." },
  },
  servicesTitle: "Cosa faccio",
  servicesLede: "Plugin, server o una pagina. Il prezzo arriva dopo, con l’elenco di cosa è dentro.",
  services: {
    siti: { title: "Siti", text: "Una pagina per il server o per un plugin, con i comandi e un contatto." },
    plugin: { title: "Plugin Paper", text: "Comandi, permessi, GUI e YAML. Il reload unisce le chiavi nuove e rigenera i file rotti." },
    server: { title: "Server", text: "Paper, plugin e mondo. Config, permessi e comandi dello staff già impostati." },
  },
  projectsTitle: "Plugin",
  projectsLede: "Quattro repository pubblici. Versioni e dipendenze sono quelle dei README.",
  filterLabel: "Filtra i progetti",
  filters: { tutti: "Tutti", web: "Web", plugin: "Plugin" },
  techLabel: "Tecnologie",
  emptyWeb: "Non ho un sito di un cliente da mettere qui.",
  samePlugin: "Per un plugin dello stesso tipo, scrivi il comando che ti serve.",
  plugin: {
    moderncore: {
      title: "Spawn, home, warp, chat, kit, sell e moderazione.",
      text: "Paper 26.2, Java 25. /kick, /ban e /vanish restano i nomi vanilla. I moduli si spengono da config.yml.",
    },
    moderncrates: {
      title: "Chiavi fisiche, chiavi virtuali e lootbox.",
      text: "Editor in gioco e anteprima degli slot. Premi vanilla, MMOItems, ItemsAdder o Nexo. Paper 26.2.",
    },
    modernarena: {
      title: "Arene e dungeon istanziati.",
      text: "Il template viene copiato in un mondo a parte. Party, coda, kill e milestone su SQLite o MySQL. Serve MythicMobs.",
    },
    modernstore: {
      title: "Shop a rotazione, pescato da un pool.",
      text: "A ogni ciclo il peso sceglie gli item. Prezzi e saldo passano da CoinsEngine e PlaceholderAPI. Paper 1.19+, Java 17.",
    },
  },
  processTitle: "Come lavoro",
  processLede: "Dal messaggio al jar, o alla pagina.",
  steps: [
    { title: "Messaggio", text: "Mi scrivi il comando, la GUI o la pagina." },
    { title: "Preventivo", text: "Ti rispondo con prezzo, giorni e cosa è incluso." },
    { title: "Prova", text: "Lo costruisco e te lo faccio provare prima della consegna." },
    { title: "Consegna", text: "Jar o sito, config e comandi. I bug di quella consegna li correggo io." },
  ],
  pricingTitle: "Prezzi",
  pricingLede: "Il prezzo sta nel preventivo, insieme a cosa non è incluso.",
  onQuote: "Su preventivo",
  packages: {
    sito: { title: "Sito", points: ["Pagina del server o del plugin", "Testi e form", "Messa online"] },
    plugin: { title: "Plugin Paper", points: ["Comandi e permessi", "Config YAML", "Prova sul server di test"] },
    setup: { title: "Setup server", points: ["Paper e plugin", "Mondo, config e permessi", "Elenco comandi dello staff"] },
  },
  faqTitle: "Domande",
  faq: [
    { q: "Quanto costa?", a: "Lo scrivo nella prima risposta, insieme a cosa non è incluso. Un plugin con pochi comandi e un network non hanno lo stesso prezzo." },
    { q: "In quanto tempo?", a: "I giorni stanno nel preventivo. Dipende da comandi, GUI e da quanti plugin vanno collegati." },
    { q: "Dopo la consegna?", a: "Correggo i bug di jar, config e comandi che ti ho consegnato. I comandi nuovi si quotano a parte." },
    { q: "Solo Minecraft?", a: "No. Faccio anche siti. I plugin li scrivo per Paper." },
  ],
  contactTitle: "Preventivo",
  mailHint: "Si apre la tua email. Devi solo premere invia.",
  mailSkip: "Scrivimi senza compilare il form",
  mailSent: "Ho preparato l’email. Inviala dal programma che si è aperto.",
  missing: "Manca qualcosa",
  name: "Nome",
  contact: "Email o Discord",
  contactPlaceholder: "nome@email.com…",
  projectType: "Tipo di progetto",
  choose: "Scegli…",
  message: "Messaggio",
  messagePlaceholder: "Il comando, la crate o la pagina.",
  types: { sito: "Sito", plugin: "Plugin", server: "Server" },
  errors: {
    name: "Scrivi come ti chiami.",
    contact: "Scrivi un’email o un contatto Discord.",
    type: "Scegli il tipo di lavoro.",
    message: "Scrivi cosa ti serve, anche in due righe.",
  },
  mail: { subject: "Preventivo", name: "Nome", contact: "Contatto", type: "Tipo" },
  serverTitle: "Server made",
  serverLede: "Server che sto costruendo in locale. Nessuno ha un IP pubblico.",
  serverCard: {
    title: "RPG a classi. Non è online.",
    text: "Gira solo in locale, su Paper con MMOCore e MMOItems. Lo sto ancora finendo.",
  },
};

const en: Copy = {
  langLabel: "Language",
  skip: "Skip to content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  navLabel: "Pages",
  footerLabel: "Footer",
  pageTitle: "Nyxon — Paper plugins, servers and sites",
  serverPageTitle: "Nyxon — Server made",
  meta: "Public Paper plugins: modernCore, modernCrates, modernArena, modernStore. Servers and sites on request.",
  locale: "en_US",
  cta: "Quote",
  seePlugins: "See the plugins",
  code: "Code",
  email: "Email",
  role: "Web & Minecraft Developer",
  headlineLead: "Paper plugins, servers and sites.",
  headlineRest: "Core, crates, arenas, shop.",
  lede: "The public ones are on GitHub. I write the rest on request: commands, permissions and YAML.",
  availability: "I can take one new job this month.",
  response: "I reply in Italian or English within a day.",
  skillsLabel: "Skills",
  nav: { servizi: "Services", plugin: "Plugins", design: "Design", server: "Server", processo: "Process", prezzi: "Prices", faq: "Questions" },
  zoom: "Zoom in",
  close: "Close",
  designPageTitle: "Nyxon — Design",
  designTitle: "Design",
  designLede: "The RiftMC logo and the Nyxon skins.",
  design: {
    banner: { title: "Banner", text: "Mascot, wordmark and one crack. For a header and Discord." },
    icon: { title: "Icon", text: "Planet, sunglasses and two swords. For the server icon." },
    wordmark: { title: "Wordmark", text: "Flat RIFTMC, with the swords behind it." },
    poster: { title: "Poster 9:16", text: "The same mascot and one planet. For TikTok and Shorts." },
    skins: { title: "Skins", text: "23 Nyxon skins, front view." },
  },
  servicesTitle: "What I do",
  servicesLede: "A plugin, a server, or a page. The price comes after, with the list of what is included.",
  services: {
    siti: { title: "Sites", text: "A page for the server or a plugin, with the commands and a contact." },
    plugin: { title: "Paper plugins", text: "Commands, permissions, GUIs and YAML. Reload merges new keys and rebuilds broken files." },
    server: { title: "Servers", text: "Paper, plugins and the world. Config, permissions and staff commands already set." },
  },
  projectsTitle: "Plugins",
  projectsLede: "Four public repositories. Versions and dependencies match the READMEs.",
  filterLabel: "Filter projects",
  filters: { tutti: "All", web: "Web", plugin: "Plugin" },
  techLabel: "Technologies",
  emptyWeb: "I have no client site to put here.",
  samePlugin: "For the same kind of plugin, write the command you need.",
  plugin: {
    moderncore: {
      title: "Spawn, homes, warps, chat, kits, sell and moderation.",
      text: "Paper 26.2, Java 25. /kick, /ban and /vanish keep the vanilla names. Modules turn off in config.yml.",
    },
    moderncrates: {
      title: "Physical keys, virtual keys and lootboxes.",
      text: "In-game editor and a per-slot preview. Rewards can be vanilla, MMOItems, ItemsAdder or Nexo. Paper 26.2.",
    },
    modernarena: {
      title: "Instanced arenas and dungeons.",
      text: "The template is copied into its own world. Party, queue, kills and milestones on SQLite or MySQL. Requires MythicMobs.",
    },
    modernstore: {
      title: "Rotating shop, drawn from a pool.",
      text: "Each cycle, weight picks the items. Prices and balance go through CoinsEngine and PlaceholderAPI. Paper 1.19+, Java 17.",
    },
  },
  processTitle: "How I work",
  processLede: "From the message to the jar, or the page.",
  steps: [
    { title: "Message", text: "You write the command, the GUI or the page." },
    { title: "Quote", text: "I reply with the price, the days and what is included." },
    { title: "Trial", text: "I build it and you try it before delivery." },
    { title: "Delivery", text: "Jar or site, config and commands. I fix bugs in that delivery." },
  ],
  pricingTitle: "Prices",
  pricingLede: "The price is in the quote, along with what is not included.",
  onQuote: "On quote",
  packages: {
    sito: { title: "Site", points: ["Server or plugin page", "Copy and form", "Published online"] },
    plugin: { title: "Paper plugin", points: ["Commands and permissions", "YAML config", "Test on a test server"] },
    setup: { title: "Server setup", points: ["Paper and plugins", "World, config and permissions", "Staff command list"] },
  },
  faqTitle: "Questions",
  faq: [
    { q: "How much?", a: "I write it in the first reply, with what is not included. A plugin with a few commands and a network are not the same price." },
    { q: "How long?", a: "The days are in the quote. It depends on commands, GUIs and how many plugins have to connect." },
    { q: "After delivery?", a: "I fix bugs in the jar, config and commands I delivered. New commands are a separate quote." },
    { q: "Minecraft only?", a: "No. I also make sites. Plugins are for Paper." },
  ],
  contactTitle: "Quote",
  mailHint: "Your email app opens. You only have to press send.",
  mailSkip: "Email me without the form",
  mailSent: "The email is ready. Send it from the app that opened.",
  missing: "Something is missing",
  name: "Name",
  contact: "Email or Discord",
  contactPlaceholder: "name@email.com…",
  projectType: "Project type",
  choose: "Choose…",
  message: "Message",
  messagePlaceholder: "The command, the crate, or the page.",
  types: { sito: "Site", plugin: "Plugin", server: "Server" },
  errors: {
    name: "Write your name.",
    contact: "Write an email or a Discord contact.",
    type: "Choose the kind of work.",
    message: "Write what you need, even in two lines.",
  },
  mail: { subject: "Quote", name: "Name", contact: "Contact", type: "Type" },
  serverTitle: "Server made",
  serverLede: "Servers I am building locally. None of them has a public IP.",
  serverCard: {
    title: "Class RPG. It is not online.",
    text: "It only runs locally, on Paper with MMOCore and MMOItems. I am still finishing it.",
  },
};

const es: Copy = {
  langLabel: "Idioma",
  skip: "Saltar al contenido",
  menuOpen: "Abrir el menú",
  menuClose: "Cerrar el menú",
  navLabel: "Páginas",
  footerLabel: "Pie de página",
  pageTitle: "Nyxon — plugins de Paper, servidores y sitios",
  serverPageTitle: "Nyxon — Server made",
  meta: "Plugins de Paper públicos: modernCore, modernCrates, modernArena, modernStore. Servidores y sitios por encargo.",
  locale: "es_ES",
  cta: "Presupuesto",
  seePlugins: "Ver los plugins",
  code: "Código",
  email: "Email",
  role: "Web & Minecraft Developer",
  headlineLead: "Plugins de Paper, servidores y sitios.",
  headlineRest: "Core, crates, arenas, shop.",
  lede: "Los públicos están en GitHub. El resto lo escribo por encargo: comandos, permisos y YAML.",
  availability: "Este mes tengo sitio para un trabajo.",
  response: "Respondo en italiano o en español en un día.",
  skillsLabel: "Competencias",
  nav: { servizi: "Servicios", plugin: "Plugins", design: "Diseño", server: "Server", processo: "Proceso", prezzi: "Precios", faq: "Preguntas" },
  zoom: "Ampliar",
  close: "Cerrar",
  designPageTitle: "Nyxon — Diseño",
  designTitle: "Diseño",
  designLede: "El logo de RiftMC y las skins de Nyxon.",
  design: {
    banner: { title: "Banner", text: "Mascota, wordmark y una grieta. Para la cabecera y Discord." },
    icon: { title: "Icono", text: "Planeta, gafas y dos espadas. Para el icono del servidor." },
    wordmark: { title: "Wordmark", text: "RIFTMC en plano, con las espadas detrás." },
    poster: { title: "Póster 9:16", text: "La misma mascota y un solo planeta. Para TikTok y Shorts." },
    skins: { title: "Skins", text: "23 skins de Nyxon, vista frontal." },
  },
  servicesTitle: "Qué hago",
  servicesLede: "Un plugin, un servidor o una página. El precio llega después, con la lista de lo que incluye.",
  services: {
    siti: { title: "Sitios", text: "Una página para el servidor o para un plugin, con los comandos y un contacto." },
    plugin: { title: "Plugins de Paper", text: "Comandos, permisos, GUI y YAML. El reload une las claves nuevas y regenera los archivos rotos." },
    server: { title: "Servidores", text: "Paper, plugins y mundo. Config, permisos y comandos del staff ya puestos." },
  },
  projectsTitle: "Plugins",
  projectsLede: "Cuatro repositorios públicos. Versiones y dependencias son las de los README.",
  filterLabel: "Filtrar proyectos",
  filters: { tutti: "Todos", web: "Web", plugin: "Plugin" },
  techLabel: "Tecnologías",
  emptyWeb: "No tengo un sitio de un cliente para poner aquí.",
  samePlugin: "Para un plugin del mismo tipo, escribe el comando que necesitas.",
  plugin: {
    moderncore: {
      title: "Spawn, home, warp, chat, kit, sell y moderación.",
      text: "Paper 26.2, Java 25. /kick, /ban y /vanish siguen con los nombres vanilla. Los módulos se apagan en config.yml.",
    },
    moderncrates: {
      title: "Llaves físicas, llaves virtuales y lootboxes.",
      text: "Editor en el juego y vista previa por hueco. Premios vanilla, MMOItems, ItemsAdder o Nexo. Paper 26.2.",
    },
    modernarena: {
      title: "Arenas y dungeons instanciados.",
      text: "La plantilla se copia a un mundo aparte. Party, cola, kills y milestones en SQLite o MySQL. Hace falta MythicMobs.",
    },
    modernstore: {
      title: "Tienda que rota, sacada de un pool.",
      text: "En cada ciclo el peso elige los ítems. Precios y saldo pasan por CoinsEngine y PlaceholderAPI. Paper 1.19+, Java 17.",
    },
  },
  processTitle: "Cómo trabajo",
  processLede: "Del mensaje al jar, o a la página.",
  steps: [
    { title: "Mensaje", text: "Me escribes el comando, la GUI o la página." },
    { title: "Presupuesto", text: "Te respondo con precio, días y qué está incluido." },
    { title: "Prueba", text: "Lo construyo y lo pruebas antes de la entrega." },
    { title: "Entrega", text: "Jar o sitio, config y comandos. Los bugs de esa entrega los corrijo yo." },
  ],
  pricingTitle: "Precios",
  pricingLede: "El precio está en el presupuesto, junto con lo que no incluye.",
  onQuote: "Según presupuesto",
  packages: {
    sito: { title: "Sitio", points: ["Página del servidor o del plugin", "Textos y formulario", "Publicación"] },
    plugin: { title: "Plugin de Paper", points: ["Comandos y permisos", "Config YAML", "Prueba en un servidor de test"] },
    setup: { title: "Setup del servidor", points: ["Paper y plugins", "Mundo, config y permisos", "Lista de comandos del staff"] },
  },
  faqTitle: "Preguntas",
  faq: [
    { q: "¿Cuánto cuesta?", a: "Lo escribo en la primera respuesta, junto con lo que no incluye. Un plugin con pocos comandos y una network no cuestan igual." },
    { q: "¿En cuánto tiempo?", a: "Los días están en el presupuesto. Depende de comandos, GUI y de cuántos plugins hay que enlazar." },
    { q: "¿Después de la entrega?", a: "Corrijo los bugs del jar, la config y los comandos que te entregué. Los comandos nuevos se presupuestan aparte." },
    { q: "¿Solo Minecraft?", a: "No. También hago sitios. Los plugins son para Paper." },
  ],
  contactTitle: "Presupuesto",
  mailHint: "Se abre tu correo. Solo tienes que pulsar enviar.",
  mailSkip: "Escríbeme sin rellenar el formulario",
  mailSent: "El correo está listo. Envíalo desde el programa que se abrió.",
  missing: "Falta algo",
  name: "Nombre",
  contact: "Email o Discord",
  contactPlaceholder: "nombre@email.com…",
  projectType: "Tipo de proyecto",
  choose: "Elige…",
  message: "Mensaje",
  messagePlaceholder: "El comando, la crate o la página.",
  types: { sito: "Sitio", plugin: "Plugin", server: "Servidor" },
  errors: {
    name: "Escribe cómo te llamas.",
    contact: "Escribe un email o un contacto de Discord.",
    type: "Elige el tipo de trabajo.",
    message: "Escribe qué necesitas, aunque sean dos líneas.",
  },
  mail: { subject: "Presupuesto", name: "Nombre", contact: "Contacto", type: "Tipo" },
  serverTitle: "Server made",
  serverLede: "Servidores que estoy construyendo en local. Ninguno tiene una IP pública.",
  serverCard: {
    title: "RPG de clases. No está online.",
    text: "Solo corre en local, en Paper con MMOCore y MMOItems. Todavía lo estoy terminando.",
  },
};

const de: Copy = {
  langLabel: "Sprache",
  skip: "Zum Inhalt springen",
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
  navLabel: "Seiten",
  footerLabel: "Fußzeile",
  pageTitle: "Nyxon — Paper-Plugins, Server und Seiten",
  serverPageTitle: "Nyxon — Server made",
  meta: "Öffentliche Paper-Plugins: modernCore, modernCrates, modernArena, modernStore. Server und Seiten auf Anfrage.",
  locale: "de_DE",
  cta: "Angebot",
  seePlugins: "Plugins ansehen",
  code: "Code",
  email: "E-Mail",
  role: "Web & Minecraft Developer",
  headlineLead: "Paper-Plugins, Server und Seiten.",
  headlineRest: "Core, Crates, Arenen, Shop.",
  lede: "Die öffentlichen liegen auf GitHub. Den Rest schreibe ich auf Anfrage: Befehle, Rechte und YAML.",
  availability: "Diesen Monat habe ich Platz für einen Auftrag.",
  response: "Ich antworte auf Italienisch oder Deutsch innerhalb eines Tages.",
  skillsLabel: "Kenntnisse",
  nav: { servizi: "Leistungen", plugin: "Plugins", design: "Design", server: "Server", processo: "Ablauf", prezzi: "Preise", faq: "Fragen" },
  zoom: "Vergrößern",
  close: "Schließen",
  designPageTitle: "Nyxon — Design",
  designTitle: "Design",
  designLede: "Das RiftMC-Logo und die Nyxon-Skins.",
  design: {
    banner: { title: "Banner", text: "Maskottchen, Wordmark und ein Riss. Für Header und Discord." },
    icon: { title: "Icon", text: "Planet, Brille und zwei Schwerter. Für das Server-Icon." },
    wordmark: { title: "Wordmark", text: "Flaches RIFTMC, die Schwerter dahinter." },
    poster: { title: "Poster 9:16", text: "Dasselbe Maskottchen und ein Planet. Für TikTok und Shorts." },
    skins: { title: "Skins", text: "23 Nyxon-Skins, Vorderansicht." },
  },
  servicesTitle: "Was ich mache",
  servicesLede: "Ein Plugin, ein Server oder eine Seite. Der Preis kommt danach, mit der Liste dessen, was enthalten ist.",
  services: {
    siti: { title: "Seiten", text: "Eine Seite für den Server oder ein Plugin, mit den Befehlen und einem Kontakt." },
    plugin: { title: "Paper-Plugins", text: "Befehle, Rechte, GUIs und YAML. Reload fügt neue Schlüssel zusammen und baut kaputte Dateien neu." },
    server: { title: "Server", text: "Paper, Plugins und Welt. Config, Rechte und Staff-Befehle sind schon gesetzt." },
  },
  projectsTitle: "Plugins",
  projectsLede: "Vier öffentliche Repositories. Versionen und Abhängigkeiten stehen so in den READMEs.",
  filterLabel: "Projekte filtern",
  filters: { tutti: "Alle", web: "Web", plugin: "Plugin" },
  techLabel: "Technologien",
  emptyWeb: "Ich habe keine Kundenseite, die ich hier zeigen kann.",
  samePlugin: "Für ein Plugin derselben Art schreib den Befehl, den du brauchst.",
  plugin: {
    moderncore: {
      title: "Spawn, Homes, Warps, Chat, Kits, Sell und Moderation.",
      text: "Paper 26.2, Java 25. /kick, /ban und /vanish behalten die Vanilla-Namen. Module schaltet man in der config.yml aus.",
    },
    moderncrates: {
      title: "Physische Keys, virtuelle Keys und Lootboxen.",
      text: "Editor im Spiel und Vorschau pro Slot. Belohnungen vanilla, MMOItems, ItemsAdder oder Nexo. Paper 26.2.",
    },
    modernarena: {
      title: "Instanzierte Arenen und Dungeons.",
      text: "Das Template wird in eine eigene Welt kopiert. Party, Queue, Kills und Milestones auf SQLite oder MySQL. MythicMobs ist nötig.",
    },
    modernstore: {
      title: "Rotierender Shop aus einem Pool.",
      text: "Jeder Zyklus wählt die Items nach Gewicht. Preise und Guthaben laufen über CoinsEngine und PlaceholderAPI. Paper 1.19+, Java 17.",
    },
  },
  processTitle: "So arbeite ich",
  processLede: "Von der Nachricht zum Jar oder zur Seite.",
  steps: [
    { title: "Nachricht", text: "Du schreibst den Befehl, die GUI oder die Seite." },
    { title: "Angebot", text: "Ich antworte mit Preis, Tagen und dem, was enthalten ist." },
    { title: "Probe", text: "Ich baue es, und du probierst es vor der Übergabe." },
    { title: "Übergabe", text: "Jar oder Seite, Config und Befehle. Fehler an dieser Lieferung behebe ich." },
  ],
  pricingTitle: "Preise",
  pricingLede: "Der Preis steht im Angebot, zusammen mit dem, was nicht enthalten ist.",
  onQuote: "Nach Angebot",
  packages: {
    sito: { title: "Seite", points: ["Seite für Server oder Plugin", "Texte und Formular", "Online stellen"] },
    plugin: { title: "Paper-Plugin", points: ["Befehle und Rechte", "YAML-Config", "Test auf einem Testserver"] },
    setup: { title: "Server-Setup", points: ["Paper und Plugins", "Welt, Config und Rechte", "Liste der Staff-Befehle"] },
  },
  faqTitle: "Fragen",
  faq: [
    { q: "Was kostet es?", a: "Das schreibe ich in die erste Antwort, zusammen mit dem, was nicht enthalten ist. Ein Plugin mit wenigen Befehlen und ein Netzwerk kosten nicht gleich." },
    { q: "Wie lange?", a: "Die Tage stehen im Angebot. Es hängt von Befehlen, GUIs und davon ab, wie viele Plugins verbunden werden." },
    { q: "Nach der Übergabe?", a: "Ich korrigiere Fehler an Jar, Config und Befehlen, die ich geliefert habe. Neue Befehle sind ein eigenes Angebot." },
    { q: "Nur Minecraft?", a: "Nein. Ich mache auch Seiten. Plugins schreibe ich für Paper." },
  ],
  contactTitle: "Angebot",
  mailHint: "Dein E-Mail-Programm öffnet sich. Du musst nur auf Senden drücken.",
  mailSkip: "Schreib mir ohne das Formular",
  mailSent: "Die E-Mail ist fertig. Schick sie aus dem Programm, das sich geöffnet hat.",
  missing: "Da fehlt etwas",
  name: "Name",
  contact: "E-Mail oder Discord",
  contactPlaceholder: "name@email.com…",
  projectType: "Projektart",
  choose: "Wählen…",
  message: "Nachricht",
  messagePlaceholder: "Der Befehl, die Crate oder die Seite.",
  types: { sito: "Seite", plugin: "Plugin", server: "Server" },
  errors: {
    name: "Schreib deinen Namen.",
    contact: "Schreib eine E-Mail oder einen Discord-Kontakt.",
    type: "Wähl die Art der Arbeit.",
    message: "Schreib, was du brauchst, auch in zwei Zeilen.",
  },
  mail: { subject: "Angebot", name: "Name", contact: "Kontakt", type: "Art" },
  serverTitle: "Server made",
  serverLede: "Server, die ich lokal baue. Keiner hat eine öffentliche IP.",
  serverCard: {
    title: "Klassen-RPG. Es ist nicht online.",
    text: "Es läuft nur lokal, auf Paper mit MMOCore und MMOItems. Ich bin noch nicht fertig.",
  },
};

const fr: Copy = {
  langLabel: "Langue",
  skip: "Aller au contenu",
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
  navLabel: "Pages",
  footerLabel: "Pied de page",
  pageTitle: "Nyxon — plugins Paper, serveurs et sites",
  serverPageTitle: "Nyxon — Server made",
  meta: "Plugins Paper publics : modernCore, modernCrates, modernArena, modernStore. Serveurs et sites sur demande.",
  locale: "fr_FR",
  cta: "Devis",
  seePlugins: "Voir les plugins",
  code: "Code",
  email: "E-mail",
  role: "Web & Minecraft Developer",
  headlineLead: "Plugins Paper, serveurs et sites.",
  headlineRest: "Core, crates, arènes, shop.",
  lede: "Ceux qui sont publics sont sur GitHub. Le reste, je l’écris sur demande : commandes, permissions et YAML.",
  availability: "Ce mois-ci j’ai de la place pour un travail.",
  response: "Je réponds en italien ou en français sous un jour.",
  skillsLabel: "Compétences",
  nav: { servizi: "Services", plugin: "Plugins", design: "Design", server: "Serveur", processo: "Déroulement", prezzi: "Prix", faq: "Questions" },
  zoom: "Agrandir",
  close: "Fermer",
  designPageTitle: "Nyxon — Design",
  designTitle: "Design",
  designLede: "Le logo RiftMC et les skins Nyxon.",
  design: {
    banner: { title: "Bannière", text: "Mascotte, wordmark et une fissure. Pour l’en-tête et Discord." },
    icon: { title: "Icône", text: "Planète, lunettes et deux épées. Pour l’icône du serveur." },
    wordmark: { title: "Wordmark", text: "RIFTMC à plat, les épées derrière." },
    poster: { title: "Affiche 9:16", text: "La même mascotte et une seule planète. Pour TikTok et Shorts." },
    skins: { title: "Skins", text: "23 skins Nyxon, vue de face." },
  },
  servicesTitle: "Ce que je fais",
  servicesLede: "Un plugin, un serveur ou une page. Le prix arrive ensuite, avec la liste de ce qui est inclus.",
  services: {
    siti: { title: "Sites", text: "Une page pour le serveur ou pour un plugin, avec les commandes et un contact." },
    plugin: { title: "Plugins Paper", text: "Commandes, permissions, GUI et YAML. Le reload fusionne les nouvelles clés et régénère les fichiers cassés." },
    server: { title: "Serveurs", text: "Paper, plugins et monde. Config, permissions et commandes du staff déjà en place." },
  },
  projectsTitle: "Plugins",
  projectsLede: "Quatre dépôts publics. Versions et dépendances sont celles des README.",
  filterLabel: "Filtrer les projets",
  filters: { tutti: "Tous", web: "Web", plugin: "Plugin" },
  techLabel: "Technologies",
  emptyWeb: "Je n’ai pas de site client à mettre ici.",
  samePlugin: "Pour un plugin du même type, écris la commande qu’il te faut.",
  plugin: {
    moderncore: {
      title: "Spawn, homes, warps, chat, kits, sell et modération.",
      text: "Paper 26.2, Java 25. /kick, /ban et /vanish gardent les noms vanilla. Les modules s’éteignent dans config.yml.",
    },
    moderncrates: {
      title: "Clés physiques, clés virtuelles et lootboxes.",
      text: "Éditeur en jeu et aperçu par emplacement. Récompenses vanilla, MMOItems, ItemsAdder ou Nexo. Paper 26.2.",
    },
    modernarena: {
      title: "Arènes et donjons instanciés.",
      text: "Le template est copié dans un monde à part. Groupe, file, kills et paliers sur SQLite ou MySQL. MythicMobs est requis.",
    },
    modernstore: {
      title: "Boutique qui tourne, tirée d’un pool.",
      text: "À chaque cycle, le poids choisit les items. Prix et solde passent par CoinsEngine et PlaceholderAPI. Paper 1.19+, Java 17.",
    },
  },
  processTitle: "Comment je travaille",
  processLede: "Du message au jar, ou à la page.",
  steps: [
    { title: "Message", text: "Tu m’écris la commande, la GUI ou la page." },
    { title: "Devis", text: "Je réponds avec le prix, les jours et ce qui est inclus." },
    { title: "Essai", text: "Je le construis et tu l’essaies avant la livraison." },
    { title: "Livraison", text: "Jar ou site, config et commandes. Je corrige les bugs de cette livraison." },
  ],
  pricingTitle: "Prix",
  pricingLede: "Le prix est dans le devis, avec ce qui n’est pas inclus.",
  onQuote: "Sur devis",
  packages: {
    sito: { title: "Site", points: ["Page du serveur ou du plugin", "Textes et formulaire", "Mise en ligne"] },
    plugin: { title: "Plugin Paper", points: ["Commandes et permissions", "Config YAML", "Essai sur un serveur de test"] },
    setup: { title: "Setup serveur", points: ["Paper et plugins", "Monde, config et permissions", "Liste des commandes du staff"] },
  },
  faqTitle: "Questions",
  faq: [
    { q: "Combien ?", a: "Je l’écris dans la première réponse, avec ce qui n’est pas inclus. Un plugin avec peu de commandes et un réseau n’ont pas le même prix." },
    { q: "En combien de temps ?", a: "Les jours sont dans le devis. Ça dépend des commandes, des GUI et du nombre de plugins à relier." },
    { q: "Après la livraison ?", a: "Je corrige les bugs du jar, de la config et des commandes que je t’ai livrés. Les nouvelles commandes sont un autre devis." },
    { q: "Seulement Minecraft ?", a: "Non. Je fais aussi des sites. Les plugins sont pour Paper." },
  ],
  contactTitle: "Devis",
  mailHint: "Ton logiciel mail s’ouvre. Tu n’as plus qu’à envoyer.",
  mailSkip: "Écris-moi sans remplir le formulaire",
  mailSent: "Le mail est prêt. Envoie-le depuis le programme qui s’est ouvert.",
  missing: "Il manque quelque chose",
  name: "Nom",
  contact: "E-mail ou Discord",
  contactPlaceholder: "nom@email.com…",
  projectType: "Type de projet",
  choose: "Choisir…",
  message: "Message",
  messagePlaceholder: "La commande, la crate ou la page.",
  types: { sito: "Site", plugin: "Plugin", server: "Serveur" },
  errors: {
    name: "Écris ton nom.",
    contact: "Écris un e-mail ou un contact Discord.",
    type: "Choisis le type de travail.",
    message: "Écris ce qu’il te faut, même en deux lignes.",
  },
  mail: { subject: "Devis", name: "Nom", contact: "Contact", type: "Type" },
  serverTitle: "Server made",
  serverLede: "Serveurs que je construis en local. Aucun n’a d’IP publique.",
  serverCard: {
    title: "RPG à classes. Il n’est pas en ligne.",
    text: "Il tourne seulement en local, sur Paper avec MMOCore et MMOItems. Je le termine encore.",
  },
};

export const copy: Record<Lang, Copy> = { it, en, es, de, fr };

export function isLang(value: string | null): value is Lang {
  return value === "it" || value === "en" || value === "es" || value === "de" || value === "fr";
}
