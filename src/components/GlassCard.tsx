import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  fill?: boolean;
};

export function GlassCard({ children, className = "", fill = true }: Props) {
  const height = fill ? "h-full" : "";

  return (
    <div className={`rounded-lg border border-white/15 bg-black ${height} ${className}`}>{children}</div>
  );
}
