import { createFileRoute } from "@tanstack/react-router";

import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { Section } from "@/components/shared/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { P } from "@/components/ui/typography";

import markMyJourney from "../assets/images/markmyjourney_1280p.png?w=480&imagetools";

export function Projects() {
  return (
    <Section title="Projects">
      <ul className="grid grid-cols-card grid-flow-dense gap-4">
        <li>
          <a href="https://npmjs.org/package/sharp-cli">
            <Card>
              <CardHeader>
                <CardTitle>
                  sharp-cli <em>(400k+ downloads annually)</em>
                </CardTitle>
                <CardDescription>
                  CLI for Sharp - image processing via the command line
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>
                  Enables the powerful Sharp library to be seamlessly used in
                  the terminal - e.g. during an automated build process. Exposes
                  the entire Sharp API in a chainable fashion.
                </P>
              </CardContent>
            </Card>
          </a>
        </li>
        <li>
          <Card>
            <CardHeader>
              <CardTitle>
                vseventer.com <em>(this website!)</em>
              </CardTitle>
              <CardDescription>
                Playground to experiment with latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                Current tools: TypeScript, TanStack Router, shadcn/ui, Tailwind,
                Vite
              </P>
            </CardContent>
          </Card>
        </li>
        <li>
          <a href="https://markmyjourney.com">
            <Card>
              <CardHeader>
                <CardTitle>MarkMyJourney.com</CardTitle>
                <CardDescription>Our travel blog</CardDescription>
              </CardHeader>
              <picture className="block border-y mb-6">
                <ResponsiveImage src={markMyJourney} />
              </picture>
              <CardContent>
                <P>
                  Eleventy-powered blog with heavy emphasis on geographical
                  visuals using Leaflet, covering our travels across the world
                  during 2014–2017.
                </P>
              </CardContent>
            </Card>
          </a>
        </li>
        <li>
          <Card>
            <CardHeader>
              <CardTitle>
                Tobklasse <em>(sold in 2011)</em>
              </CardTitle>
              <CardDescription>
                Covering the Dutch top-amateur soccer league
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                My first-ever project that I built using PHP and MySQL,
                passionately maintained for over a year, before selling its
                technical implementation.
              </P>
            </CardContent>
          </Card>
        </li>
        <li>
          <Card>
            <CardHeader>
              <CardTitle>
                EuroSoccer <em>(sold in 2006)</em>
              </CardTitle>
              <CardDescription>
                Featured on Dutch national radio in 2005
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                My first-ever project, built using PHP and MySQL, covering
                soccer news, live scores, and stats. Recruited a group of soccer
                fans who passionately maintained its content.
              </P>
            </CardContent>
          </Card>
        </li>
      </ul>
    </Section>
  );
}

export const Route = createFileRoute("/projects")({
  component: () => <Projects />,
  meta: () => [{ title: "Projects" }],
});
