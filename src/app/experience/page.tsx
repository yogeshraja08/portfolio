import type { Metadata } from "next";
import { Container, PageHeader, SectionHeading, Card } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import {
  certificates,
  education,
  experience,
  leadership,
} from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, education, certificates, and leadership — Yogesh Raja's background.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Container>
        <PageHeader
          eyebrow="./experience"
          title="Experience"
          description="Where I've worked, studied, and picked up a few things along the way."
        />

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="01" title="Work" />
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <Card key={job.company}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[var(--fg)]">
                    {job.role} · {job.company}
                  </h3>
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-[var(--fg-subtle)]">
                  {job.location}
                </p>
                <p className="mt-4 text-[var(--fg-muted)]">{job.summary}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[var(--fg-muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="02" title="Education" />
          <div className="flex flex-col gap-6">
            {education.map((item) => (
              <Card key={item.school}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[var(--fg)]">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-[var(--fg-subtle)]">
                  {item.school}, {item.location}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="03" title="Certificates & workshops" />
          <ul className="flex flex-col gap-4">
            {certificates.map((cert) => (
              <li
                key={cert.title}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-4 last:border-b-0"
              >
                <div>
                  <span className="text-[var(--fg)]">{cert.title}</span>
                  {cert.issuer ? (
                    <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                      {cert.issuer}
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 font-mono text-sm text-[var(--fg-subtle)]">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <SectionHeading index="04" title="Leadership" />
          <div className="flex flex-col gap-3 text-[var(--fg-muted)]">
            {leadership.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      </Container>
    </PageTransition>
  );
}
