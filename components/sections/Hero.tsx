import Image from "next/image";
import { assets } from "@/data/contacts";
import { taxRegimes } from "@/data/taxRegimes";
import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return <section className="hero" id="inicio">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">Próximos de você. Preparados para o seu negócio.</p>
        <h1 className="hero-enter">Contabilidade que acompanha o crescimento da sua empresa.</h1>
        <p className="hero-description hero-enter">Mais do que cuidar de números e obrigações, a Santos Corrêa Contabilidade trabalha lado a lado com empresários e empreendedores, oferecendo segurança, orientação e suporte para uma gestão mais tranquila e eficiente.</p>
        <div className="hero-actions hero-enter"><a className="button" href={whatsapp()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />Falar com nossa equipe<Icon name="arrow-up-right" /></a><a className="text-link" href="#servicos">Conhecer nossos serviços<Icon name="arrow-down" /></a></div>
      </div>
      <aside className="hero-aside hero-enter" aria-label="Nossa atuação">
        <div className="hero-brand-panel"><span className="fine-label">Santos Corrêa Contabilidade</span><Image src={assets.logo} width={2158} height={729} alt="Logo oficial Santos Corrêa Contabilidade" sizes="(max-width: 900px) 75vw, 350px" priority /><p>Conhecimento técnico.<br />Uma relação de confiança.</p><span className="brand-panel-location"><Icon name="geo-alt" /> Imbituba, Santa Catarina</span></div>
        <p className="hero-complement">Atendemos empresas de diferentes portes e segmentos, oferecendo soluções contábeis personalizadas para cada fase do negócio.</p>
      </aside>
    </div>
    <div className="container hero-bottom"><span>Acompanhamento para cada realidade</span><div>{taxRegimes.map(regime => <a href="#regimes" key={regime.id}>{regime.label}</a>)}</div><a className="hero-scroll" href="#servicos" aria-label="Ir para nossos serviços"><Icon name="arrow-down" /></a></div>
  </section>;
}
