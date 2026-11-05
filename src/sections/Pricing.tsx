import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { packages } from "../data/packages";

export function Pricing() {
  return (
    <Section id="prezzi" title="Pacchetti" lede="Il prezzo sta nella prima risposta, insieme a cosa non è incluso.">
      <ul className="grid gap-4 lg:grid-cols-3">
        {packages.map((item) => (
          <li key={item.id}>
            <GlassCard className="flex h-full flex-col p-6">
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-primary-glow">Su preventivo</p>
              <ul className="mt-4 flex-1 space-y-2 text-muted">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`?tipo=${item.tipo}#contatto`}>Richiedi un preventivo</Button>
              </div>
            </GlassCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
