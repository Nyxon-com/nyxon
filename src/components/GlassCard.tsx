import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  cut?: boolean;
  fill?: boolean;
};

/** Il velo scuro sotto il vetro tiene il testo sopra il 4.5:1 anche sui blob. */
export function GlassCard({ children, className = "", cut = true, fill = true }: Props) {
  const shape = cut ? "cut" : "";
  const height = fill ? "h-full" : "";
  return (
    <div className={`${height} bg-gradient-to-br from-primary/80 via-white/15 to-primary-glow/40 p-px ${shape}`}>
      <div className={`glass ${height} ${shape} ${className}`}>{children}</div>
    </div>
  );
}
