import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { assets } from "@/data/contacts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://site-santos-assessoria-contabil.vercel.app"),
  title: "Santos Corrêa Contabilidade | Contabilidade em Imbituba - SC",
  description: "Contabilidade para MEI, Simples Nacional, Lucro Presumido e Lucro Real. Assessoria contábil, fiscal, tributária e trabalhista em Imbituba - SC.",
  icons: { icon: [{ url: assets.logo, type: "image/png" }] },
  openGraph: { title: "Santos Corrêa Contabilidade", description: "Contabilidade próxima para empresas que querem crescer. Imbituba - SC.", locale: "pt_BR", type: "website", images: [{ url: assets.logoBackground, width: 2159, height: 728, alt: "Santos Corrêa Contabilidade" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preconnect" href="https://api.fontshare.com" /><link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" /><link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet" /><link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap" rel="stylesheet" /></head><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}</body></html>;
}
