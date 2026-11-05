import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { packages } from "../data/packages";
import { useI18n } from "../i18n/language";

export function Pricing() {
  const { t } = useI18n();

  return (
    <Section id="prezzi" title={t.pricingTitle} lede={t.pricingLede}>
      <ul className="grid gap-4 lg:grid-cols-3">
        {packages.map((item) => (
          <li key={item.id}>
            <GlassCard className="flex h-full flex-col p-6">
              <h3 className="font-display text-2xl font-semibold">{t.packages[item.id].title}</h3>
              <p className="mt-2 text-primary-glow">{t.onQuote}</p>
              <ul className="mt-4 flex-1 space-y-2 text-muted">
                {t.packages[item.id].points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`?tipo=${item.tipo}#contatto`}>{t.cta}</Button>
              </div>
            </GlassCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
