"use client";

import ProjectCard from "@/components/ui/project-card";
import ScrollLinkedReveal from "@/components/ui/scroll-linked-reveal";
import { SectionTitle } from "@/components/ui/typography";

type ProjectItem = {
  type: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl: string;
  caseStudyUrl: string;
  downloadUrl?: string;
  docsUrl?: string;
};

const projects: ProjectItem[] = [
  {
    type: "Libreria C",
    title: "Savo.h",
    description:
      "Libreria C personale in cui raccolgo funzioni e utility che scrivo mentre studio e sperimento col linguaggio.",
    tags: ["C"],
    image: "/file.svg",
    sourceUrl: "",
    caseStudyUrl: "",
    downloadUrl: "/downloads/savo.h",
    docsUrl: "/savo",
  },
  {
    type: "Sito web",
    title: "Blanchir",
    description:
      "Sviluppo e progettazione grafica del sito per un'attività di imbianchino, realizzato in HTML, CSS e JavaScript. Integrazione con servizi AWS e pagamenti con Stripe.",
    tags: ["HTML", "CSS", "JavaScript", "AWS", "Stripe"],
    image: "/images/projects/blanchir.png",
    sourceUrl: "",
    caseStudyUrl: "https://www.blanchir.it",
  },
  {
    type: "Sito web",
    title: "Agriturismo Camporosso",
    description:
      "Sviluppo e progettazione grafica del sito dell'agriturismo in HTML, CSS e JavaScript, con Firebase per dati e funzionalità lato backend.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "/images/projects/agriturismo-camporosso.png",
    sourceUrl: "",
    caseStudyUrl: "https://www.agriturismocamporosso.it",
  },
  {
    type: "Portfolio",
    title: "Portfolio personale",
    description:
      "Il sito che stai visitando: one-page con animazioni al scroll, sezioni per esperienza e progetti, e contatti. Pensato per presentarmi e raccogliere i lavori in un unico posto.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    sourceUrl: "https://github.com/andrea09000/sito-personale",
    caseStudyUrl: "https://savoldelliandrea.me",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex w-full max-w-7xl scroll-mt-24 flex-col gap-8 pb-24 pt-6"
    >
      <ScrollLinkedReveal fromY={24} revealStart={0.08} revealEnd={0.42}>
        <SectionTitle className="mt-40 mb-10">Progetti personali</SectionTitle>
      </ScrollLinkedReveal>

      <div className="flex flex-col gap-30">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <ScrollLinkedReveal key={project.title} fromY={20} revealEnd={0.22}>
              <ProjectCard
                type={project.type}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                sourceUrl={project.sourceUrl}
                caseStudyUrl={project.caseStudyUrl}
                downloadUrl={project.downloadUrl ?? ""}
                docsUrl={project.docsUrl ?? ""}
                reverse={isReverse}
              />
            </ScrollLinkedReveal>
          );
        })}
      </div>
    </section>
  );
}
