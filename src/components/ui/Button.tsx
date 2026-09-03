import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-lighter focus-visible:ring-primary",
  secondary:
    "bg-white text-primary border border-white/20 hover:bg-neutral-lighter focus-visible:ring-white",
  ghost:
    "bg-transparent text-white border border-white/35 hover:bg-white/10 focus-visible:ring-white",
  accent:
    "bg-tertiary-darker text-white shadow-lg shadow-tertiary/20 hover:bg-tertiary focus-visible:ring-tertiary",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}
