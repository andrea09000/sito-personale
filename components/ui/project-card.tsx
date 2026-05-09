import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ExternalLink,
  Github,
  ImageOff,
} from "lucide-react";
import TechPill from "@/components/ui/tech-pill";
import { BodyText, CardTitle, Eyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface IProjectCardProps {
  type: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl: string;
  caseStudyUrl: string;
  /** Percorso o URL per scaricare un file (es. /downloads/savo.h) */
  downloadUrl?: string;
  /** Pagina interna o URL con documentazione / dettagli */
  docsUrl?: string;
  reverse?: boolean;
}

export default function ProjectCard({
  type,
  title,
  description,
  tags,
  image,
  sourceUrl,
  caseStudyUrl,
  downloadUrl = "",
  docsUrl = "",
  reverse = false,
}: IProjectCardProps) {
  const hasSourceUrl = sourceUrl.trim().length > 0;
  const hasCaseStudyUrl = caseStudyUrl.trim().length > 0;
  const hasDownloadUrl = downloadUrl.trim().length > 0;
  const hasDocsUrl = docsUrl.trim().length > 0;
  const hasImage = image.trim().length > 0;
  const isSvg = hasImage && image.trim().toLowerCase().endsWith(".svg");
  const hasAnyLink =
    hasSourceUrl ||
    hasCaseStudyUrl ||
    hasDownloadUrl ||
    hasDocsUrl;

  return (
    <article className="grid items-center gap-22 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:h-80 lg:h-96">
          {hasImage ? (
            <Image
              src={image}
              alt={title}
              fill
              className={cn(
                "transition duration-500 ease-out",
                isSvg
                  ? "object-contain p-[22%] brightness-0 invert opacity-45 group-hover:scale-105 group-hover:opacity-80"
                  : "object-cover grayscale group-hover:scale-110 group-hover:grayscale-0",
              )}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%),linear-gradient(160deg,#191919_0%,#0D0D0D_100%)] px-6 text-center text-white/70">
              <ImageOff size={34} className="text-white/45" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Preview coming soon
              </p>
              <p className="max-w-xs text-sm text-white/60">
                This project does not have an image yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col gap-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <Eyebrow>{type}</Eyebrow>
        <CardTitle className="text-2xl md:text-4xl">{title}</CardTitle>
        <BodyText className="text-base md:text-lg">{description}</BodyText>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <TechPill key={`${title}-${tag}`} label={tag} />
          ))}
        </div>

        {hasAnyLink ? (
          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-white/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:text-sm">
            {hasDocsUrl ? (
              <Link
                href={docsUrl}
                className="inline-flex w-fit items-center gap-2 text-white/90 transition hover:text-white"
                {...(docsUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <BookOpen size={18} />
                Documentazione
              </Link>
            ) : null}
            {hasDownloadUrl ? (
              <a
                href={downloadUrl}
                download={
                  downloadUrl.includes("/")
                    ? downloadUrl.slice(downloadUrl.lastIndexOf("/") + 1)
                    : downloadUrl
                }
                className="inline-flex w-fit items-center gap-2 text-white/90 transition hover:text-white"
              >
                <Download size={18} />
                Download
              </a>
            ) : null}
            {hasSourceUrl ? (
              <Link
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-white/90 transition hover:text-white"
              >
                <Github size={18} />
                GitHub
              </Link>
            ) : null}
            {hasCaseStudyUrl ? (
              <Link
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-white/90 transition hover:text-white"
              >
                <ExternalLink size={18} />
                Visita il sito
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
