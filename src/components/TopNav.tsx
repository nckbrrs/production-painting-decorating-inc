"use client";

import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
  { linkType: "local" as const, text: "Home", href: "/" },
  { linkType: "local" as const, text: "Showcase", href: "/showcase" },
  { linkType: "local" as const, text: "Portfolio", href: "/portfolio" },
  { linkType: "local" as const, text: "About Us", href: "/about" },
  { linkType: "local" as const, text: "Careers", href: "/careers" },
];

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const open = () => { setIsOpen(true); document.body.style.overflow = "hidden"; };
  const close = () => { setIsOpen(false); document.body.style.overflow = ""; };
  const toggle = () => (isOpen ? close() : open());

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("full-screen-hero-video");
      setScrolledPastHero(window.scrollY > (hero ? hero.offsetHeight - 80 : 0));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    close();
    setScrolledPastHero(false);
  }, [pathname]);

  const onHero = isHome && !scrolledPastHero;
  const barColor = isOpen || onHero ? "bone" : "black";
  const linkColor = onHero ? "text-white" : "text-black dark:text-bone";

  return (
    <>
      <FullScreenMenu isOpen={isOpen} links={links} onClickLink={() => setTimeout(close, 20)} />

      {/* Hamburger — fixed top-right, mobile/tablet only */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn(
          "fixed px-2 py-3 right-5 md:right-8 lg:right-14 top-8 md:top-10 lg:top-14 z-20",
          "flex xl:hidden cursor-pointer rounded-md",
          "transition-all duration-75 hover:scale-110",
          (scrolledPastHero && !isOpen) && "backdrop-blur-lg",
        )}
      >
        <Hamburger isOpen={isOpen} color={barColor} />
      </button>

      {/* Full nav bar — absolute, full width */}
      <div className="absolute w-full flex flex-row justify-between items-center py-4 xl:py-0 z-10 h-24 md:h-28 lg:h-36">
        {/* Logo — top left */}
        <Link
          href="/"
          className={cn(
            "ml-6 md:ml-8 lg:ml-10",
            "flex aspect-square h-16 md:h-20 lg:h-24",
            "transition-all duration-200",
            onHero ? "invert" : "invert-0 dark:invert",
          )}
        >
          <img src="/OGLogo.png" alt="PPD Logo" className="h-full object-contain" />
        </Link>

        {/* Text links — top right, xl+ only */}
        <nav className="hidden xl:flex flex-row items-center group pr-6 lg:pr-10 gap-6">
          {links.map((l) => (
            <Link
              key={l.text}
              href={l.href}
              className={cn(
                "font-semibold uppercase text-lg tracking-wide drop-shadow-sm",
                "transition-all duration-100",
                "group-hover:opacity-40 group-hover:blur-[1px]",
                "hover:!opacity-100 hover:!blur-none",
                linkColor,
              )}
            >
              {l.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
