"use client";

import { useLayoutEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { MoonIcon, SunIcon } from "@/components/icons";

const STORAGE_KEY = "theme";

function readStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);

  // Re-applies the attribute after React's dev Strict Mode remount clears it.
  // No-op in production; see Next.js's flash-prevention guide.
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", readStoredTheme());
  }, []);

  function applyTheme(next: "light" | "dark") {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, disabled storage) — theme
      // still applies for this page view, it just won't persist.
    }
  }

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next = theme === "dark" ? "light" : "dark";

    // Progressive enhancement: without View Transitions support, or with
    // reduced motion requested, just swap the theme instantly.
    if (!document.startViewTransition || prefersReducedMotion()) {
      applyTheme(next);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // flushSync forces the DOM to reflect the new theme synchronously, so
    // the browser's "after" snapshot for the transition actually captures it.
    const transition = document.startViewTransition(() => {
      flushSync(() => applyTheme(next));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
