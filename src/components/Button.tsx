import type { MouseEvent, ReactNode } from "react";
import { mergeQuery } from "../data/site";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

export function Button({ href, children, variant = "primary", onClick }: Props) {
  const look =
    variant === "primary"
      ? "bg-primary text-white shadow-glow hover:bg-[#3d82ff]"
      : "border border-white/15 bg-white/5 text-ink hover:border-primary-glow/70";

  function click(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (!href.startsWith("?")) return;
    event.preventDefault();
    window.history.pushState(null, "", mergeQuery(href));
    document.getElementById("contatto")?.scrollIntoView();
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  return (
    <a
      href={href}
      onClick={click}
      className={`inline-flex min-h-11 items-center justify-center px-5 text-[0.95rem] font-semibold transition-[background-color,border-color,box-shadow] duration-200 ${look}`}
    >
      {children}
    </a>
  );
}
