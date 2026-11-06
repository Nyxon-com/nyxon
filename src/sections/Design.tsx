import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/language";

type Shot = { file: string; title: string; text: string; frame: string };

function src(file: string) {
  return `${import.meta.env.BASE_URL}design/${file}`;
}

export function Design() {
  const { t } = useI18n();
  const shots: Shot[] = [
    { file: "riftmc-banner.jpg", title: t.design.banner.title, text: t.design.banner.text, frame: "" },
    { file: "riftmc-icon.jpg", title: t.design.icon.title, text: t.design.icon.text, frame: "max-w-[180px]" },
    { file: "riftmc-wordmark.jpg", title: t.design.wordmark.title, text: t.design.wordmark.text, frame: "" },
    { file: "riftmc-poster.jpg", title: t.design.poster.title, text: t.design.poster.text, frame: "max-w-[200px]" },
    { file: "nyxon-skins.jpg", title: t.design.skins.title, text: t.design.skins.text, frame: "" },
  ];
  const row = shots.slice(1, 4);
  const [open, setOpen] = useState<Shot | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      opener.current?.focus();
    };
  }, [open]);

  function zoom(shot: Shot, button: HTMLButtonElement) {
    opener.current = button;
    setOpen(shot);
  }

  function frame(shot: Shot, delay = 0) {
    return (
      <Reveal delay={delay} className={shot.frame}>
      <figure>
        <button
          type="button"
          className="block w-full cursor-zoom-in border border-white/10 bg-[#12081F]"
          aria-label={`${t.zoom}: ${shot.title}`}
          onClick={(event) => zoom(shot, event.currentTarget)}
        >
          <img src={src(shot.file)} alt={shot.text} className="w-full" />
        </button>
        <figcaption className="mt-2 text-sm text-muted">
          <span className="text-ink">{shot.title}. </span>
          {shot.text}
        </figcaption>
      </figure>
      </Reveal>
    );
  }

  return (
    <Section id="design" title={t.designTitle} lede={t.designLede} titleAs="h1">
      {frame(shots[0])}
      <ul className="mt-8 grid items-start gap-6 md:grid-cols-[minmax(0,180px)_minmax(0,1fr)_minmax(0,200px)]">
        {row.map((shot, index) => (
          <li key={shot.file}>{frame(shot, index * 0.08)}</li>
        ))}
      </ul>
      <div className="mt-8">{frame(shots[4], 0.12)}</div>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 motion-safe:animate-[pop_0.28s_cubic-bezier(0.22,1,0.36,1)_both]"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            ref={closeButton}
            type="button"
            className="absolute right-4 top-4 min-h-11 border border-white/20 bg-bg px-4 text-ink"
            onClick={() => setOpen(null)}
          >
            {t.close}
          </button>
          <img
            src={src(open.file)}
            alt={open.text}
            className="max-h-[85vh] max-w-full motion-safe:animate-[pop_0.4s_cubic-bezier(0.22,1,0.36,1)_both]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </Section>
  );
}
