import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            isDark ? "text-tertiary" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          isDark ? "text-white" : "text-secondary",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          align === "center" && "mx-auto",
          isDark ? "bg-tertiary" : "bg-tertiary-darker",
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/80" : "text-secondary/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
