export type Category = "web" | "plugin";

export type QuoteType = "sito" | "plugin" | "server";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  outcome: string;
  detail: string;
  stack: string[];
  quote: QuoteType;
  href?: string;
};

export const categories: { id: Category | "tutti"; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "web", label: "Web" },
  { id: "plugin", label: "Plugin" },
];

export const projects: Project[] = [
  {
    slug: "moderncore",
    title: "modernCore",
    category: "plugin",
    outcome: "Lo staff gestisce spawn, chat e kit da un solo plugin.",
    detail: "I comandi del server restano quelli vanilla.",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCore",
  },
  {
    slug: "moderncrates",
    title: "modernCrates",
    category: "plugin",
    outcome: "Chiavi e premi si configurano in gioco.",
    detail: "Il loot può essere vanilla, MMOItems, ItemsAdder o Nexo.",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCrates",
  },
  {
    slug: "modernarena",
    title: "modernArena",
    category: "plugin",
    outcome: "Il party entra in un’arena e l’istanza si chiude all’uscita.",
    detail: "L’arena è copiata da un template.",
    stack: ["Java", "Paper", "MythicMobs"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernArena",
  },
  {
    slug: "modernstore",
    title: "modernStore",
    category: "plugin",
    outcome: "Lo shop ruota gli oggetti da solo.",
    detail: "Il saldo passa da CoinsEngine. Il peso decide cosa torna in vendita.",
    stack: ["Java", "Paper", "CoinsEngine"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernstore",
  },
];
