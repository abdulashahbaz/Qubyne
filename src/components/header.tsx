"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { nav } from "@/content/site";
import { cx } from "@/lib/cx";

export function Header() {
  const pathname = usePathname();
  // Remember which page the menu was opened on: navigating elsewhere closes it
  // automatically, with no effect needed.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenOn(null);
      menuButton.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-header backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(
                "rounded-control px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-(--duration-base) hover:text-ink",
                isActive(item.href) ? "text-ink" : "text-ink-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <div className="hidden md:block">
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenOn(open ? null : pathname)}
            className="inline-flex size-11 items-center justify-center rounded-control text-ink transition-colors duration-(--duration-base) hover:bg-raised md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </Container>

      <div id="mobile-nav" hidden={!open} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line/70 md:hidden">
        <Container className="py-4">
          <nav aria-label="Primary">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line/70 last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cx(
                      "flex min-h-14 items-center text-h3",
                      isActive(item.href) ? "text-accent" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="/contact" size="lg" arrow className="mt-4 mb-2 w-full">
            Start a project
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
