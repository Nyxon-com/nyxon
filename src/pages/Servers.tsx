import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { servers } from "../data/servers";
import { quoteHref, site } from "../data/site";

export function Servers() {
  return (
    <main id="contenuto" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-display text-[2.25rem] font-semibold leading-[1.45] sm:text-[3.75rem]">Server made</h1>
      <p className="mt-4 max-w-2xl text-muted">Server che sto costruendo in locale. Nessuno ha un IP pubblico.</p>
      <ul className={`mt-10 grid gap-4 ${servers.length > 1 ? "md:grid-cols-2" : "mx-auto w-full max-w-2xl"}`}>
        {servers.map((server) => (
          <li key={server.slug}>
            <GlassCard className="flex h-full flex-col p-6">
              <p className="text-sm text-primary-glow" translate="no">
                {server.title}
              </p>
              <h2 className="mt-2 font-display text-[1.5rem] font-semibold leading-[1.45]">{server.outcome}</h2>
              <p className="mt-2 flex-1 text-muted">{server.detail}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologie">
                {server.stack.map((item) => (
                  <li key={item} className="border border-white/10 px-2 py-1 text-xs text-muted" translate="no">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button href={quoteHref("server")}>{site.cta}</Button>
              </div>
            </GlassCard>
          </li>
        ))}
      </ul>
    </main>
  );
}
