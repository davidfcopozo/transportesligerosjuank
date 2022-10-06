import HeroImg from "../components/HeroImg";
import ContactHeroImg from "../components/ContactHeroImg";
import Services from "../components/Services";
import heroImg from "../assets/heroImg.jpg";
import contactHeroImg from "../assets/chico-furgoneta.jpg";

export default function Home() {
  return (
    <div>
      <HeroImg
        img={heroImg.src}
        imgAlt="Caja siendo embalada"
        title="Mudanzas en Zaragoza"
        btnValue="Contáctanos"
      />
      <Services />

      <ContactHeroImg
        img={contactHeroImg.src}
        imgAlt="Chico dando servicio de mudanza"
        title="¿Necesitas ayuda con tu mudanza?"
        btnValue="Contáctanos"
      />
    </div>
  );
}
