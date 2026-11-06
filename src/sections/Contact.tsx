import { useEffect, useRef, useState, type FormEvent } from "react";
import { Github, Mail } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { site } from "../data/site";
import { useI18n } from "../i18n/language";

type Errors = Partial<Record<"name" | "contact" | "type" | "message", string>>;

function quoteType() {
  const value = new URLSearchParams(window.location.search).get("tipo");
  if (value === "sito" || value === "plugin" || value === "server") return value;
  return "";
}

export function Contact() {
  const { t } = useI18n();
  const fields = [
    ["name", t.errors.name],
    ["contact", t.errors.contact],
    ["type", t.errors.type],
    ["message", t.errors.message],
  ] as const;
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<"idle" | "sent">("idle");
  const [draft, setDraft] = useState("");
  const [gmail, setGmail] = useState("");
  const [mail, setMail] = useState("");
  const [copied, setCopied] = useState(false);
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
    setCopied(false);
    if (Object.keys(next).length > 0) {
      setPhase("idle");
      focusSummary.current = true;
      return;
    }
    if (String(data.get("company") ?? "").trim()) return;
    const kind = chosen === "sito" || chosen === "plugin" || chosen === "server" ? t.types[chosen] : chosen;
    const body = `${t.mail.name}: ${name}\n${t.mail.contact}: ${contact}\n${t.mail.type}: ${kind}\n\n${message}`;
    const subject = `${t.mail.subject} ${kind}`;
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraft(body);
    setGmail(gmailHref);
    setMail(mailHref);
    setPhase("sent");
    window.open(gmailHref, "_blank", "noopener,noreferrer");
  }

  return (
    <Section
      id="contatto"
      title={t.contactTitle}
      lede={t.response}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="p-6">
          <form noValidate onSubmit={onSubmit} className="grid gap-4">
            {Object.keys(errors).length > 0 ? (
              <div ref={summary} tabIndex={-1} role="alert" aria-labelledby="error-title" className="border border-[#ffb4b4]/60 p-4">
                <h3 id="error-title" className="font-semibold">
                  {t.missing}
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
              {t.name}
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
              {t.contact}
              <input
                id="contact"
                name="contact"
                autoComplete="email"
                spellCheck={false}
                placeholder={t.contactPlaceholder}
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
              {t.projectType}
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
                  {t.choose}
                </option>
                <option value="sito">{t.types.sito}</option>
                <option value="plugin">{t.types.plugin}</option>
                <option value="server">{t.types.server}</option>
              </select>
              {errors.type ? (
                <span id="type-error" className="text-sm text-[#ffb4b4]">
                  {errors.type}
                </span>
              ) : null}
            </label>

            <label className="grid gap-1" htmlFor="message">
              {t.message}
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.messagePlaceholder}
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

            <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center bg-primary px-5 font-semibold text-white shadow-glow transition-[background-color,box-shadow] duration-200 hover:bg-[#3d82ff]"
            >
              {t.cta}
            </button>
            <p className="text-sm text-ink">{t.mailHint}</p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(t.mail.subject)}`} className="inline-flex min-h-11 items-center text-primary-glow hover:text-ink">
              {t.mailSkip}
            </a>
            {phase === "sent" ? (
              <div role="status" className="grid gap-2">
                <p className="text-sm text-ink">{t.mailSent}</p>
                <a href={gmail} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center bg-primary px-5 font-semibold text-white">
                  {t.mailFail}
                </a>
                <a href={mail} className="inline-flex min-h-11 items-center text-primary-glow">
                  {t.openMail}
                </a>
                <pre className="whitespace-pre-wrap border border-white/15 p-3 text-sm text-muted">{draft}</pre>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center text-primary-glow"
                  onClick={() => {
                    void navigator.clipboard.writeText(`To: ${site.email}\n\n${draft}`).then(() => setCopied(true));
                  }}
                >
                  {copied ? t.copied : t.copyMessage}
                </button>
              </div>
            ) : null}
          </form>
        </GlassCard>

        <div className="flex flex-col gap-4">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-primary-glow">
            <Mail aria-hidden="true" />
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-primary-glow">
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
