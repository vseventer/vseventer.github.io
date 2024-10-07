import { cn } from "@/lib/utils";

export function ResponsiveImage({
  className,
  ...delegated
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={cn("max-w-full h-auto", className)} {...delegated} />;
}
