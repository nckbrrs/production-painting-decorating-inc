"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "~/lib/utils";

type FullScreenMenuProps = {
  isOpen: boolean;
  links: { linkType: "external" | "local"; text: string; href: string }[];
  onClickLink: () => void;
};

export default function FullScreenMenu({ isOpen, links, onClickLink }: FullScreenMenuProps) {
  return isOpen ? (
    <motion.div
      className={cn(
        "fixed left-0 top-0 z-20",
        "flex flex-row w-full h-full",
        "justify-center items-center",
        "bg-black/50 backdrop-blur-2xl text-bone",
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <nav className="group flex flex-col items-center gap-0 lg:gap-1">
        {links.map((l) => (
          <Link
            key={l.text}
            href={l.href}
            target={l.linkType === "external" ? "_blank" : undefined}
            rel={l.linkType === "external" ? "noopener noreferrer" : undefined}
            onClick={onClickLink}
            className={cn(
              "w-full text-center",
              "text-3xl md:text-4xl lg:text-5xl font-semibold italic",
              "transition-all duration-150",
              "group-hover:opacity-25 hover:!opacity-100",
            )}
          >
            {l.text.toUpperCase()}
          </Link>
        ))}
      </nav>
    </motion.div>
  ) : null;
}
