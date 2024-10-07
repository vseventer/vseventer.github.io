import { Link as LinkPrimitive } from "@tanstack/react-router";
import type { LinkProps as LinkPrimitiveProps } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export type LinkProps = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> &
  LinkPrimitiveProps;

export function Link({ className, ...delegated }: LinkProps) {
  return (
    <Button className={className} variant="link" asChild>
      <LinkPrimitive {...(delegated as LinkProps)} />
    </Button>
  );
}
