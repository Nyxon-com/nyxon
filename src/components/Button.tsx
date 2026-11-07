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
      ? "rounded-md bg-white text-black hover:bg-[#e7e7e7]"
      : "rounded-md border border-white/30 text-ink hover:border-white";

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
      className={`btn-lift inline-flex min-h-11 items-center justify-center px-5 text-[0.95rem] font-semibold ${look}`}
    >
      {children}
    </a>
  );
}
