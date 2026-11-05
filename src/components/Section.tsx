import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
  titleAs?: "h1" | "h2";
};

export function Section({ id, title, lede, children, titleAs = "h2" }: Props) {
  const Title = titleAs;

  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Title className="max-w-3xl font-display text-[1.875rem] font-semibold sm:text-[2.25rem]">
        {title}
      </Title>
      {lede ? <p className="mt-3 max-w-2xl text-muted">{lede}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
