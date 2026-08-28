import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader, Card } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import { profile } from "@/data/profile";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  GoogleIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yogesh Raja.",
};

const CONTACT_LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/yogeshraja08",
    href: profile.links.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yogeshraja08",
    href: profile.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Google Developer Profile",
    value: "g.dev/yogesh08",
    href: profile.links.googleDev,
    icon: GoogleIcon,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <PageTransition>
      <Container className="max-w-2xl">
        <PageHeader
          eyebrow="./contact"
          title="Let's talk"
          description="Feel free to reach out — happy to talk about rental-tech, Flutter, or whatever you're building."
        />

        <div className="flex flex-col gap-4 pb-16 sm:pb-20">
          {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <Card className="flex items-center justify-between gap-4 group-hover:border-[var(--accent)]">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--bg-elevated-2)] text-[var(--fg-muted)] group-hover:text-[var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[var(--fg-subtle)]">
                      {label}
                    </p>
                    <p className="text-[var(--fg)]">{value}</p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--fg-subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </Card>
            </Link>
          ))}

          <a
            href={profile.resumeHref}
            download
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
          >
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
        </div>
      </Container>
    </PageTransition>
  );
}
