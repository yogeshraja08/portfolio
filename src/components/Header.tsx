"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/experience", label: "experience" },
  { href: "/contact", label: "contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur"
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          transitionTypes={["nav-forward"]}
          className="font-mono text-sm font-medium text-[var(--fg)]"
        >
          <span className="text-[var(--accent)]">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={["nav-forward"]}
                className={cn(
                  "rounded-md px-3 py-2 font-mono text-sm transition-colors",
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                )}
              >
                {active ? `./${link.label}` : link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3.5 py-1.5 font-mono text-xs text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            resume
          </a>
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] md:hidden"
        >
          {open ? (
            <CloseIcon className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--border)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  transitionTypes={["nav-forward"]}
                  className={cn(
                    "rounded-md px-2 py-2.5 font-mono text-sm",
                    active ? "text-[var(--accent)]" : "text-[var(--fg-muted)]"
                  )}
                >
                  {active ? `./${link.label}` : link.label}
                </Link>
              );
            })}
            <a
              href={profile.resumeHref}
              download
              className="mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-2.5 font-mono text-sm text-[var(--fg-muted)]"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              resume
            </a>
          </div>
          <div className="mt-3 border-t border-[var(--border)] pt-3">
            <ThemeToggle />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
