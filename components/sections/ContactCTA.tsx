import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function ContactCTA() {
  return <section className="section contact-cta" id="contato"><div className="container contact-cta-inner" data-reveal><p className="eyebrow">O próximo passo começa com uma conversa</p><h2>Precisa de uma contabilidade para sua empresa?</h2><p>Se você está abrindo uma empresa, precisa regularizar seu negócio, deseja trocar de contador ou procura uma assessoria mais próxima, converse com a nossa equipe.</p><div className="cta-regimes"><span>MEI</span><span>Simples Nacional</span><span>Lucro Presumido</span><span>Lucro Real</span></div><a className="button button-gold" href={whatsapp()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />Conversar com a Santos Corrêa<Icon name="arrow-up-right" /></a></div></section>;
}
