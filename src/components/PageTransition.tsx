import { ViewTransition } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a page's content so route navigations get a directional slide:
 * links tagged `transitionTypes={["nav-forward"]}` slide the new page in
 * from the right (and the old one out to the left); `["nav-back"]` reverses
 * it. Untyped transitions (browser back/forward, refresh) fall through to
 * `default="none"` — no motion, which is the safe default.
 *
 * Must be used inside each page.tsx, not the root layout — layouts persist
 * across navigations, so their enter/exit never fire. See:
 * node_modules/next/dist/docs/01-app/02-guides/view-transitions.md
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
