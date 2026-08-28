import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-[var(--fg-subtle)] sm:flex-row sm:justify-between">
        <p className="font-mono">
          © {year} {profile.name} <span className="text-[var(--accent)]">·</span>{" "}
          built with Next.js
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <MailIcon className="h-4 w-4" />
          </Link>
          <Link
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Link
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
