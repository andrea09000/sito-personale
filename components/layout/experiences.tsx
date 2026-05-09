"use client";

import ExperienceCard from "@/components/ui/experience-card";
import ScrollLinkedReveal from "@/components/ui/scroll-linked-reveal";
import { SectionTitle } from "@/components/ui/typography";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "CEO & Founder",
    company: "Spottly",
    period: "2025 — Now",
    description:
      "Sviluppatore web e mobile di Spottly, social network geolocalizzato con la possibilità di pubblicare post e vedere i post degli altri utenti vicino a te.",
  },
  {
    role: "CEO & Founder",
    company: "Istant",
    period: "2026 — Now",
    description:
      "Sviluppo e progettazione grafica di Istant, un'applicazione social network dove è possibile condividere foto con i tuoi amici di quello che stai facendo in quel momento: durano solo 24 ore e poi scompaiono.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-7xl scroll-mt-24 flex-col pb-16"
    >
      <ScrollLinkedReveal fromY={24} revealStart={0.08} revealEnd={0.42}>
        <SectionTitle className="mt-40 mb-10">Esperienza</SectionTitle>
      </ScrollLinkedReveal>
      <div className="flex flex-col gap-16">
        {experiences.map((experience, index) => (
          <ScrollLinkedReveal
            key={`${experience.company}-${experience.role}`}
            fromX={index % 2 === 0 ? -72 : 72}
            fromY={0}
            revealEnd={0.2}
          >
            <ExperienceCard
              role={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              technologies={experience.technologies}
            />
            {index < experiences.length - 1 ? (
              <div
                className="mx-auto mt-10 h-10 w-px bg-gradient-to-b from-white/35 via-white/15 to-white/0"
                aria-hidden="true"
              />
            ) : null}
          </ScrollLinkedReveal>
        ))}
      </div>
    </section>
  );
}
