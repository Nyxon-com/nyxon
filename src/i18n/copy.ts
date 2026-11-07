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
  mailFail: string;
  openMail: string;
  copyMessage: string;
  copied: string;
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
  headlineLead: "Ti programmo io il server, il plugin o il sito.",
  headlineRest: "Loro rimangono per sempre funzionanti, svolgendo il loro lavoro.",
  lede: "Su GitHub ci sono i plugin pubblici, li scarichi da lì. Se ti serve un comando, un permesso o un file YAML per il tuo server, lo scrivo io.",
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
  projectsLede: "Quattro plugin, tutti su GitHub. Versione e dipendenze le trovi nel README di ciascuno.",
  filterLabel: "Filtra i progetti",
  filters: { tutti: "Tutti", web: "Web", plugin: "Plugin" },
  techLabel: "Tecnologie",
  emptyWeb: "Non ho un sito di un cliente da mettere qui.",
  samePlugin: "Per un plugin dello stesso tipo, scrivi il comando che ti serve.",
  plugin: {
    moderncore: {
      title: "Spawn, home, warp, chat, kit, sell e moderazione.",
      text: "Lo metti su Paper 26.2 con Java 25. /kick, /ban e /vanish restano i comandi vanilla, e se un modulo non ti serve lo spegni da config.yml.",
    },
    moderncrates: {
      title: "Chiavi fisiche, chiavi virtuali e lootbox.",
      text: "Apri l'editor in gioco e vedi l'anteprima di ogni slot prima di salvare. I premi possono essere vanilla, MMOItems, ItemsAdder o Nexo. Serve Paper 26.2.",
    },
    modernarena: {
      title: "Arene e dungeon istanziati.",
      text: "Copi un template e il plugin lo mette in un mondo a parte, così l'arena non tocca la mappa. Party, coda, kill e milestone finiscono su SQLite o MySQL. Per i mob ti serve MythicMobs.",
    },
    modernstore: {
      title: "Shop a rotazione, pescato da un pool.",
      text: "A ogni ciclo il peso decide quali item finiscono in vetrina. Prezzi e saldo li legge da CoinsEngine e PlaceholderAPI. Funziona da Paper 1.19 in su, con Java 17.",
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
  mailHint: "Si apre Gmail con il messaggio già scritto.",
  mailSkip: "Scrivimi senza compilare il form",
  mailSent: "Messaggio pronto. Se la scheda non si è aperta, premi il link.",
  mailFail: "Apri in Gmail",
  openMail: "Apri nel programma di posta",
  copyMessage: "Copia il messaggio",
  copied: "Copiato.",
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
  headlineLead: "I program the server, the plugin or the site.",
  headlineRest: "They stay working for good, doing their job.",
  lede: "The public plugins are on GitHub, you can download them there. If you need a command, a permission or a YAML file for your server, I’ll write it.",
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
  projectsLede: "Four plugins, all on GitHub. Version and dependencies are in each README.",
  filterLabel: "Filter projects",
  filters: { tutti: "All", web: "Web", plugin: "Plugin" },
  techLabel: "Technologies",
  emptyWeb: "I have no client site to put here.",
  samePlugin: "For the same kind of plugin, write the command you need.",
  plugin: {
    moderncore: {
      title: "Spawn, homes, warps, chat, kits, sell and moderation.",
      text: "You drop it on Paper 26.2 with Java 25. /kick, /ban and /vanish keep the vanilla names, and if you don't need a module you turn it off in config.yml.",
    },
    moderncrates: {
      title: "Physical keys, virtual keys and lootboxes.",
      text: "You open the editor in game and preview each slot before you save. Rewards can be vanilla, MMOItems, ItemsAdder or Nexo. It needs Paper 26.2.",
    },
    modernarena: {
      title: "Instanced arenas and dungeons.",
      text: "You copy a template and the plugin puts it in its own world, so the arena stays off the main map. Party, queue, kills and milestones go to SQLite or MySQL. For the mobs you need MythicMobs.",
    },
    modernstore: {
      title: "Rotating shop, drawn from a pool.",
      text: "Each cycle, weight decides which items land in the shop. Prices and balance come from CoinsEngine and PlaceholderAPI. It runs on Paper 1.19 and up, with Java 17.",
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
  mailHint: "Gmail opens with the message already written.",
  mailSkip: "Email me without the form",
  mailSent: "Message ready. If the tab did not open, use the link.",
  mailFail: "Open in Gmail",
  openMail: "Open in your mail app",
  copyMessage: "Copy the message",
  copied: "Copied.",
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
  headlineLead: "Te programo yo el servidor, el plugin o el sitio.",
  headlineRest: "Siguen funcionando y hacen su trabajo.",
  lede: "En GitHub están los plugins públicos, los descargas desde ahí. Si necesitas un comando, un permiso o un archivo YAML para tu servidor, lo escribo yo.",
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
  projectsLede: "Cuatro plugins, todos en GitHub. La versión y las dependencias están en el README de cada uno.",
  filterLabel: "Filtrar proyectos",
  filters: { tutti: "Todos", web: "Web", plugin: "Plugin" },
  techLabel: "Tecnologías",
  emptyWeb: "No tengo un sitio de un cliente para poner aquí.",
  samePlugin: "Para un plugin del mismo tipo, escribe el comando que necesitas.",
  plugin: {
    moderncore: {
      title: "Spawn, home, warp, chat, kit, sell y moderación.",
      text: "Lo pones en Paper 26.2 con Java 25. /kick, /ban y /vanish siguen siendo los comandos vanilla, y si un módulo no te hace falta lo apagas en config.yml.",
    },
    moderncrates: {
      title: "Llaves físicas, llaves virtuales y lootboxes.",
      text: "Abres el editor en el juego y ves la vista previa de cada hueco antes de guardar. Los premios pueden ser vanilla, MMOItems, ItemsAdder o Nexo. Hace falta Paper 26.2.",
    },
    modernarena: {
      title: "Arenas y dungeons instanciados.",
      text: "Copias una plantilla y el plugin la pone en un mundo aparte, así la arena no toca el mapa. Party, cola, kills y milestones van a SQLite o MySQL. Para los mobs necesitas MythicMobs.",
    },
    modernstore: {
      title: "Tienda que rota, sacada de un pool.",
      text: "En cada ciclo el peso decide qué ítems salen en la tienda. Precios y saldo los lee de CoinsEngine y PlaceholderAPI. Funciona desde Paper 1.19, con Java 17.",
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
  mailHint: "Se abre Gmail con el mensaje ya escrito.",
  mailSkip: "Escríbeme sin rellenar el formulario",
  mailSent: "Mensaje listo. Si no se abrió la pestaña, usa el enlace.",
  mailFail: "Abrir en Gmail",
  openMail: "Abrir en tu correo",
  copyMessage: "Copiar el mensaje",
  copied: "Copiado.",
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
  headlineLead: "Ich programmiere den Server, das Plugin oder die Seite.",
  headlineRest: "Sie bleiben funktionsfähig und erledigen ihre Arbeit.",
  lede: "Auf GitHub liegen die öffentlichen Plugins, du lädst sie dort. Wenn du einen Befehl, eine Berechtigung oder eine YAML-Datei für deinen Server brauchst, schreibe ich sie.",
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
  projectsLede: "Vier Plugins, alle auf GitHub. Version und Abhängigkeiten stehen im README von jedem.",
  filterLabel: "Projekte filtern",
  filters: { tutti: "Alle", web: "Web", plugin: "Plugin" },
  techLabel: "Technologien",
  emptyWeb: "Ich habe keine Kundenseite, die ich hier zeigen kann.",
  samePlugin: "Für ein Plugin derselben Art schreib den Befehl, den du brauchst.",
  plugin: {
    moderncore: {
      title: "Spawn, Homes, Warps, Chat, Kits, Sell und Moderation.",
      text: "Du legst es auf Paper 26.2 mit Java 25. /kick, /ban und /vanish behalten die Vanilla-Namen, und ein Modul, das du nicht brauchst, schaltest du in der config.yml aus.",
    },
    moderncrates: {
      title: "Physische Keys, virtuelle Keys und Lootboxen.",
      text: "Du öffnest den Editor im Spiel und siehst die Vorschau jedes Slots, bevor du speicherst. Belohnungen können vanilla, MMOItems, ItemsAdder oder Nexo sein. Es braucht Paper 26.2.",
    },
    modernarena: {
      title: "Instanzierte Arenen und Dungeons.",
      text: "Du kopierst ein Template und das Plugin legt es in eine eigene Welt, damit die Arena die Karte nicht anfasst. Party, Queue, Kills und Milestones landen auf SQLite oder MySQL. Für die Mobs brauchst du MythicMobs.",
    },
    modernstore: {
      title: "Rotierender Shop aus einem Pool.",
      text: "Jeder Zyklus entscheidet per Gewicht, welche Items in den Shop kommen. Preise und Guthaben liest es aus CoinsEngine und PlaceholderAPI. Es läuft ab Paper 1.19, mit Java 17.",
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
  mailHint: "Gmail öffnet sich mit der fertigen Nachricht.",
  mailSkip: "Schreib mir ohne das Formular",
  mailSent: "Nachricht fertig. Wenn kein Tab aufging, nimm den Link.",
  mailFail: "In Gmail öffnen",
  openMail: "Im Mailprogramm öffnen",
  copyMessage: "Nachricht kopieren",
  copied: "Kopiert.",
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
  headlineLead: "Je programme le serveur, le plugin ou le site.",
  headlineRest: "Ils restent fonctionnels et font leur travail.",
  lede: "Sur GitHub il y a les plugins publics, tu les télécharges là. S’il te faut une commande, une permission ou un fichier YAML pour ton serveur, je l’écris.",
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
  projectsLede: "Quatre plugins, tous sur GitHub. La version et les dépendances sont dans le README de chacun.",
  filterLabel: "Filtrer les projets",
  filters: { tutti: "Tous", web: "Web", plugin: "Plugin" },
  techLabel: "Technologies",
  emptyWeb: "Je n’ai pas de site client à mettre ici.",
  samePlugin: "Pour un plugin du même type, écris la commande qu’il te faut.",
  plugin: {
    moderncore: {
      title: "Spawn, homes, warps, chat, kits, sell et modération.",
      text: "Tu le poses sur Paper 26.2 avec Java 25. /kick, /ban et /vanish gardent les noms vanilla, et si un module ne te sert pas tu l’éteins dans config.yml.",
    },
    moderncrates: {
      title: "Clés physiques, clés virtuelles et lootboxes.",
      text: "Tu ouvres l’éditeur en jeu et tu vois l’aperçu de chaque emplacement avant d’enregistrer. Les récompenses peuvent être vanilla, MMOItems, ItemsAdder ou Nexo. Il faut Paper 26.2.",
    },
    modernarena: {
      title: "Arènes et donjons instanciés.",
      text: "Tu copies un template et le plugin le met dans un monde à part, pour que l’arène ne touche pas la carte. Groupe, file, kills et paliers partent sur SQLite ou MySQL. Pour les mobs il te faut MythicMobs.",
    },
    modernstore: {
      title: "Boutique qui tourne, tirée d’un pool.",
      text: "À chaque cycle, le poids décide quels items arrivent en boutique. Prix et solde viennent de CoinsEngine et PlaceholderAPI. Ça tourne à partir de Paper 1.19, avec Java 17.",
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
  mailHint: "Gmail s’ouvre avec le message déjà écrit.",
  mailSkip: "Écris-moi sans remplir le formulaire",
  mailSent: "Message prêt. Si l’onglet ne s’est pas ouvert, utilise le lien.",
  mailFail: "Ouvrir dans Gmail",
  openMail: "Ouvrir dans le logiciel mail",
  copyMessage: "Copier le message",
  copied: "Copié.",
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
