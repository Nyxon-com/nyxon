import { Button } from "../components/Button";
import { useI18n } from "../i18n/language";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="mx-auto flex min-h-[calc(100dvh-4.5rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="max-w-3xl font-display text-[clamp(2.6rem,1.1rem+4.2vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">
        {t.headlineLead}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-[#bdbdbd]">{t.headlineRest}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button href="#contatto">{t.cta}</Button>
        <Button href="#progetti" variant="ghost">
          {t.seePlugins}
        </Button>
      </div>
    </section>
  );
}
