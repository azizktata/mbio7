// Craft Imports
import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import HeroImage from "@/public/hero.jpg";
import WoodWise from "@/public/woodwise.svg";
import Stats from "@/public/stats.jpg";
import Thumbnail from "@/public/video-thumbnail.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import CustomButton from "@/components/ui/customButton";
import { PuzzleIcon, Tags } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Nav from "@/components/nav/desktop-nav";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-poppins",
});
// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <div>
     
<section className="relative h-[93vh] w-full">
        <Image
          src={HeroImage}
          alt="mbio7 panel"
          fill
          priority
          className="object-cover w-full object-top"
        />
 
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
      </section>
        <Banner />
     

      <div className="bg-mbioPrimary">
        <Mbio7 />
        <About />
        <WhyUs />
        <FAQ />
      </div>
    
    </div>
  );
}

const HeroContent = {
  title: "mBio7, le panneau biosourcé à empreinte carbone négative.",
  description:
    "mBio7 est un panneau biosourcé fabriqué à partir de matériaux naturels tels que la paille de riz, le chanvre et la chaux. Il est conçu pour offrir une isolation thermique et acoustique optimale tout en étant respectueux de l'environnement.",
  cta: "En savoir plus",
  cta2: "Contactez-nous",
  image: HeroImage,
  banner: "Un produit breveté et développé par",
};

// This is just some example TSX
const Hero = () => {
  return (
    <main className="relative border-none h-[80vh] flex items-center justify-center text-center">
      
        <div className="absolute inset-0  z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white  text-4xl sm:text-5xl md:text-6xl font-semibold capitalize mb-1 text-center px-4 max-w-[65ch]">
            <Balancer>{HeroContent.title}</Balancer>
          </h1>
          <p className="text-white max-w-2xl text-center text-md sm:text-xl mb-6 px-4">
            <Balancer>{HeroContent.description}</Balancer>
          </p>
          <div className="flex gap-4">
            <CustomButton label={HeroContent.cta} href="#about" />
            <CustomButton label={HeroContent.cta2} href="#contact" inverted />
          </div>
        </div>
     
    </main>
  );
};

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-3 bg-mbioSecondary">
      <p className="text-center text-sm text-white font-medium">
        {HeroContent.banner}{" "}
      </p>
      <Image
        src={WoodWise}
        alt="Wood Wise"
        className="h-6"
      />
    </div>
  );
};

const MainContent = {
  title: "L’innovation mBio7",
  description:
    "Le bois moulé sous presse, dont est composé le panneau mBio7, est le seul procédé de construction permettant de bâtir avec un taux négatif en CO2.",
  tags: ["biosourcé", "écologique", "isolant", "durable"],
  image: Stats,
};

const Mbio7 = () => {
  return (
    <Section>

    <Container id="about" className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ">
      <div className=" w-full">
        <h2 className="text-3xl font-bold text-white mb-4">{MainContent.title}</h2>
        <p className="mb-4 text-mbioMutedForeground">
          {MainContent.description}
        </p>
        <div className="flex flex-wrap">

          {
            MainContent.tags.map((tag) => (
              <span key={tag} className="rounded-full text-mbioAccent border border-mbioAccent px-3 py-1 text-sm font-medium mr-2 mb-2 inline-block bg-white/10">
                {tag}
              </span>
          ))
        }
        </div>
      </div>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={MainContent.image}
          alt="Stats"
          className="object-cover rounded-lg"
          fill
        />
      </div>
    </Container>
    </Section>
  );
}

const aboutContent = {
  title: "Une solution pour tous, partout",
  description: "Le panneau nouvelle génération pour une construction durable. Issu de bois recyclé et de résidus forestiers, mBio7 est un panneau de construction unique.",
  details: [
    "Résistant au feu",
    "Hydrofuge",
    "Résistant aux termites",
    "Léger, modulaire, facile à poser",
    "Avec une empreinte carbone négative"
  ]
};

const About = () => {
  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-6 md:gap-12 ">
        <div className="not-prose relative h-auto flex overflow-hidden rounded-lg  ">
          <Image
            src={Thumbnail}
            alt="Mbio7"
            className="fill object-cover object-right"
            height={508}
            width={512}
          />
        </div>
        <div className="flex flex-col gap-6 py-8 relative">
          <h2 className="!my-0 font-semibold text-white text-4xl sm:text-5xl ">
            {aboutContent.title}
          </h2>
          <div
           className="text-mbioMutedForeground max-w-xl prose"
          >
            {aboutContent.description}
        
            <br />
            <ul className="list-disc list-inside text-mbioAccent marker:text-mbioAccent">
              {aboutContent.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
         

       
        </div>
      </Container>
    </Section>
  );
};

const WhyUsContent = [
  {
    title: "Écologique",
    description:
      "Fabriqué à partir de matériaux naturels et renouvelables, le panneau mBio7 contribue à la réduction de l'empreinte carbone des bâtiments.",
   
  },
  {
    title: "Isolation optimale",
    description:
      "Grâce à ses propriétés isolantes, le panneau mBio7 permet de réduire les pertes de chaleur en hiver et de maintenir la fraîcheur en été, améliorant ainsi le confort thermique des occupants.",
   
  },
  {
    title: "Durabilité",
    description:
      "Le panneau mBio7 est résistant aux intempéries, aux moisissures et aux insectes, assurant une longue durée de vie et une performance constante dans le temps.",
   
  },
  {
    title: "Facilité d'installation",
    description:
      "Léger et facile à manipuler, le panneau mBio7 peut être rapidement installé, réduisant ainsi les coûts de main-d'œuvre et le temps de construction.",
   
  }
]

const WhyUs = () => {
  return (
    <Section>
      <Container >
        <h2 className="mb-12 text-center font-semibold">
          <Balancer className="text-4xl sm:text-5xl  font-semibold text-white cols-span-full ">
            Pourquoi choisir mBio7 ?
          </Balancer>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          {WhyUsContent.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 bg-white/20 rounded-lg">
              <PuzzleIcon className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-mbioMutedForeground">{item.description}</p>
          </div>
        ))}
        </div>
      </Container>
      </Section>
  );
};

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Qu’est-ce que le panneau mBio7 ?",
    answer:
      "mBio7 est un panneau de construction innovant, fabriqué à plus de 90 % en bois recyclé. Il est léger, modulaire et conçu pour des constructions durables, économiques et rapides.",
  },
  {
    question: "Quelle est la performance environnementale du panneau ?",
    answer:
      "Chaque panneau présente un bilan carbone négatif de -7,66 kg CO₂-éq. Une maison de 120 m² en mBio7 permet d’éviter environ 3 tonnes de CO₂.",
  },
  {
    question: "Le panneau est-il résistant ?",
    answer:
      "Oui. Le mBio7 est résistant à l’eau, au feu, aux termites, au gel et aux séismes. C’est un matériau thermo-durcissable qui ne pourrit pas et ne craint pas l’humidité.",
  },
  {
    question: "Est-il conforme aux normes de construction ?",
    answer:
      "Oui. Les constructions en mBio7 respectent la norme RE 2020 si elles sont associées à un isolant adapté.",
  },
  {
    question: "Combien pèse un panneau ?",
    answer:
      "Un panneau mBio7 pèse environ 9 kg, ce qui facilite son transport et sa mise en œuvre.",
  },
  {
    question: "Peut-on construire une maison complète avec ce matériau ?",
    answer:
      "Oui. Par exemple, une maison test de 10 m² a été construite en 2017 à Sospel avec 160 panneaux (≈ 1 450 kg). Les panneaux s’assemblent facilement et permettent des projets de toute taille.",
  },
  {
    question: "Quelle est la capacité de production ?",
    answer:
      "L’usine pilote en Bulgarie peut produire environ 400 panneaux par jour.",
  },
  {
    question: "À qui s’adresse mBio7 ?",
    answer:
      "Le matériau est idéal pour les ONG (reconstruction d’urgence), les collectivités locales et les particuliers souhaitant des logements écologiques, modulables et économiques.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container className="grid md:grid-cols-2 gap-3">
        <h2 className="font-semibold text-white text-4xl sm:text-5xl ">
         FAQ – Questions fréquentes
        </h2>
 

        <div className="not-prose  flex flex-col gap-4 ">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-white text-lg">
                  <div className="flex items-center">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-mbioMutedForeground pl-4">
                  <Balancer>

                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                      >
                      Learn more 
                      {/* <ArrowUpRight className="ml-1" size="16" /> */}
                    </a>
                  )}
                  </Balancer>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
