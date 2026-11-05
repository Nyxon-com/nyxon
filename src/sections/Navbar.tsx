import { useState } from "react";
import { Menu, X } from "lucide-react";
import { homePath, isServerPage, sectionHref, serverPath, site } from "../data/site";
import { Button } from "../components/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: sectionHref("#servizi"), label: "Servizi" },
    { href: sectionHref("#progetti"), label: "Progetti" },
    { href: serverPath(), label: "Server" },
    { href: sectionHref("#processo"), label: "Processo" },
    { href: sectionHref("#prezzi"), label: "Prezzi" },
    { href: sectionHref("#faq"), label: "Domande" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href={isServerPage() ? homePath() : "#top"} className="font-display text-xl font-semibold" translate="no">
          {site.name}
        </a>
        <nav aria-label="Pagine" className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === serverPath() && isServerPage() ? "page" : undefined}
              className="nav-link min-h-11 py-2 text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={sectionHref("#contatto")}>Richiedi un preventivo</Button>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Chiudi il menu" : "Apri il menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="menu-mobile" aria-label="Pagine" className="flex flex-col px-4 pb-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === serverPath() && isServerPage() ? "page" : undefined}
              className="nav-link min-h-11 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href={sectionHref("#contatto")} onClick={() => setOpen(false)}>
            Richiedi un preventivo
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
