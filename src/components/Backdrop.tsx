import { useEffect, useRef } from "react";

export function Backdrop() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = dot.current;
    if (!node) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (event: PointerEvent) => {
      node.style.transform = `translate3d(${event.clientX - 10}px, ${event.clientY - 10}px, 0)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="blob -left-24 -top-24 h-[36rem] w-[36rem] bg-primary/35" />
        <div className="blob right-[-8rem] top-[28rem] h-[28rem] w-[28rem] bg-primary-glow/25" />
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>\")",
          }}
        />
      </div>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-5 w-5 rounded-full border border-primary-glow/80 motion-safe:md:block"
      />
    </>
  );
}
