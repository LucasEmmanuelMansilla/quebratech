"use client";

import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { brand, footer, navItems } from "@/content/marketing";
import { scrollToId, scrollToTop } from "@/lib/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <BrandLogo inverted onClick={scrollToTop} />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {footer.blurb}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary">
            Navegación
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary">
            Seguinos
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Quebratech"
              className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Image src="/linkedin.svg" alt="" width={28} height={28} />
            </a>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Quebratech"
              className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Image src="/instagram.svg" alt="" width={28} height={28} />
            </a>
          </div>
          <a
            href={`mailto:${brand.email}`}
            className="mt-4 block text-sm text-white/80 transition hover:text-white"
          >
            {brand.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.displayName}. Todos los derechos reservados.
          </p>
          <p>{brand.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
