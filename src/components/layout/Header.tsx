"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/content/marketing";
import { cn } from "@/lib/cn";
import { scrollToId, scrollToTop } from "@/lib/scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = ["inicio", ...navItems.map((item) => item.id)];
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
  }, []);

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
        <BrandLogo inverted onClick={() => goTo("inicio")} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
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
            Hablemos
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-primary lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navItems.map((item) => (
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
            Hablemos
          </Button>
        </Container>
      </div>
    </header>
  );
}
