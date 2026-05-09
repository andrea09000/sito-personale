import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savoldelliandrea.me"),
  title: "Andrea Savoldelli | Studente & sviluppatore web",
  description:
    "Portfolio di Andrea Savoldelli, 17 anni: studente di Informatica e Telecomunicazioni all'Istituto Grazio Cossali, appassionato di sviluppo web e programmazione.",
  keywords: [
    "Andrea Savoldelli",
    "Grazio Cossali",
    "Informatica e Telecomunicazioni",
    "Sviluppo web",
    "Programmazione",
    "Portfolio",
  ],
  authors: [{ name: "Andrea Savoldelli" }],
  creator: "Andrea Savoldelli",
  publisher: "Andrea Savoldelli",
  robots: "index, follow",
  openGraph: {
    title: "Andrea Savoldelli | Studente & sviluppatore web",
    description:
      "Studente di Informatica e Telecomunicazioni al Grazio Cossali. Progetti web, Spottly, Istant e altro.",
    url: "https://savoldelliandrea.me",
    siteName: "Andrea Savoldelli Portfolio",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
