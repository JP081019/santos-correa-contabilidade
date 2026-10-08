import { whatsapp } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

const stages = [
  { title: "Está começando?", text: "Ajudamos na abertura e organização do seu negócio.", link: "Quero abrir minha empresa", message: "Olá! Vim pelo site da Santos Corrêa e gostaria de orientação para abrir minha empresa." },
  { title: "Já possui uma empresa?", text: "Assumimos e acompanhamos toda a rotina contábil, fiscal e trabalhista." },
  { title: "Sua empresa está crescendo?", text: "Orientamos nas mudanças de enquadramento e nas novas necessidades contábeis e tributárias." },
  { title: "Quer trocar de contabilidade?", text: "Nossa equipe orienta sobre o processo de transferência e cuida dos procedimentos necessários para que a mudança seja realizada com segurança.", link: "Quero trocar de contabilidade", message: "Olá! Vim pelo site da Santos Corrêa e gostaria de informações sobre a transferência da minha contabilidade." },
];
export default function BusinessStages() {
  return <section className="section stages"><div className="container"><div className="section-heading" data-reveal><div><p className="eyebrow">Seu negócio, em movimento</p><h2>Contabilidade para cada fase da sua empresa.</h2></div><p>Atendemos desde quem está dando os primeiros passos no empreendedorismo até empresas que já possuem operações mais estruturadas.</p></div><ol className="stages-list">{stages.map((stage, index) => <li key={stage.title} data-reveal><span className="stage-number">0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p>{stage.link && <a className="text-link" href={whatsapp(stage.message)} target="_blank" rel="noopener noreferrer">{stage.link}<Icon name="arrow-up-right" /></a>}</li>)}</ol></div></section>;
}
