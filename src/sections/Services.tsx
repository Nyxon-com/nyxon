import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/language";

export function Services() {
  const { t } = useI18n();

  return (
    <Section id="servizi" title={t.servicesTitle} lede={t.servicesLede}>
      <ul className="grid gap-3 md:grid-cols-5 md:grid-rows-2">
        <li className="md:col-span-3 md:row-span-2">
          <GlassCard className="relative flex h-full min-h-72 flex-col justify-end overflow-hidden p-6 sm:p-8">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-primary" />
            <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{t.services.plugin.title}</h3>
            <p className="mt-3 max-w-md text-muted">{t.services.plugin.text}</p>
          </GlassCard>
        </li>
        <li className="md:col-span-2">
          <GlassCard className="flex h-full min-h-36 flex-col justify-end p-6">
            <h3 className="font-display text-2xl font-semibold">{t.services.siti.title}</h3>
            <p className="mt-2 text-muted">{t.services.siti.text}</p>
          </GlassCard>
        </li>
        <li className="md:col-span-2">
          <GlassCard className="flex h-full min-h-36 flex-col justify-end p-6">
            <h3 className="font-display text-2xl font-semibold">{t.services.server.title}</h3>
            <p className="mt-2 text-muted">{t.services.server.text}</p>
          </GlassCard>
        </li>
      </ul>
    </Section>
  );
}
