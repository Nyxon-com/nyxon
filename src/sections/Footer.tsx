import { sectionHref, serverPath, site } from "../data/site";
import { Button } from "../components/Button";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl font-semibold" translate="no">
            {site.name}
          </p>
          <Button href={sectionHref("#contatto")}>Richiedi un preventivo</Button>
        </div>
        <nav aria-label="Piè di pagina" className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={sectionHref("#servizi")} className="min-h-11 py-2 text-muted hover:text-ink">
            Servizi
          </a>
          <a href={sectionHref("#progetti")} className="min-h-11 py-2 text-muted hover:text-ink">
            Progetti
          </a>
          <a href={serverPath()} className="min-h-11 py-2 text-muted hover:text-ink">
            Server
          </a>
          <a href={sectionHref("#prezzi")} className="min-h-11 py-2 text-muted hover:text-ink">
            Prezzi
          </a>
          <a href={`mailto:${site.email}`} className="min-h-11 py-2 text-muted hover:text-ink">
            Email
          </a>
          <a href={site.github} className="min-h-11 py-2 text-muted hover:text-ink">
            GitHub
          </a>
        </nav>
        <p className="text-sm text-muted">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
