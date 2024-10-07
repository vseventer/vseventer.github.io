import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/shared/Section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const COLORS = [
  // "text-slate-700",
  "text-gray-700",
  // "text-zinc-700",
  // "text-neutral-700",
  // "text-stone-700",
  "text-red-700",
  "text-orange-700",
  "text-amber-700",
  "text-yellow-700",
  "text-lime-700",
  "text-green-700",
  "text-emerald-700",
  "text-teal-700",
  "text-cyan-700",
  "text-sky-700",
  // "text-blue-700",
  "text-indigo-700",
  "text-violet-700",
  // "text-purple-700",
  "text-fuchsia-700",
  "text-pink-700",
  "text-rose-700",
] as const;

function textToClass(value: string) {
  let result = 0;
  for (let i = 0; i < value.length; i += 1) {
    result += value.charCodeAt(i);
  }
  return COLORS[result % COLORS.length];
}

function Item({
  children,
  className,
  ...delegated
}: React.HTMLAttributes<HTMLDivElement> & { children: string }) {
  return (
    <Card
      className={cn(
        "grid place-items-center",
        textToClass(children),
        className,
      )}
      {...delegated}
    >
      {children}
    </Card>
  );
}

export const Route = createFileRoute("/skills")({
  component: () => (
    <Section title="Skills">
      <ul className="grid gap-4 grid-cols-tile auto-rows-[8px] lg:auto-rows-[12px] grid-flow-dense">
        <Item className="col-span-9 row-span-9 text-4xl md:text-7xl lg:text-9xl">
          React
        </Item>
        <Item className="col-span-4 row-span-4 text-lg md:text-2xl lg:text-4xl">
          TypeScript
        </Item>
        <Item className="col-span-6 row-span-6 text-xl md:text-4xl lg:text-6xl">
          HTML5
        </Item>
        <Item className="col-span-6 row-span-6 text-xl md:text-4xl lg:text-6xl">
          CSS
        </Item>
        <Item className="col-span-5 row-span-5 text-lg md:text-3xl lg:text-5xl">
          Tanstack
        </Item>
        <Item className="col-span-8 row-span-8 text-3xl md:text-6xl lg:text-8xl">
          JavaScript
        </Item>
        <Item className="col-span-7 row-span-7 text-2xl md:text-5xl lg:text-7xl">
          Node.js
        </Item>
        <Item className="col-span-4 row-span-4 text-lg md:text-2xl lg:text-4xl">
          SQL
        </Item>
        <Item className="col-span-2 row-span-2 text-sm md:text-lg lg:text-2xl">
          GraphQL
        </Item>
        <Item className="col-span-4 row-span-3 text-lg md:text-2xl lg:text-4xl">
          PostgreSQL
        </Item>
        <Item className="col-span-3 row-span-3 md:text-xl lg:text-3xl">
          AWS
        </Item>
        <Item className="col-span-5 row-span-5 text-xl md:text-3xl lg:text-5xl">
          Remix
        </Item>
        <Item className="col-span-6 row-span-6 text-2xl md:text-4xl lg:text-6xl">
          Tailwind
        </Item>
        <Item className="col-span-3 row-span-3 md-text-xl lg:text-3xl">
          Mocha
        </Item>
        <Item className="col-span-3 row-span-3 md-text-xl lg:text-3xl">
          Jest
        </Item>
        <Item className="col-span-3 row-span-3 md-text-xl lg:text-3xl">
          Vitest
        </Item>
        <Item className="col-span-4 row-span-4 text-lg md-text-2xl lg:text-4xl">
          XState
        </Item>
        <Item className="col-span-2 row-span-2 text-sm md:text-lg lg:text-2xl">
          zustand
        </Item>
      </ul>
    </Section>
  ),
  meta: () => [{ title: "Skills" }],
});
