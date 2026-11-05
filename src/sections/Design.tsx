import { Section } from "../components/Section";
import { useI18n } from "../i18n/language";

function src(file: string) {
  return `${import.meta.env.BASE_URL}design/${file}`;
}

export function Design() {
  const { t } = useI18n();
  const pieces = [
    { file: "riftmc-icon.jpg", copy: t.design.icon, frame: "max-w-[180px]" },
    { file: "riftmc-wordmark.jpg", copy: t.design.wordmark, frame: "" },
    { file: "riftmc-poster.jpg", copy: t.design.poster, frame: "max-w-[200px]" },
  ] as const;

  return (
    <Section id="design" title={t.designTitle} lede={t.designLede}>
      <figure>
        <img
          src={src("riftmc-banner.jpg")}
          alt={t.design.banner.text}
          width={1280}
          height={720}
          className="w-full border border-white/10 bg-[#12081F]"
        />
        <figcaption className="mt-2 max-w-2xl text-sm text-muted">
          <span className="text-ink">{t.design.banner.title}. </span>
          {t.design.banner.text}
        </figcaption>
      </figure>
      <ul className="mt-8 grid items-start gap-6 md:grid-cols-[minmax(0,180px)_minmax(0,1fr)_minmax(0,200px)]">
        {pieces.map((piece) => (
          <li key={piece.file}>
            <figure>
              <img
                src={src(piece.file)}
                alt={piece.copy.text}
                className={`w-full border border-white/10 bg-[#12081F] ${piece.frame}`}
              />
              <figcaption className="mt-2 text-sm text-muted">
                <span className="text-ink">{piece.copy.title}. </span>
                {piece.copy.text}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
