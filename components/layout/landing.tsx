import {
  BodyText,
  SectionTitle,
  SubTitle,
} from "@/components/ui/typography";
import AnimatedTitle from "@/components/ui/animated-title";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="relative isolate mx-auto flex min-h-screen w-full max-w-7xl items-center overflow-hidden pt-10 md:pt-0">
      <div className="relative z-20 flex max-w-3xl flex-col gap-11">
        <SectionTitle>Studente &amp; sviluppatore web · mobile</SectionTitle>
        <AnimatedTitle
          text={"ANDREA\nSAVOLDELLI"}
          className="text-6xl md:text-7xl lg:text-8xl"
        />
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
        >
          <SubTitle className="text-zinc-400">
            Istituto superiore Grazio Cossali · Informatica e Telecomunicazioni
          </SubTitle>
          <BodyText className="max-w-xl text-base text-zinc-500 md:text-lg">
            Ciao, ho 17 anni e studio presso l&apos;Istituto Grazio Cossali.
            Sono appassionato di sviluppo web e di programmazione: mi piace
            imparare costruendo progetti concreti.
          </BodyText>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.58, ease: "easeOut" }}
        >
          <Link
            href="#projects"
            className="border border-transparent bg-zinc-100 px-7 py-3 text-base font-semibold uppercase tracking-wide text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Vedi progetti
          </Link>
          <Link
            href="#contact"
            className="border-0 border-b border-white/45 bg-transparent px-0 py-4 text-base font-semibold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white"
          >
            Contattami
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 z-0 h-full w-full md:w-1/2 lg:w-5/12"
        initial={{ opacity: 0, scale: 1.04, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.58, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div className="relative h-full w-full opacity-90 md:opacity-100">
          <Image
            src="/images/projects/portrait.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-contain object-right object-top sm:object-center md:object-right xl:object-cover xl:object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          {/* Gradiente più leggero: contrasto col testo a sinistra senza “spento” il ritratto */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent md:from-black/90 md:via-black/40 md:to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-black/25 to-black/55 md:h-[55%] md:via-black/35 md:to-black/70" />
        </div>
      </motion.div>
    </section>
  );
}
