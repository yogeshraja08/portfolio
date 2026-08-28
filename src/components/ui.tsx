import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

/** Numbered section heading, e.g. "01 · Projects" — a small nod to the terminal/IDE theme. */
export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-[var(--accent)]">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)] sm:text-3xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-[var(--fg-muted)]">{description}</p>
      ) : null}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--fg-muted)]">
      {children}
    </span>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4 py-16 sm:py-20">
      <span className="font-mono text-sm text-[var(--accent)]">{eyebrow}</span>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--fg)] sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-lg text-[var(--fg-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
