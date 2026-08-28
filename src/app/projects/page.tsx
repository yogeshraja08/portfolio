import type { Metadata } from "next";
import { Container, PageHeader, SectionHeading } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects, moreProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Professional and academic projects — from an ERP platform for rental businesses to IoT, computer vision, and safety-focused builds.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Container>
        <PageHeader
          eyebrow="./projects"
          title="Projects"
          description="A mix of professional and academic work — full case studies for the bigger builds, a quick rundown for the rest."
        />

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="01" title="Case studies" />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading
            index="02"
            title="More projects"
            description="Smaller academic builds — no dedicated write-up yet, but here's what each one does."
          />
          <div>
            {moreProjects.map((project) => (
              <ProjectListItem key={project.title} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </PageTransition>
  );
}
