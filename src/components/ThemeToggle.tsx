"use client";

import { useLayoutEffect, useState } from "react";
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

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);

  // Re-applies the attribute after React's dev Strict Mode remount clears it.
  // No-op in production; see Next.js's flash-prevention guide.
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", readStoredTheme());
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, disabled storage) — theme
      // still applies for this page view, it just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
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
