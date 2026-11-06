import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { designPath } from "../data/site";
import { heroSkills } from "../data/skills";
import { useI18n } from "../i18n/language";

const ease = [0.22, 1, 0.36, 1] as const;

function In({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </m.div>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="mx-auto grid w-full max-w-6xl items-end gap-10 px-4 pb-8 pt-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-20">
      <div>
        <In>
          <p className="text-primary-glow">{t.role}</p>
        </In>
        <h1 className="mt-3 font-display text-[2.25rem] font-semibold leading-[1.45] sm:text-[3.75rem]">
          <In delay={0.08}>
            <span className="block">{t.headlineLead}</span>
          </In>
          <In delay={0.18} className="mt-1">
            <span className="grad block">{t.headlineRest}</span>
          </In>
        </h1>
        <In delay={0.28}>
          <p className="mt-5 max-w-xl text-lg text-ink">{t.lede}</p>
        </In>
        <In delay={0.38}>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="#contatto">{t.cta}</Button>
            <Button href="#progetti" variant="ghost">
              {t.seePlugins}
            </Button>
            <Button href={designPath()} variant="ghost">
              {t.nav.design}
            </Button>
          </div>
        </In>
        <In delay={0.48}>
          <p className="mt-4 max-w-xl text-ink">
            {t.availability} {t.response}
          </p>
        </In>
      </div>
      <In delay={0.2} className="h-full">
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
      </In>
    </section>
  );
}
