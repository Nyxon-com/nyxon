function rootPath() {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function pathName() {
  return window.location.pathname.replace(/\/$/, "");
}

export function isServerPage() {
  return pathName().endsWith("/server");
}

export function isDesignPage() {
  return pathName().endsWith("/design");
}

function langQuery() {
  const lang = new URLSearchParams(window.location.search).get("lang");
  if (lang !== "it" && lang !== "en" && lang !== "es" && lang !== "de" && lang !== "fr") return "";
  return `lang=${lang}`;
}

function withLang(path: string) {
  const lang = langQuery();
  if (!lang) return path;
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const base = hashAt >= 0 ? path.slice(0, hashAt) : path;
  return `${base}${base.includes("?") ? "&" : "?"}${lang}${hash}`;
}

export function homePath() {
  const root = rootPath();
  return withLang(root === "" ? "/" : `${root}/`);
}

export function serverPath() {
  return withLang(`${rootPath()}/server`);
}

export function designPath() {
  return withLang(`${rootPath()}/design`);
}

export function sectionHref(hash: string) {
  if (!isServerPage() && !isDesignPage()) return hash;
  return withLang(`${rootPath()}/${hash}`);
}

export function quoteHref(tipo: "sito" | "plugin" | "server") {
  return withLang(`${rootPath() === "" ? "/" : `${rootPath()}/`}?tipo=${tipo}#contatto`);
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
  email: "nyxonantoni@gmail.com",
  github: "https://github.com/Nyxon-com",
  discord: "",
};
