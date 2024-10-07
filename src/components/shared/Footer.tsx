import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function IconLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Button variant="outline" size="icon" asChild>
      <a {...props} />
    </Button>
  );
}

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <ul className={cn("container py-4 flex gap-2", className)}>
      <li>
        <IconLink href="https://github.com/vseventer" aria-label="GitHub">
          <IconBrandGithub />
        </IconLink>
      </li>
      <li>
        <IconLink
          href="https://linkedin.com/in/markvanseventer"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin />
        </IconLink>
      </li>
      <li>
        <IconLink href="https://x.com/vseventer" aria-label="X">
          <IconBrandX />
        </IconLink>
      </li>
    </ul>
  );
}
