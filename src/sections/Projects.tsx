import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { categories, projects, type Category } from "../data/projects";

function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function move(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
  }

  function leave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="h-full transition-transform duration-200"
    >
      {children}
    </div>
  );
}

export function Projects() {
  const initial = new URLSearchParams(window.location.search).get("categoria");
  const [filter, setFilter] = useState<Category | "tutti">(
    initial === "web" || initial === "plugin" ? initial : "tutti",
  );
  const visible = projects.filter((project) => filter === "tutti" || project.category === filter);

  function choose(id: Category | "tutti") {
    setFilter(id);
    const params = new URLSearchParams(window.location.search);
    if (id === "tutti") params.delete("categoria");
    else params.set("categoria", id);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}#progetti`);
  }

  return (
    <Section
      id="progetti"
      title="Lavori che puoi aprire"
      lede="Quattro plugin pubblici."
    >
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filtra i progetti">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={filter === category.id}
            onClick={() => choose(category.id)}
            className={`min-h-11 px-4 ${
              filter === category.id
                ? "bg-primary text-white"
                : "border border-white/15 text-muted hover:text-ink"
            } ${category.id === "web" ? "rounded-full" : ""}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <GlassCard className="p-6">
          <p>Questa landing è il tipo di pagina che consegno. La tua parla del tuo server.</p>
          <div className="mt-4">
            <Button href="?tipo=sito#contatto">Richiedi un preventivo</Button>
          </div>
        </GlassCard>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <Tilt>
                <GlassCard className="flex h-full flex-col p-6">
                  <p className="text-sm text-primary-glow" translate="no">
                    {project.title}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{project.outcome}</h3>
                  <p className="mt-2 flex-1 text-muted">{project.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologie">
                    {project.stack.map((item) => (
                      <li key={item} className="border border-white/10 px-2 py-1 text-xs text-muted" translate="no">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Button href={`?tipo=${project.quote}#contatto`}>Lo voglio sul mio server</Button>
                    {project.href ? (
                      <a
                        href={project.href}
                        className="inline-flex min-h-11 items-center gap-1 text-muted hover:text-ink"
                      >
                        Codice
                        <ArrowUpRight aria-hidden="true" size={18} />
                      </a>
                    ) : null}
                  </div>
                </GlassCard>
              </Tilt>
            </li>
          ))}
        </ul>
      )}
      {visible.length > 0 ? (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p>Ti serve lo stesso sistema sul tuo server?</p>
          <Button href="?tipo=plugin#contatto">Richiedi un preventivo</Button>
        </div>
      ) : null}
    </Section>
  );
}
