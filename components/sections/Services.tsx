import { services } from "@/data/services";
import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function Services() {
  return <section className="section services" id="servicos"><div className="container">
    <div className="section-heading" data-reveal><div><p className="eyebrow">Nossos serviços</p><h2>Soluções completas para sua empresa.</h2></div><p>Da organização das rotinas às decisões importantes, uma assessoria que entende a realidade do seu negócio.</p></div>
    <div className="services-grid">{services.map((service, index) => <article className="service" key={service.title} data-reveal style={{ "--delay": `${index % 2 * 65}ms` } as React.CSSProperties}>
      <div className="service-heading"><Icon name={service.icon} /><h3>{service.title}</h3></div><p>{service.text}</p><a className="service-link" href={whatsapp(`Olá! Vim pelo site da Santos Corrêa e gostaria de saber mais sobre ${service.title}.`)} target="_blank" rel="noopener noreferrer">Conversar sobre este serviço<Icon name="arrow-up-right" /></a>
    </article>)}</div>
  </div></section>;
}
