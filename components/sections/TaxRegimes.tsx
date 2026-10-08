"use client";
import { useRef, useState } from "react";
import { taxRegimes } from "@/data/taxRegimes";
import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function TaxRegimes() {
  const [active, setActive] = useState<string | null>(taxRegimes[0].id);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return <section className="section tax-regimes" id="regimes"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Regimes tributários</p><h2>Uma contabilidade preparada para cada realidade.</h2></div><p>Atendemos os principais regimes tributários, oferecendo acompanhamento adequado às necessidades de cada empresa.</p></div>
    <div className="regime-list">{taxRegimes.map((regime, index) => <div className="regime-item" key={regime.id}>
      <h3 className="regime-choice" style={{ gridRow: index + 1 }}><button ref={element => { buttons.current[index] = element; }} type="button" id={`regime-${regime.id}`} aria-expanded={active === regime.id} aria-controls={`content-${regime.id}`} onClick={() => setActive(active === regime.id ? null : regime.id)} onKeyDown={event => {
        let target: number | undefined;
        if (event.key === "ArrowDown") target = (index + 1) % taxRegimes.length;
        if (event.key === "ArrowUp") target = (index + taxRegimes.length - 1) % taxRegimes.length;
        if (event.key === "Home") target = 0;
        if (event.key === "End") target = taxRegimes.length - 1;
        if (target !== undefined) { event.preventDefault(); buttons.current[target]?.focus(); }
      }}><span><span className="regime-name">{regime.label}</span><span className="regime-caption">{regime.caption}</span></span><Icon name={active === regime.id ? "dash" : "plus"} /></button></h3>
      <div className="regime-content" id={`content-${regime.id}`} role="region" aria-labelledby={`regime-${regime.id}`} hidden={active !== regime.id}>
        <p className="regime-tag">{regime.label}</p><h4>{regime.title}</h4>{regime.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="regime-highlight">{regime.highlight}</p><a className="text-link" href={whatsapp(`Olá! Vim pelo site da Santos Corrêa e gostaria de orientação sobre ${regime.label}.`)} target="_blank" rel="noopener noreferrer">Conversar com nossa equipe<Icon name="arrow-up-right" /></a>
      </div>
    </div>)}</div>
  </div></section>;
}
