import { Link, LinkProps } from "@/components/shared/Link";
import { cn } from "@/lib/utils";

function NavLink({ className, ...delegated }: LinkProps) {
  return (
    <Link
      className={cn(
        "data-[status=active]:underline data-[status=active]:decoration-4 underline-offset-8",
        className,
      )}
      {...delegated}
    />
  );
}

export function Header({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav aria-label="Main Menu" className={cn("bg-white", className)}>
      <ol className="container px-0 py-4 flex gap-2">
        <li className="hidden sm:block">
          <NavLink to="/" activeOptions={{ exact: true }}>
            Home
          </NavLink>
        </li>
        <NavLink className="sm:ml-auto" to="/projects">
          Projects
        </NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ol>
    </nav>
  );
}
