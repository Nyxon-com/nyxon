export type Category = "web" | "plugin";

export type QuoteType = "sito" | "plugin" | "server";

export type PluginSlug = "moderncore" | "moderncrates" | "modernarena" | "modernstore";

export type Project = {
  slug: PluginSlug;
  title: string;
  category: Category;
  stack: string[];
  quote: QuoteType;
  href?: string;
};

export const categories = ["tutti", "web", "plugin"] as const;

export const projects: Project[] = [
  {
    slug: "moderncore",
    title: "modernCore",
    category: "plugin",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCore",
  },
  {
    slug: "moderncrates",
    title: "modernCrates",
    category: "plugin",
    stack: ["Java", "Paper"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernCrates",
  },
  {
    slug: "modernarena",
    title: "modernArena",
    category: "plugin",
    stack: ["Java", "Paper", "MythicMobs"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernArena",
  },
  {
    slug: "modernstore",
    title: "modernStore",
    category: "plugin",
    stack: ["Java", "Paper", "CoinsEngine", "PlaceholderAPI"],
    quote: "plugin",
    href: "https://github.com/Nyxon-com/modernstore",
  },
];
