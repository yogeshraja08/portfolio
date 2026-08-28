import Link from "next/link";
import { Container } from "@/components/ui";
import { PageTransition } from "@/components/PageTransition";
import { ArrowLeftIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <PageTransition>
      <Container className="flex flex-col items-center gap-4 py-32 text-center">
        <span className="font-mono text-sm text-[var(--accent)]">404</span>
        <h1 className="text-3xl font-semibold text-[var(--fg)]">
          Route not found
        </h1>
        <p className="max-w-sm text-[var(--fg-muted)]">
          Whatever you were looking for doesn&apos;t exist at this path.
        </p>
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-[var(--accent)] hover:underline"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          back home
        </Link>
      </Container>
    </PageTransition>
  );
}
