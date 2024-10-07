import { createFileRoute, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { Footer } from "@/components/shared/Footer";
import { H1, Lead } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { Projects } from "./projects";

function Hero({ className }: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();

  return (
    <motion.section
      animate={{ y: "-100%" }}
      onAnimationStart={() => router.preloadRoute({ to: "/projects" })}
      onAnimationComplete={() => router.navigate({ to: "/projects" })}
      transition={{ delay: 4.25, duration: 1, ease: "backInOut" }}
      className={cn("overlay", "grid place-items-center bg-gray-50", className)}
    >
      <div className="text-center container p-4 space-y-2">
        <div className="space-y-4">
          <H1>Hello, I’m Mark</H1>
          <Lead className="type-hero"></Lead>
        </div>
        <motion.div
          animate={{ opacity: 0 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <Footer className="justify-center" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Hero className="absolute inset-0" />
      <Projects />
    </>
  ),
});
