import type { ProjectSummary } from "@/data/projects";
import { Badge } from "@/components/ui";

export function ProjectListItem({ project }: { project: ProjectSummary }) {
  return (
    <div className="flex flex-col gap-2 border-b border-[var(--border)] py-5 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="sm:max-w-md">
        <h3 className="font-medium text-[var(--fg)]">{project.title}</h3>
        <p className="mt-1 text-sm text-[var(--fg-muted)]">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 sm:justify-end">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
