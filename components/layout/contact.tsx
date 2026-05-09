"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  DisplayTitle,
  Eyebrow,
  SectionTitle,
} from "@/components/ui/typography";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="mx-auto grid w-full max-w-7xl scroll-mt-24 grid-cols-1 gap-12 border-t border-white/10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
      id="contact"
    >
      <div className="flex flex-col justify-center gap-10">
        <SectionTitle>Contatti</SectionTitle>
        <DisplayTitle className="text-6xl">
          <span className="block">SCRIVIMI</span>
          <span className="block italic text-white/25">QUANDO VUOI.</span>
        </DisplayTitle>
        <Link
          href="mailto:Savoldelli.Andrea@yahoo.com"
          className="inline-flex w-fit items-center gap-3 border-b border-white/25 pb-1 text-xl text-white/75 no-underline transition hover:text-white md:text-3xl"
        >
          Savoldelli.Andrea@yahoo.com
          <ArrowUpRight size={24} />
        </Link>
      </div>

      <div className="flex flex-col items-start justify-end gap-4 lg:items-end">
        <Eyebrow>© {currentYear} Andrea Savoldelli</Eyebrow>
        <Eyebrow>Istituto Grazio Cossali · Italia</Eyebrow>
      </div>
    </section>
  );
}
