import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { skills } from "../data/skills";
import { useI18n } from "../i18n/language";

export function Process() {
  const { t } = useI18n();

  return (
    <Section id="processo" title={t.processTitle} lede={t.processLede}>
      <ol className="grid gap-4 md:grid-cols-4">
        {t.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.05}>
              <article className="h-full border-l border-primary/50 pl-4">
                <p className="font-display text-sm text-primary-glow">{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-muted">{skills.map((skill) => skill.name).join(", ")}.</p>
    </Section>
  );
}
