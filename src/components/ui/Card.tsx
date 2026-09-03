import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function Card({ children, className, as: Component = "article" }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-neutral-darker/40 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
        className,
      )}
    >
      {children}
    </Component>
  );
}
