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

export const site = {
  name: "Nyxon",
  role: "Web & Minecraft Developer",
  email: "nyxonantoni@gmail.com",
  github: "https://github.com/Nyxon-com",
  discord: "",
  response: "Ti rispondo io, in italiano, entro un giorno.",
  availability: "Questo mese posso prendere un lavoro nuovo.",
  headlineLead: "Plugin e siti su misura,",
  headlineRest: "per un server che deve restare acceso.",
  lede: "Costruisco il plugin, preparo il server e faccio la pagina con cui ti scrivono.",
};
