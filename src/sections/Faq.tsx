import { Section } from "../components/Section";
import { useI18n } from "../i18n/language";

export function Faq() {
  const { t } = useI18n();

  return (
    <Section id="faq" title={t.faqTitle}>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {t.faq.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3 font-semibold">
              {item.q}
              <span aria-hidden="true" className="text-primary-glow transition-transform duration-300 ease-out group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
              <p className="min-h-0 max-w-2xl overflow-hidden pb-4 text-muted">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
