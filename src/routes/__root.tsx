import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  useMatches,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Helmet } from "react-helmet";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

import "../assets/styles/main.css";

export const Route = createRootRoute({
  component: RootComponent,
  meta: () => [{ title: "Mark van Seventer" }],
});

function Meta() {
  const matches = useMatches();

  // Build document title.
  const titleNodes = matches.flatMap((route) => {
    if (route.meta) {
      return route.meta
        .filter((node) => Boolean(node.title))
        .map((node) => node.title);
    }
    return [];
  });
  const title = titleNodes.reverse().join(" - ");

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

function RootComponent() {
  return (
    <>
      <Meta />
      <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout min-h-dvh has-[.overlay]:h-dvh has-[.overlay]:overflow-hidden">
        <Header className="z-50" />
        <Outlet />
        <Footer className="grid-in-footer justify-center" />
      </div>
      <ScrollRestoration />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
