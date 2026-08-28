import Link from "next/link";
import { Container, SectionHeading, Badge } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  TerminalGlyph,
} from "@/components/icons";

export default function Home() {
  return (
    <PageTransition>
      <div className="contents">
        {/* Hero */}
        <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-sm text-[var(--accent)]">
              hello, world <span className="blink-cursor">_</span>
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--fg)] sm:text-5xl">
              {profile.name}
            </h1>
            <p className="font-mono text-sm text-[var(--fg-muted)] sm:text-base">
              {profile.tagline}
            </p>
            <p className="max-w-lg text-lg text-[var(--fg-muted)]">
              {profile.heroBio}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
              >
                View projects
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <DownloadIcon className="h-4 w-4" />
                Resume
              </a>
              <Link
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
          <TerminalGlyph className="mx-auto h-auto w-full max-w-xs" />
        </Container>

        {/* About */}
        <Container className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="01" title="About" />
          <div className="flex flex-col gap-4 text-lg text-[var(--fg-muted)] max-w-2xl">
            {profile.aboutBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>

        {/* Skills */}
        <Container className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="02" title="Skills" />
          <div className="grid gap-8 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-sm text-[var(--fg-subtle)]">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Featured projects */}
        <Container className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading
            index="03"
            title="Featured projects"
            description="RentAsst is my day-to-day work; the rest are self-driven builds in IoT, computer vision, and road/patient safety."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--accent)] hover:underline"
            >
              See all projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
