import type { SVGProps } from "react";

/**
 * Minimal inline icon set — avoids pulling in an icon package for a handful
 * of glyphs. Every icon takes normal SVG props so size/color/className work
 * the same way as any other SVG.
 */

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.339-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.03-2.692-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.548 9.548 0 0 1 12 6.844a9.56 9.56 0 0 1 2.503.337c1.909-1.298 2.747-1.028 2.747-1.028.546 1.378.203 2.397.1 2.65.64.702 1.028 1.597 1.028 2.692 0 3.853-2.337 4.7-4.566 4.949.359.31.679.919.679 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34H9.24V8.5h3.24v1.63h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.25 4.06 5.19v6.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21.6 12.23c0-.68-.06-1.36-.18-2H12v3.78h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.23c1.9-1.75 2.97-4.33 2.97-7.31Z"
        fill="currentColor"
      />
      <path
        d="M12 22c2.7 0 4.97-.89 6.63-2.42l-3.23-2.5c-.9.6-2.06.96-3.4.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z"
        fill="currentColor"
      />
      <path
        d="M6.41 13.92a5.99 5.99 0 0 1 0-3.84V7.5H3.07a10 10 0 0 0 0 9l3.34-2.58Z"
        fill="currentColor"
      />
      <path
        d="M12 5.98c1.47 0 2.79.5 3.83 1.49l2.87-2.87A9.96 9.96 0 0 0 12 2a10 10 0 0 0-8.93 5.5l3.34 2.58C7.2 7.74 9.4 5.98 12 5.98Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 19.5h16" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 12H4" />
      <path d="m11 19-7-7 7-7" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.55 1.55M18.25 18.25l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.55-1.55M18.25 5.75l1.55-1.55" />
    </svg>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.2 14.7A8.3 8.3 0 1 1 9.3 3.8a6.7 6.7 0 0 0 10.9 10.9Z" />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </svg>
  );
}

/** Decorative terminal-window glyph used as the hero visual (per user's request for an icon rather than a photo). */
export function TerminalGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" {...props}>
      <rect
        x="10"
        y="10"
        width="180"
        height="180"
        rx="24"
        fill="var(--bg-elevated)"
        stroke="var(--border)"
        strokeWidth="1.5"
      />
      <circle cx="34" cy="38" r="5" fill="var(--fg-subtle)" opacity="0.5" />
      <circle cx="52" cy="38" r="5" fill="var(--fg-subtle)" opacity="0.5" />
      <circle cx="70" cy="38" r="5" fill="var(--fg-subtle)" opacity="0.5" />
      <line x1="10" y1="56" x2="190" y2="56" stroke="var(--border)" strokeWidth="1.5" />
      <text
        x="26"
        y="86"
        fontFamily="var(--font-mono)"
        fontSize="15"
        fill="var(--accent)"
      >
        &gt; whoami
      </text>
      <text
        x="26"
        y="112"
        fontFamily="var(--font-mono)"
        fontSize="15"
        fill="var(--fg-muted)"
      >
        yogesh_raja
      </text>
      <text
        x="26"
        y="138"
        fontFamily="var(--font-mono)"
        fontSize="15"
        fill="var(--accent)"
      >
        &gt; role
      </text>
      <text
        x="26"
        y="164"
        fontFamily="var(--font-mono)"
        fontSize="15"
        fill="var(--fg-muted)"
      >
        dev<tspan className="blink-cursor">▌</tspan>
      </text>
    </svg>
  );
}
