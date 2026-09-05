"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { audienceLinks, getCopy } from "@/content/marketing";
import type { Audience } from "@/content/types";
import { cn } from "@/lib/cn";
import { scrollToId, scrollToTop } from "@/lib/scroll";

type HeaderProps = {
  audience: Audience;
};

export function Header({ audience }: HeaderProps) {
  const copy = getCopy(audience);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = ["inicio", ...copy.navItems.map((item) => item.id)];
      let current = "inicio";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [copy.navItems]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    if (id === "inicio") {
      scrollToTop();
      return;
    }
    scrollToId(id);
  };

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    goTo("inicio");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-primary/95 shadow-lg shadow-primary/20 backdrop-blur-md"
          : "bg-primary",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <div className="flex items-center gap-3 sm:gap-5">
          <BrandLogo inverted href={copy.homeHref} onClick={onLogoClick} />
          <AudienceSwitch audience={audience} className="hidden sm:flex" />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {copy.navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "bg-tertiary text-secondary"
                  : "text-white/85 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="accent"
            size="md"
            className="ml-3"
            onClick={() => goTo("contacto")}
          >
            {copy.headerCta}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <AudienceSwitch audience={audience} compact className="sm:hidden" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-primary lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {copy.navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className={cn(
                "rounded-xl px-4 py-3 text-left text-base font-medium",
                active === item.id
                  ? "bg-tertiary text-secondary"
                  : "text-white hover:bg-white/10",
              )}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="accent"
            size="lg"
            fullWidth
            className="mt-2"
            onClick={() => goTo("contacto")}
          >
            {copy.headerCta}
          </Button>
        </Container>
      </div>
    </header>
  );
}

type AudienceSwitchProps = {
  audience: Audience;
  className?: string;
  compact?: boolean;
};

function AudienceSwitch({ audience, className, compact = false }: AudienceSwitchProps) {
  if (compact) {
    const other = audienceLinks.find((item) => item.audience !== audience) ?? audienceLinks[1];
    return (
      <Link
        href={other.href}
        className={cn(
          "rounded-lg px-2 py-1 text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white",
          className,
        )}
      >
        {other.label}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-white/15 bg-white/5 p-0.5",
        className,
      )}
      aria-label="Elegí el tipo de negocio"
    >
      {audienceLinks.map((item) => {
        const isActive = item.audience === audience;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
              isActive
                ? "bg-tertiary text-secondary"
                : "text-white/75 hover:bg-white/10 hover:text-white",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
