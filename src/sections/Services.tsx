import { Globe, Puzzle, Server } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { services } from "../data/services";
import { useI18n } from "../i18n/language";

const icons = { globe: Globe, puzzle: Puzzle, server: Server };

export function Services() {
  const { t } = useI18n();

  return (
    <Section id="servizi" title={t.servicesTitle} lede={t.servicesLede}>
      <ul className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.id}>
              <Reveal delay={index * 0.06} className="h-full">
                <GlassCard className="h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary-glow">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{t.services[service.id].title}</h3>
                  <p className="mt-2 text-muted">{t.services[service.id].text}</p>
                </GlassCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
