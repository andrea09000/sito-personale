import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Savo.h — Libreria C | Andrea Savoldelli",
  description:
    "Documentazione delle funzioni della libreria personale Savo.h: matematica, array, matrici, stringhe e figure geometriche.",
};

type FnItem = { name: string; desc: string };

const sections: { title: string; items: FnItem[] }[] = [
  {
    title: "Matematica base",
    items: [
      { name: "somma", desc: "Somma di due interi." },
      { name: "sottrazione", desc: "Differenza tra due interi." },
      { name: "moltiplicazione", desc: "Prodotto di due interi." },
      { name: "divisione", desc: "Quoziente reale; gestisce divisione per zero." },
      { name: "percentuale", desc: "Calcola la percentuale x di n." },
      { name: "media", desc: "Media aritmetica di due numeri." },
      { name: "numero_pari", desc: "Vero se n è pari." },
      { name: "numero_dispari", desc: "Vero se n è dispari." },
      { name: "massimo2", desc: "Il maggiore tra due interi." },
      { name: "minimo2", desc: "Il minore tra due interi." },
    ],
  },
  {
    title: "Array",
    items: [
      { name: "stampa_array", desc: "Stampa gli elementi in formato [a, b, …]." },
      { name: "massimo", desc: "Valore massimo in un array di interi." },
      { name: "minimo", desc: "Valore minimo in un array di interi." },
      { name: "somma_array", desc: "Somma di tutti gli elementi." },
      { name: "media_array", desc: "Media aritmetica degli elementi." },
      { name: "inverti_array", desc: "Inverte l’ordine degli elementi sul posto." },
      { name: "cerca", desc: "Indice della prima occorrenza di x, altrimenti -1." },
      { name: "conta_occorrenze", desc: "Quante volte compare x nell’array." },
    ],
  },
  {
    title: "Matrici",
    items: [
      { name: "input_matrice", desc: "Lettura da tastiera di una matrice intera." },
      { name: "conta_pari_matrice", desc: "Conta gli elementi pari." },
      { name: "conta_dispari_matrice", desc: "Conta gli elementi dispari." },
      { name: "stampa_matrice", desc: "Stampa la matrice allineata in colonne." },
      { name: "diagonaleprincipale", desc: "Somma degli elementi sulla diagonale principale." },
      { name: "antidiagonale", desc: "Somma degli elementi sull’antidiagonale." },
      { name: "somma_cornice", desc: "Somma degli elementi sul bordo (cornice)." },
      { name: "somma_interni", desc: "Somma degli elementi non sul bordo." },
    ],
  },
  {
    title: "Stringhe",
    items: [
      { name: "maiuscolo", desc: "Converte in maiuscolo sul posto." },
      { name: "minuscolo", desc: "Converte in minuscolo sul posto." },
      { name: "conta_vocali", desc: "Numero di vocali (ita, case-insensitive)." },
      { name: "conta_consonanti", desc: "Consonanti alfabetiche (escluso spazi/simboli)." },
      { name: "conta_parole", desc: "Parole separate da spazi." },
      { name: "inverti_stringa", desc: "Inverte i caratteri sul posto." },
      { name: "e_palindroma", desc: "1 se palindroma (ignora maiuscole)." },
      { name: "conta_char", desc: "Occorrenze del carattere c." },
      { name: "e_numero", desc: "1 se la stringa è solo cifre." },
      { name: "parola_piu_corta", desc: "Copia nella stringa risultato la parola più corta." },
    ],
  },
  {
    title: "Figure geometriche",
    items: [
      { name: "area_rettangolo", desc: "Area base × altezza." },
      { name: "perimetro_rettangolo", desc: "Perimetro 2×(b+h)." },
      { name: "area_triangolo", desc: "Area (base×altezza)/2." },
      { name: "area_cerchio", desc: "Area con π ≈ 3.14." },
      { name: "circonferenza", desc: "Lunghezza con π ≈ 3.14." },
    ],
  },
];

export default function SavoDocsPage() {
  return (
    <div className="min-h-screen bg-[#000100] px-5 py-12 text-zinc-100 md:px-10 md:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          <Link href="/#projects" className="text-zinc-400 transition hover:text-white">
            ← Progetti
          </Link>
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Savo.h</h1>
        <p className="mb-10 text-lg leading-relaxed text-zinc-400">
          Libreria personale in C: raccolta di funzioni per matematica di base, array, matrici,
          stringhe e calcoli geometrici. Il file è un singolo header con implementazioni inline —
          includi <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">savo.h</code> nel
          tuo progetto e compila con le librerie standard (stdio, stdlib, string, ctype, math).
        </p>
        <p className="mb-12 text-sm text-zinc-500">
          <a
            href="/downloads/savo.h"
            download="savo.h"
            className="font-semibold text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition hover:text-white"
          >
            Scarica savo.h
          </a>
          <span className="mx-2 text-zinc-600">·</span>
          Macro <code className="font-mono text-zinc-400">MAX</code> = 100 per le dimensioni delle matrici.
        </p>

        <div className="flex flex-col gap-14">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-5 border-b border-white/10 pb-2 text-xl font-semibold text-white md:text-2xl">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((fn) => (
                  <li key={fn.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                    <code className="shrink-0 font-mono text-sm text-emerald-400/90">{fn.name}()</code>
                    <span className="text-sm leading-relaxed text-zinc-400">{fn.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-xs leading-relaxed text-zinc-500">
          <p>
            Contenuto documentato a partire dal file <strong className="text-zinc-400">savo.h</strong>.
            Verifica licenza e uso nel sorgente scaricato.
          </p>
        </footer>
      </div>
    </div>
  );
}
