import Image from "next/image";
import { cn } from "@/lib/cn";
import { brand } from "@/content/marketing";

type BrandLogoProps = {
  className?: string;
  inverted?: boolean;
  onClick?: () => void;
};

export function BrandLogo({ className, inverted = false, onClick }: BrandLogoProps) {
  const content = (
    <>
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20">
        <Image
          src="/icon.jpg"
          alt={`Logo de ${brand.displayName}`}
          width={40}
          height={40}
          className="object-cover"
          priority
        />
      </span>
      <span
        className={cn(
          "font-[family-name:var(--font-anta)] text-2xl tracking-wide sm:text-3xl",
          inverted ? "text-white" : "text-primary",
        )}
      >
        {brand.name}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn("inline-flex items-center gap-2.5", className)}
        aria-label={`${brand.displayName} — ir al inicio`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>{content}</div>
  );
}
