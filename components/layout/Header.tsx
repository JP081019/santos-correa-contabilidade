"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets, navigation } from "@/data/contacts";
import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header ref={headerRef} className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="Santos Corrêa Contabilidade — início" onClick={() => setOpen(false)}>
        <Image src={assets.logo} alt="Santos Corrêa Contabilidade" width={2158} height={729} priority sizes="(max-width: 600px) 185px, 235px" />
      </a>
      <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "x-lg" : "list"} /></button>
      <nav id="primary-navigation" className={`navigation ${open ? "is-open" : ""}`} aria-label="Navegação principal">
        {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="button button-gold header-cta" href={whatsapp()} target="_blank" rel="noopener noreferrer">Fale com nossa equipe <Icon name="arrow-up-right" /></a>
      </nav>
    </div>
  </header>;
}
