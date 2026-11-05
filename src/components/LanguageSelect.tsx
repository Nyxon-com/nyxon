import { languages } from "../i18n/copy";
import { useI18n } from "../i18n/language";

export function LanguageSelect() {
  const { lang, setLang, t } = useI18n();

  return (
    <div role="group" aria-label={t.langLabel} className="flex shrink-0 items-center">
      {languages.map((item) => (
        <button
          key={item.id}
          type="button"
          lang={item.id}
          aria-pressed={lang === item.id}
          aria-label={item.label}
          onClick={() => setLang(item.id)}
          className={`min-h-11 min-w-9 px-1 text-sm font-semibold underline-offset-4 ${
            lang === item.id ? "text-ink underline" : "text-muted hover:text-ink"
          }`}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}
