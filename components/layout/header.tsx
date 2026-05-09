"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <Link href="#top" className="text-xl font-bold tracking-wide">
        AS.
      </Link>
      <nav className="flex items-center gap-8 text-xs font-medium uppercase tracking-wide text-white/70 md:text-sm">
        <Link href="#experience" className="transition hover:text-white">
          Esperienza
        </Link>
        <Link href="#projects" className="transition hover:text-white">
          Progetti
        </Link>
        <Link href="#contact" className="transition hover:text-white">
          Contatti
        </Link>
      </nav>
    </header>
  );
}
