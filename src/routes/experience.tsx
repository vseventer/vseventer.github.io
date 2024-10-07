import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/shared/Section";

export const Route = createFileRoute("/experience")({
  component: () => <Section title="Experience"></Section>,
  meta: () => [{ title: "Experience" }],
});
