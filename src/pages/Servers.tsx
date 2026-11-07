import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { servers } from "../data/servers";
import { quoteHref } from "../data/site";
import { useI18n } from "../i18n/language";

export function Servers() {
  const { t } = useI18n();

  return (
    <main id="contenuto" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-display text-[2.25rem] font-semibold leading-[1.45] sm:text-[3.75rem]">{t.serverTitle}</h1>
      <p className="mt-4 max-w-2xl text-muted">{t.serverLede}</p>
      <ul className={`mt-10 grid gap-4 ${servers.length > 1 ? "md:grid-cols-2" : "mx-auto w-full max-w-2xl"}`}>
        {servers.map((server) => (
          <li key={server.slug}>
            <GlassCard className="flex h-full flex-col p-6">
              <p className="text-sm text-[#d4d4d4]" translate="no">
                {server.title}
              </p>
              <h2 className="mt-2 font-display text-[1.5rem] font-semibold leading-[1.45]">{t.serverCard.title}</h2>
              <p className="mt-2 flex-1 text-muted">{t.serverCard.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.techLabel}>
                {server.stack.map((item) => (
                  <li key={item} className="border border-white/10 px-2 py-1 text-xs text-muted" translate="no">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button href={quoteHref("server")}>{t.cta}</Button>
              </div>
            </GlassCard>
          </li>
        ))}
      </ul>
    </main>
  );
}
