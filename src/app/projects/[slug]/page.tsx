import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Badge } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import { projects, getProject } from "@/data/projects";
import { ArrowLeftIcon, LockIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <Container className="max-w-3xl py-16 sm:py-20">
        <Link
          href="/projects"
          transitionTypes={["nav-back"]}
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--fg-muted)] hover:text-[var(--accent)]"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          all projects
        </Link>

        <div className="mt-8 flex flex-col gap-3">
          <span className="font-mono text-sm text-[var(--accent)]">
            {project.type === "Professional" ? "work" : "academic"}
            {project.period ? ` · ${project.period}` : ""}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--fg-muted)]">{project.tagline}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {project.role ? (
          <p className="mt-6 font-mono text-sm text-[var(--fg-subtle)]">
            Role:{" "}
            <span className="text-[var(--fg-muted)]">{project.role}</span>
          </p>
        ) : null}

        <div className="mt-10 border-t border-[var(--border)] pt-10">
          <h2 className="text-lg font-semibold text-[var(--fg)]">Overview</h2>
          <p className="mt-3 text-[var(--fg-muted)]">{project.description}</p>
        </div>

        {project.highlights?.length ? (
          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <h2 className="text-lg font-semibold text-[var(--fg)]">
              Key highlights
            </h2>
            <ul className="mt-3 flex flex-col gap-2.5">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[var(--fg-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 flex items-center gap-2 border-t border-[var(--border)] pt-8 font-mono text-sm text-[var(--fg-subtle)]">
          <LockIcon className="h-4 w-4" />
          {project.status}
        </div>
      </Container>
    </PageTransition>
  );
}
