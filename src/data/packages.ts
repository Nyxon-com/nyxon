export const packages = [
  {
    id: "sito",
    title: "Sito",
    tipo: "sito",
    points: ["Una landing che porta la richiesta", "Testi e form di contatto", "Pubblicazione"],
  },
  {
    id: "plugin",
    title: "Plugin Paper",
    tipo: "plugin",
    points: ["Un sistema su misura", "Comandi, permessi e config", "Prova sul server"],
  },
  {
    id: "setup",
    title: "Setup server",
    tipo: "server",
    points: ["Paper, plugin e mondo", "I sistemi collegati tra loro", "Consegna pronta da aprire"],
  },
] as const;
