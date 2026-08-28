import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge, Card } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block h-full"
    >
      <Card className="flex h-full flex-col gap-4 group-hover:border-[var(--accent)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-[var(--fg-subtle)]">
              {project.type === "Professional" ? "work" : "academic"}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-[var(--fg)]">
              {project.title}
            </h3>
          </div>
          <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--fg-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
        </div>
        <p className="text-sm text-[var(--fg-muted)]">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
