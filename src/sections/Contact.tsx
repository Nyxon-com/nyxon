import { useEffect, useRef, useState, type FormEvent } from "react";
import { Github, Mail } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { site } from "../data/site";

type Errors = Partial<Record<"name" | "contact" | "type" | "message", string>>;

const fields = [
  ["name", "Scrivi come ti chiami."],
  ["contact", "Scrivi un’email o un contatto Discord."],
  ["type", "Scegli il tipo di lavoro."],
  ["message", "Scrivi cosa ti serve, anche in due righe."],
] as const;

function quoteType() {
  const value = new URLSearchParams(window.location.search).get("tipo");
  if (value === "sito" || value === "plugin" || value === "server") return value;
  return "";
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const [type, setType] = useState(quoteType);
  const summary = useRef<HTMLDivElement>(null);
  const focusSummary = useRef(false);

  useEffect(() => {
    if (!focusSummary.current) return;
    focusSummary.current = false;
    summary.current?.focus();
  }, [errors]);

  useEffect(() => {
    const sync = () => setType(quoteType());
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const chosen = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = fields[0][1];
    if (contact.length < 3) next.contact = fields[1][1];
    if (!chosen) next.type = fields[2][1];
    if (message.length < 12) next.message = fields[3][1];
    setErrors(next);
    setReady(false);
    if (Object.keys(next).length > 0) {
      focusSummary.current = true;
      return;
    }
    const body = `Nome: ${name}\nContatto: ${contact}\nTipo: ${chosen}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Preventivo ${chosen}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }

  return (
    <Section
      id="contatto"
      title="Richiedi un preventivo"
      lede={site.response}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="p-6">
          <form noValidate onSubmit={onSubmit} className="grid gap-4">
            {Object.keys(errors).length > 0 ? (
              <div ref={summary} tabIndex={-1} role="alert" aria-labelledby="error-title" className="border border-[#ffb4b4]/60 p-4">
                <h3 id="error-title" className="font-semibold">
                  Manca qualcosa
                </h3>
                <ul className="mt-2 space-y-1">
                  {fields.map(([id, text]) =>
                    errors[id] ? (
                      <li key={id}>
                        <a href={`#${id}`} className="text-[#ffb4b4] underline">
                          {text}
                        </a>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ) : null}

            <label className="grid gap-1" htmlFor="name">
              Nome
              <input
                id="name"
                name="name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="min-h-11 border border-white/20 bg-[#10141c] px-3 text-ink placeholder:text-muted"
              />
              {errors.name ? (
                <span id="name-error" className="text-sm text-[#ffb4b4]">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="grid gap-1" htmlFor="contact">
              Email o Discord
              <input
                id="contact"
                name="contact"
                autoComplete="email"
                spellCheck={false}
                placeholder="nome@email.com…"
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
                className="min-h-11 border border-white/20 bg-[#10141c] px-3 text-ink placeholder:text-muted"
              />
              {errors.contact ? (
                <span id="contact-error" className="text-sm text-[#ffb4b4]">
                  {errors.contact}
                </span>
              ) : null}
            </label>

            <label className="grid gap-1" htmlFor="type">
              Tipo di progetto
              <select
                id="type"
                name="type"
                value={type}
                onChange={(event) => setType(event.target.value as typeof type)}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={errors.type ? "type-error" : undefined}
                className="min-h-11 border border-white/20 bg-[#10141c] px-3 text-ink"
              >
                <option value="" disabled>
                  Scegli…
                </option>
                <option value="sito">Sito</option>
                <option value="plugin">Plugin</option>
                <option value="server">Server</option>
              </select>
              {errors.type ? (
                <span id="type-error" className="text-sm text-[#ffb4b4]">
                  {errors.type}
                </span>
              ) : null}
            </label>

            <label className="grid gap-1" htmlFor="message">
              Messaggio
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Un plugin per le aste, o un sito per il server…"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="border border-white/20 bg-[#10141c] px-3 py-2 text-ink placeholder:text-muted"
              />
              {errors.message ? (
                <span id="message-error" className="text-sm text-[#ffb4b4]">
                  {errors.message}
                </span>
              ) : null}
            </label>

            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center bg-primary px-5 font-semibold text-white shadow-glow transition-[background-color,box-shadow] duration-200 hover:bg-[#3d82ff]"
            >
              Richiedi un preventivo
            </button>
            <p className="text-sm text-ink">Si apre la tua email. Devi solo premere invia.</p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("Preventivo")}`} className="inline-flex min-h-11 items-center text-primary-glow hover:text-ink">
              Scrivimi senza compilare il form
            </a>
            {ready ? (
              <p role="status" className="text-sm text-muted">
                Ho preparato l’email. Inviala dal programma che si è aperto.
              </p>
            ) : null}
          </form>
        </GlassCard>

        <div className="flex flex-col gap-4">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-primary-glow">
            <Mail aria-hidden="true" />
            {site.email}
          </a>
          <a href={site.github} className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-primary-glow">
            <Github aria-hidden="true" />
            GitHub
          </a>
          {site.discord ? (
            <a href={site.discord} className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-primary-glow">
              Discord
            </a>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
