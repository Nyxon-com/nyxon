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
    outcome: "Spawn, home, warp, chat, kit, sell e moderazione.",
    detail: "Paper 26.2, Java 25. /kick, /ban e /vanish restano i nomi vanilla. I moduli si spengono da config.yml.",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCore",
  },
  {
    slug: "moderncrates",
    title: "modernCrates",
    category: "plugin",
    outcome: "Chiavi fisiche, chiavi virtuali e lootbox.",
    detail: "Editor in gioco e anteprima degli slot. Premi vanilla, MMOItems, ItemsAdder o Nexo. Paper 26.2.",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCrates",
  },
  {
    slug: "modernarena",
    title: "modernArena",
    category: "plugin",
    outcome: "Arene e dungeon istanziati.",
    detail: "Il template viene copiato in un mondo a parte. Party, coda, kill e milestone su SQLite o MySQL. Serve MythicMobs.",
    stack: ["Java", "Paper", "MythicMobs"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernArena",
  },
  {
    slug: "modernstore",
    title: "modernStore",
    category: "plugin",
    outcome: "Shop a rotazione, pescato da un pool.",
    detail: "A ogni ciclo il peso sceglie gli item. Prezzi e saldo passano da CoinsEngine e PlaceholderAPI. Paper 1.19+, Java 17.",
    stack: ["Java", "Paper", "CoinsEngine", "PlaceholderAPI"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernstore",
  },
];
