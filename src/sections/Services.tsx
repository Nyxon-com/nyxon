import { Globe, Puzzle, Server } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { services } from "../data/services";

const icons = { globe: Globe, puzzle: Puzzle, server: Server };

export function Services() {
  return (
    <Section
      id="servizi"
      title="Cosa faccio"
      lede="Plugin, server o una pagina. Il prezzo arriva dopo, con l’elenco di cosa è dentro."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.id}>
              <Reveal delay={index * 0.06} className="h-full">
                <GlassCard className="h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary-glow">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted">{service.result}</p>
                </GlassCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
