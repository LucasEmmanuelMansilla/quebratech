import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { brand } from "@/content/brand";

type BrandLogoProps = {
  className?: string;
  inverted?: boolean;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function BrandLogo({
  className,
  inverted = false,
  href,
  onClick,
}: BrandLogoProps) {
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

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn("inline-flex items-center gap-2.5", className)}
        aria-label={`${brand.displayName} — ir al inicio`}
      >
        {content}
      </Link>
    );
  }

  return <div className={cn("inline-flex items-center gap-2.5", className)}>{content}</div>;
}
