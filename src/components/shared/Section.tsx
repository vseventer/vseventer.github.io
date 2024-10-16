import React from "react";

import { H2 } from "@/components/ui/typography";

export function Section({
  children,
  title,
}: React.HTMLAttributes<HTMLElement> & { title: string }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container space-y-8">
        <H2>{title}</H2>
        {children}
      </div>
    </section>
  );
}
