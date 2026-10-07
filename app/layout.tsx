import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santos Corrêa Contabilidade | Contabilidade em Imbituba - SC",
  description: "Contabilidade para MEI, Simples Nacional, Lucro Presumido e Lucro Real. Assessoria contábil, fiscal, tributária e trabalhista em Imbituba - SC.",
  openGraph: {
    title: "Santos Corrêa Contabilidade",
    description: "Assessoria contábil, fiscal, tributária e trabalhista em Imbituba - SC.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&family=Livvic:ital,wght@0,400;0,500;0,600;1,500&family=Righteous&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
