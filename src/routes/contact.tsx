import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";

export const Route = createFileRoute("/contact")({
  component: () => (
    <Section title="Contact">
      <P>
        The easiest way to reach me is via X (
        <a href="https://x.com/vseventer">vseventer</a>), or by e-mail at{" "}
        <a href="mailto:mark@vseventer.com">mark@vseventer.com</a>
      </P>
      <P>
        <Button asChild>
          <a
            href="/assets/markvanseventer-resume.pdf"
            download="markvanseventer-resume.pdf"
          >
            Download Resume
          </a>
        </Button>
      </P>
    </Section>
  ),
  meta: () => [{ title: "Contact" }],
});
