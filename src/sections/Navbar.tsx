import { useState } from "react";
import { Menu, X } from "lucide-react";
import { designPath, homePath, isDesignPage, isServerPage, sectionHref, serverPath, site } from "../data/site";
import { Button } from "../components/Button";
import { LanguageSelect } from "../components/LanguageSelect";
import { useI18n } from "../i18n/language";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const links = [
    { href: sectionHref("#servizi"), label: t.nav.servizi },
    { href: sectionHref("#progetti"), label: t.nav.plugin },
    { href: designPath(), label: t.nav.design },
    { href: serverPath(), label: t.nav.server },
    { href: sectionHref("#processo"), label: t.nav.processo },
    { href: sectionHref("#prezzi"), label: t.nav.prezzi },
    { href: sectionHref("#faq"), label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href={isServerPage() || isDesignPage() ? homePath() : "#top"} className="inline-flex items-center gap-2 font-display text-xl font-semibold" translate="no">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width="28" height="28" className="h-7 w-7" />
          {site.name}
        </a>
        <nav aria-label={t.navLabel} className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                (link.href === serverPath() && isServerPage()) || (link.href === designPath() && isDesignPage())
                  ? "page"
                  : undefined
              }
              className="nav-link min-h-11 py-2 text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSelect />
        <div className="hidden lg:block">
          <Button href={sectionHref("#contatto")}>{t.cta}</Button>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? t.menuClose : t.menuOpen}</span>
        </button>
      </div>
      {open ? (
        <nav id="menu-mobile" aria-label={t.navLabel} className="flex flex-col px-4 pb-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                (link.href === serverPath() && isServerPage()) || (link.href === designPath() && isDesignPage())
                  ? "page"
                  : undefined
              }
              className="nav-link min-h-11 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href={sectionHref("#contatto")} onClick={() => setOpen(false)}>
            {t.cta}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
