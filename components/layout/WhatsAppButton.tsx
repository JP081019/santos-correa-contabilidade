"use client";
import { useEffect, useRef, useState } from "react";
import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function WhatsAppButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [obstructed, setObstructed] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let frame = 0;
    const targets = document.querySelectorAll("main p, main h1, main h2, main h3, main h4, main a, main button, main img, #primary-navigation");
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = linkRef.current?.getBoundingClientRect();
        if (!box) return;
        setObstructed(Array.from(targets).some(element => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && rect.left < box.right + 6 && rect.right > box.left - 6 && rect.top < box.bottom + 6 && rect.bottom > box.top - 6;
        }));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const hidden = footerVisible || obstructed;
  return <a ref={linkRef} className={`floating-whatsapp ${hidden ? "is-hidden" : ""}`} href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Santos Corrêa pelo WhatsApp" tabIndex={hidden ? -1 : 0} aria-hidden={hidden}><Icon name="whatsapp" /><span>Vamos conversar?</span></a>;
}
