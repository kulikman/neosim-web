import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Use "narrow" for editorial/legal content, "wide" for full-bleed sections */
  size?: "default" | "narrow" | "wide";
}

/**
 * Centered max-width container matching the Kit's 1320px layout.
 * Wraps page content sections with consistent horizontal padding.
 */
export function Container({
  children,
  className,
  size = "default",
}: ContainerProps): React.ReactElement {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        {
          "max-w-[1320px]": size === "default",
          "max-w-3xl":      size === "narrow",
          "max-w-screen-2xl": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
