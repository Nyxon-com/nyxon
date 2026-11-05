type Props = {
  children: string;
  shape: "round" | "sharp";
};

export function Badge({ children, shape }: Props) {
  return (
    <span
      className={`inline-flex min-h-11 items-center border border-white/15 bg-white/5 px-4 text-sm text-ink ${
        shape === "round" ? "rounded-full" : ""
      }`}
    >
      {children}
    </span>
  );
}
