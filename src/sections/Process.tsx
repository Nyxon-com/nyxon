import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { heroSkills } from "../data/skills";
import { useI18n } from "../i18n/language";

const STEP = 12;

export function Process() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const travel = (t.steps.length - 1) * STEP;
  const y = useTransform(scrollYProgress, [0, 1], ["1.5rem", `${1.5 - travel}rem`]);

  if (reduce) {
    return (
      <section id="processo" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,1rem+1.4vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.03em]">
          {t.processTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{t.processLede}</p>
        <p className="mt-4 text-sm text-muted">{heroSkills.join(", ")}.</p>
        <ol className="relative mt-10">
          <span aria-hidden="true" className="absolute bottom-6 left-[13px] top-3 w-px bg-white/15" />
          {t.steps.map((step, index) => (
            <li key={step.title} className="flex gap-5 pb-8">
              <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center bg-bg font-display text-sm text-[#d4d4d4]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-md text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section id="processo" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-[5.5rem] flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden pt-12 sm:pt-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-3xl font-display text-[clamp(1.75rem,1rem+1.4vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.03em]">
            {t.processTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{t.processLede}</p>
          <p className="mt-4 text-sm text-muted">{heroSkills.join(", ")}.</p>
        </div>
        <div className="relative mx-auto mt-10 h-[28rem] w-full max-w-6xl overflow-hidden px-4 [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)] sm:px-6">
          <m.ol style={{ y }} className="relative">
            <span aria-hidden="true" className="absolute bottom-[10.25rem] left-[13px] top-3.5 w-px bg-white/15" />
            <m.span
              aria-hidden="true"
              style={{ scaleY: scrollYProgress }}
              className="absolute bottom-[10.25rem] left-[13px] top-3.5 w-px origin-top bg-primary"
            />
            {t.steps.map((step, index) => (
              <RisingStep
                key={step.title}
                index={index}
                count={t.steps.length}
                progress={scrollYProgress}
                title={step.title}
                text={step.text}
              />
            ))}
          </m.ol>
        </div>
      </div>
    </section>
  );
}

function RisingStep({
  index,
  count,
  progress,
  title,
  text,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  title: string;
  text: string;
}) {
  const center = index / (count - 1);
  const opacity = useTransform(progress, (value) => {
    const distance = Math.min(1, Math.abs(value - center) / 0.45);
    return 1 - distance * 0.72;
  });

  return (
    <m.li style={{ opacity }} className="flex h-48 gap-5">
      <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center bg-bg font-display text-sm text-[#d4d4d4]">
        {index + 1}
      </span>
      <div className="min-w-0 pt-0.5">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-md text-muted">{text}</p>
      </div>
    </m.li>
  );
}
