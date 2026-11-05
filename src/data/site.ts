function rootPath() {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

export function isServerPage() {
  return window.location.pathname.replace(/\/$/, "").endsWith("/server");
}

export function homePath() {
  const root = rootPath();
  return root === "" ? "/" : `${root}/`;
}

export function serverPath() {
  return `${rootPath()}/server`;
}

export function sectionHref(hash: string) {
  if (!isServerPage()) return hash;
  return `${rootPath()}/${hash}`;
}

export function quoteHref(tipo: "sito" | "plugin" | "server") {
  return `${homePath()}?tipo=${tipo}#contatto`;
}

export function mergeQuery(href: string) {
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const incoming = new URLSearchParams(hashAt >= 0 ? href.slice(0, hashAt) : href);
  const params = new URLSearchParams(window.location.search);
  incoming.forEach((value, key) => params.set(key, value));
  const query = params.toString();
  return `${window.location.pathname}${query ? `?${query}` : ""}${hash}`;
}

export const site = {
  name: "Nyxon",
  role: "Web & Minecraft Developer",
  email: "nyxonantoni@gmail.com",
  github: "https://github.com/Nyxon-com",
  discord: "",
  response: "Rispondo in italiano entro un giorno.",
  availability: "Questo mese ho posto per un lavoro.",
  cta: "Preventivo",
  headlineLead: "Plugin Paper, server e siti.",
  headlineRest: "Core, crate, arene, shop.",
  lede: "Quelli pubblici sono su GitHub. Gli altri li scrivo su richiesta: comandi, permessi e YAML.",
};
