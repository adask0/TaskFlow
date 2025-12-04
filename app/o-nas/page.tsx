import HeroSection from "@/components/about-us/HeroSection";
import AboutUsPng from "@/public/about-us/AboutUs.png";
import FancyImgPng from "@/public/about-us/FancyImg.png";
import GarbagesPng from "@/public/about-us/Garbages.png";

type HeroItem = {
  id: number;
  subtitle: string;
  title: string;
  cta: string;
  description: string;
  img: StaticImageData;
};

const HeroParams: HeroItem[] = [
  {
    id: 1,
    subtitle: "TaskFlow: Myślimy jak Ty",
    title: "Wspieramy małe zespoły w realizacji ich wielkich celów.",
    cta: "Znamy to z autopsji – za każdą dobrą zmianą stoi mały, zmotywowany zespół.",
    description:
      "TaskFlow to projekt inżynierski, stworzony, by wyeliminować opór i komplikacje typowe dla dużych narzędzi. Nasz produkt jest idealnie skrojony pod startupy i małe zespoły, które potrzebują zorganizować swoje nieliczne, ale kluczowe zadania.",
    img: AboutUsPng,
  },
  {
    id: 2,
    subtitle: "TaskFlow rośnie razem z Tobą.",
    title: "Projekt inżynierski, który stale się doskonali.",
    cta: "Napisz do twórcy",
    description:
      "Nasza misja nie kończy się na wdrożeniu. Choć TaskFlow jest minimalistyczny, zależy nam na tym, by stawał się coraz doskonalszy w swojej prostocie. Jesteśmy otwarci na feedback od małych zespołów – w końcu to Wy wiecie najlepiej, co jest najważniejsze w codziennej pracy. Opowiedz nam o swoich potrzebach!",
    img: FancyImgPng,
  },
  {
    id: 3,
    subtitle: "Koniec z korporacyjnym balastem.",
    title: "TaskFlow wyczyścił system. Zostawił tylko to, co działa.",
    cta: "Zobacz, jak to działa",
    description:
      "Zwykłe narzędzia projektowe są projektowane dla tysięcy użytkowników i setek funkcji. W rezultacie tracisz czas na szukanie, konfigurowanie i klikanie. My, jako inżynierowie, usunęliśmy ten opór. TaskFlow to prosta, przejrzysta platforma, której nie musisz się uczyć. Po prostu działasz.",
    img: GarbagesPng,
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-[4rem] max-w-[1200px] mx-auto">
      <HeroSection HeroParams={HeroParams[0]} />
      <HeroSection HeroParams={HeroParams[1]} />
      <HeroSection HeroParams={HeroParams[2]} />
    </div>
  );
}
