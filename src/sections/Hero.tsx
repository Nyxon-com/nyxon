import { type FormEvent } from "react";
import { useI18n } from "../i18n/language";

export function Hero() {
  const { t } = useI18n();

  function ask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = String(new FormData(event.currentTarget).get("need") ?? "").trim();
    const field = document.getElementById("message");
    if (field instanceof HTMLTextAreaElement && text) field.value = text;
    document.getElementById("contatto")?.scrollIntoView();
    if (field instanceof HTMLTextAreaElement) field.focus();
  }

  return (
    <section className="mx-auto flex min-h-[calc(100dvh-4.5rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <h1 className="font-display text-[clamp(2.5rem,1rem+4vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
        {t.headlineLead}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted">{t.headlineRest}</p>
      <form onSubmit={ask} className="mt-10 flex w-full max-w-xl items-center gap-2 rounded-full border border-white/15 bg-[#10141c] p-1.5 pl-5">
        <label className="sr-only" htmlFor="need">
          {t.message}
        </label>
        <input
          id="need"
          name="need"
          placeholder={t.messagePlaceholder}
          className="min-h-11 min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted"
        />
        <button type="submit" className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-primary px-5 font-semibold text-white hover:bg-[#3d82ff]">
          {t.cta}
        </button>
      </form>
    </section>
  );
}
