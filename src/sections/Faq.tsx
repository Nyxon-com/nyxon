import { Section } from "../components/Section";
import { faq } from "../data/faq";

export function Faq() {
  return (
    <Section id="faq" title="Domande">
      <div className="divide-y divide-white/10 border-y border-white/10">
        {faq.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3 font-semibold">
              {item.q}
              <span aria-hidden="true" className="text-primary-glow group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-4 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
