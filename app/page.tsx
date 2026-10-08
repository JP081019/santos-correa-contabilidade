import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Reveal from "@/components/ui/Reveal";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TaxRegimes from "@/components/sections/TaxRegimes";
import BusinessStages from "@/components/sections/BusinessStages";
import Differentials from "@/components/sections/Differentials";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return <><Header /><main id="conteudo"><Hero /><Services /><TaxRegimes /><BusinessStages /><Differentials /><About /><ContactCTA /></main><Footer /><WhatsAppButton /><Reveal /></>;
}
