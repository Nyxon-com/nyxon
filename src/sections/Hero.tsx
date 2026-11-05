import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { heroSkills } from "../data/skills";
import { useI18n } from "../i18n/language";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="mx-auto grid w-full max-w-6xl items-end gap-10 px-4 pb-8 pt-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-20">
      <div>
        <p className="text-primary-glow">{t.role}</p>
        <h1 className="mt-3 font-display text-[2.25rem] font-semibold leading-[1.45] sm:text-[3.75rem]">
          <span className="block">{t.headlineLead}</span>
          <span className="grad mt-1 block">{t.headlineRest}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink">{t.lede}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button href="#contatto">{t.cta}</Button>
          <Button href="#progetti" variant="ghost">
            {t.seePlugins}
          </Button>
        </div>
        <p className="mt-4 max-w-xl text-ink">
          {t.availability} {t.response}
        </p>
      </div>
      <GlassCard fill={false} className="p-6">
        <p className="text-sm text-primary-glow">{t.skillsLabel}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {heroSkills.map((skill, index) => (
            <li key={skill}>
              <Badge shape={index % 2 === 0 ? "round" : "sharp"}>{skill}</Badge>
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}
