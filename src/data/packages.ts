export const packages = [
  {
    id: "sito",
    title: "Sito",
    tipo: "sito",
    points: ["Pagina del server o del plugin", "Testi e form", "Messa online"],
  },
  {
    id: "plugin",
    title: "Plugin Paper",
    tipo: "plugin",
    points: ["Comandi e permessi", "Config YAML", "Prova sul server di test"],
  },
  {
    id: "setup",
    title: "Setup server",
    tipo: "server",
    points: ["Paper e plugin", "Mondo, config e permessi", "Elenco comandi dello staff"],
  },
] as const;
