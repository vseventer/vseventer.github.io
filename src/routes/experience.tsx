import { IconPointFilled } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { P } from "@/components/ui/typography";

function Item({ children }: React.HTMLAttributes<HTMLElement>) {
  return <li className="ml-4 relative">{children}</li>;
}

function Marker({ children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="absolute right-full mr-[5px] mt-[1px] top-6 flex leading-none text-gray-500">
      {children}
      <IconPointFilled className="-mt-1" />
    </div>
  );
}

export const Route = createFileRoute("/experience")({
  component: () => (
    <Section title="Experience">
      <ol className="max-w-3xl ml-14 py-8 space-y-4 border-l-2 border-gray-300">
        <Item>
          <Marker>2020</Marker>
          <Card>
            <CardHeader>
              <CardTitle>TrustCloud</CardTitle>
            </CardHeader>
            <CardContent>
              <P>
                Founding member responsible for anything front-end, Node.js, and
                JavaScript related. I initiated various (passion) projects, like
                migrations to React Router or Vite. Lead engineer on the design
                system implementation used by our apps.
              </P>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Marker>2017</Marker>
          <Card>
            <CardHeader>
              <CardTitle>JW Player</CardTitle>
            </CardHeader>
            <CardContent>
              <P>
                Part of the analytics team writing VAST, VPAID, FreeWheel,
                Google Dynamic Ad Insertion plugins for the core player library.
                All vanilla JavaScript with extreme focus on stability and
                performance.
              </P>
              <P>
                During my time at JW Player, I was able to implement major
                features into the analytics component like Header Bidding, and
                ad preloading.
              </P>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Marker>2016</Marker>
          <Card>
            <CardHeader>
              <CardTitle>Tesco Stores Limited</CardTitle>
            </CardHeader>
            <CardContent>
              <P>
                My first professional experience working with React and Redux.
                Additionally, I was the go-to person for anything analytics
                regarding tracking user journeys.
              </P>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Marker>2012</Marker>
          <Card>
            <CardHeader>
              <CardTitle>Kintent Inc.</CardTitle>
            </CardHeader>
            <CardContent>
              <P>
                My first year at the company was spent partially writing my
                Master’s Thesis on (offline) data synchronization for HTML5
                apps.
              </P>
              <P>
                Subsequent years I did back- and front-end development, and was
                responsible for the Backend as a Service (serverless) JavaScript
                SDK.
              </P>
            </CardContent>
          </Card>
        </Item>
        <Item>
          <Marker>2008</Marker>
          <Card>
            <CardHeader>
              <CardTitle>No Search B.V.</CardTitle>
            </CardHeader>
            <CardContent>
              <P>
                Responsible for back- and front-end development of online media
                concepts aimed towards fashion. Mainly PHP, MySQL, HTML, and
                JavaScript (jQuery!).
              </P>
            </CardContent>
          </Card>
        </Item>
      </ol>
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
  meta: () => [{ title: "Experience" }],
});
