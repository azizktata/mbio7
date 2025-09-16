// Craft Imports
import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import HeroImage from "@/public/hero-mbio.jpg";
import WoodWise from "@/public/woodwise.svg";
import Stats from "@/public/stats.png";
import Comparative from "@/public/comparaison.jpg";
import Label from "@/public/label.png";
import Thumbnail from "@/public/video-thumbnail.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import CustomButton from "@/components/ui/customButton";
import {
  ArrowRight,
  BadgeCheck,
  LeafyGreen,
  PlayIcon,
  PuzzleIcon,
  Recycle,
  ShieldCheck,
  Star,
  Tags,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Nav from "@/components/nav/desktop-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <div>
      <section className="relative h-[70vh] lg:h-[90vh] w-full">
        <Image
          src={HeroImage}
          alt="mbio7 panel"
          fill
          priority
          className="object-cover w-full object-center"
        />
        <div className="absolute inset-0 bg-[#084E4D78]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
      </section>
      <Banner />

      <div className="bg-mbioPrimary relative">
        <Mbio7 />
        <div className="absolute inset-y-20 left-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <About />
        <div className="absolute inset-y-50 right-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <Impact />
        <div className="absolute inset-y-100 left-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <WhyUs />
        <div className="absolute inset-y-150 right-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <ComparativeStudy />
        <div className="absolute inset-y-200 left-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <Blogs />
        <div className="absolute inset-y-250 right-0 w-1/2 bg-white/10 blur-[100px] h-[500px]" />
        <Reviews />
        <FAQ />
      </div>
    </div>
  );
}

const HeroContent = {
  title: "mBio7, le panneau biosourcé à empreinte carbone négative.",
  description:
    "MBio7 est un panneau biosourcé fabriqué à partir de matériaux naturels tels que résidus de bois, de fibres végétales, de bambou, de palmes, de noix de coco ou de nombreux autres produits biosourcés. Il est conçu pour offrir une isolation thermique et acoustique optimale tout en étant respectueux de l'environnement.",
  cta: "En savoir plus",
  cta2: "Contactez-nous",
  image: HeroImage,
  banner: "Un produit breveté et développé par",
};

// This is just some example TSX
const Hero = () => {
  return (
    <main className="relative border-none h-[60vh] lg:h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0  z-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-white  text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mb-1 text-center px-2 max-w-[65ch]">
          <Balancer>{HeroContent.title}</Balancer>
        </h1>
        <p className="text-white max-w-[75ch] text-center text-md sm:text-lg mb-6 px-4">
          <Balancer>{HeroContent.description}</Balancer>
        </p>
        <div className="flex gap-4">
          <CustomButton label={HeroContent.cta} href="/pages/fabrication" />
          <CustomButton label={HeroContent.cta2} href="#contact" inverted />
        </div>
      </div>
    </main>
  );
};

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-3 bg-mbioSecondary">
      <p className="text-center text-base sm:text-lg text-white ">
        {HeroContent.banner}{" "}
      </p>
      <Image src={WoodWise} alt="Wood Wise" className="h-6 sm:h-8 " />
    </div>
  );
};

const MainContent = {
  title: "L’innovation MBio7",
  description:
    "Le bois moulé sous presse, dont est composé le panneau MBio7, est le seul procédé de construction permettant de bâtir avec un taux négatif en CO2.",
  tags: ["biosourcé", "écologique", "isolant", "durable"],
  image: Stats,
};

const Mbio7 = () => {
  return (
    <Section className="!mb-0 !pb-0">
      <Container
        id="about"
        className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
      >
        <div className=" w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 lg:mb-8">
            {MainContent.title}
          </h2>
          <p className="mb-4 lg:mb-8 text-mbioMutedForeground">
            {MainContent.description}
          </p>
          <div className="flex flex-wrap">
            {MainContent.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full capitalize text-mbioAccent border border-mbioAccent px-4 py-2 text-xs font-medium mr-2 mb-2 inline-block bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-full h-52  md:h-96">
          <Image
            src={MainContent.image}
            alt="Stats"
            className="object-contain rounded-lg"
            fill
          />
        </div>
      </Container>
    </Section>
  );
};

const aboutContent = {
  title: "Une solution pour tous, partout",
  description:
    "Pensé pour des constructions durables, antisismiques, saines, résistantes au gel, économes, modulables — mBio7 permet une véritable autonomie :",
  details: [
    "Adapté aux ONG, collectivités, particuliers",
    "Permet l’auto-construction avec des outils simples (visseuse, scie, niveau)",
    "Aucun besoin en eau, aucun besoin technique avancé",
    "Convient à l’habitat d’urgence, économique, adaptable à toutes les situations",
  ],
};

const About = () => {
  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-6 lg:gap-16 ">
        <div className="not-prose relative h-64 md:h-96 flex overflow-hidden rounded-lg relative ">
          <Image
            src={Thumbnail}
            alt="Mbio7"
            className="object-cover object-right rounded-lg"
            fill
          />
          <div className="absolute inset-0  bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="https://www.youtube.com/watch?v=jUQu9_26Gdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="h-16 w-16 rounded-full bg-mbioQuaternary hover:bg-mbioTertiary p-0"
              >
                <PlayIcon className="h-8 w-8 fill-current text-white" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 relative">
          <div className="flex flex-col items-start gap-2">
            <div className=" ">
              <Image
                src={Label}
                alt="Stats"
                className="object-contain rounded-lg"
                width={100}
                height={100}
              />
            </div>
          
              <h2 className="!my-0 font-semibold text-white text-4xl sm:text-5xl ">
                {aboutContent.title}
              </h2>
            
          </div>
          <div className="text-mbioMutedForeground max-w-xl prose">
            {aboutContent.description}

            <br />
            <ul className=" text-mbioAccent marker:text-mbioAccent">
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

const chiffres = [
  { title: "matières recyclées, totalement recyclables", value: "95%+" },
  { title: "Kg de CO₂ économisés par panneau", value: "7,66" },
  { title: "Tonnes de CO₂ évité par maison de 120 m²", value: "3" },
];
const Impact = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-white text-3xl sm:text-5xl  mb-4 lg:mb-8 text-center">
          <Balancer>Approche durable & humaine</Balancer>
        </h2>
        <Balancer
          className={cn(
            "text-mbioMutedForeground text-base text-center mb-6  lg:mb-12"
          )}
        >
          Léger, modulaire et robuste, mBio7 est la solution éco-constructive
          qui allie rapidité de mise en œuvre, performance technique et respect
          de l’environnement.
        </Balancer>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-6">
          {chiffres.map((item) => (
            <div
              key={item.title}
              className="group  flex flex-col gap-6 items-center py-12 px-3 bg-card rounded-2xl border shadow-sm transition-background duration-300 hover:bg-gradient hover:text-white"
            >
              <h3 className="text-6xl font-semibold text-mbioTertiary group-hover:text-white">
                {item.value}
              </h3>
              <Balancer className="text-2xl font-semibold text-black group-hover:text-white text-center">
                {item.title}
              </Balancer>
            </div>
          ))}
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
  },
];

const WhyUs = () => {
  return (
    <Section>
      <Container>
        <h2 className="mb-8 lg:mb-16 text-center font-semibold">
          <Balancer className="text-4xl sm:text-5xl  font-semibold text-white cols-span-full ">
            Pourquoi choisir mBio7 ?
          </Balancer>
        </h2>
        <div className="grid md:grid-cols-2 gap-6  ">
          {WhyUsContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white/20 rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all"
            >
              {index === 0 && (
                <LeafyGreen className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 1 && (
                <Recycle className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 2 && (
                <ShieldCheck className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 3 && (
                <BadgeCheck className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-mbioMutedForeground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ComparativeStudy = () => {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-8 lg:mb-16">
          Étude comparative
        </h2>
        <div className="relative w-full h-auto">
          <Image
            src={Comparative}
            alt="Étude comparative"
            width={1200}
            height={800}
            className="rounded-lg"
          />
        </div>
      </Container>
    </Section>
  );
};

const blogs = [
  {
    date: "06 Mars 2019",
    title:
      "Grâce à ces panneaux en bois, il fabrique des maisons qui résistent à toutes conditions climatiques",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux mBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Construction",
  },
  {
    date: " 1er janvier 2019",
    title: "Libé des solutions : Le bois mis en demeure",
    description:
      "Parmi les inventeurs, il y a les grands rêveurs et les gens carrés. La maison écologique mBio7 est l’alliance des deux. Dominique Tallarida dans le rôle du Géo Trouvetou, Denis Mary dans celui du technicien. Ces habitants de Sospel (Alpes-Maritimes) ont créé des maisons en panneaux de bois recyclé.",
    link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Innovation",
  },
  {
    date: "14 Août 2018",
    title: "Une souscription lancée pour des maisons d’urgence",
    description:
      "Lauréats du concours Lépine, le Sospellois Dominique Tallarida et son ami Denis Mary s’apprêtent à commercialiser leur concept d’habitat humanitaire. Ils ont besoin d’un dernier coup de pouce",
    link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Construction",
  },
];

const Blogs = () => {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-8 lg:mb-16">
          Nos Actualités
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
interface BlogCardProps {
  blog: {
    date: string;
    title: string;
    description: string;
    image: string;
    category: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg  bg-white/10 transition-shadow cursor-pointer py-0 shadow-sm rounded-lg border-none">
      <CardHeader className="p-0 relative">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute bottom-5 right-0 m-4">
          {/* Blurred background element */}
          {/* <div className="absolute inset-0 bg-[#F7F7F71A] h-[93px] w-[77px]  backdrop-filter backdrop-blur-sm -z-10 rounded-lg"></div> */}

          {/* Content (date) */}
          {/* <div className="relative h-[93px] w-[77px] flex flex-col items-center justify-center p-2">
    <span className="text-white text-3xl font-light leading-none">{day}</span>
    <span className="text-white text-md uppercase font-light leading-none">{month}</span>
  </div> */}
        </div>
      </CardHeader>
      <CardContent className="mt-6">
        <span className="text-mbioAccent text-sm rounded-full py-1.5 px-3.5 border border-mbioAccent">
          {blog.category}
        </span>
        <Balancer className="text-white font-semibold text-xl py-4">
          {blog.title}
        </Balancer>
        <Balancer className="text-mbioMutedForeground text-sm">
          {blog.description}
        </Balancer>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-mbioAccent px-0">
          Lire la suite
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const reviews = [
  {
    name: "Anonyme",
    rating: 5,
    comment:
      "Les produits en bois moulé de WoodWise sont incroyables ! J'en suis totalement satisfait.",
  },
  {
    name: "Anonyme",
    rating: 5,
    comment:
      "WoodWise offre des produits en bois moulé de haute qualité. Je les recommande vivement !",
  },
];

const Reviews = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-white text-4xl sm:text-5xl  mb-8 lg:mb-16 text-center">
          Témoignages de nos clients
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    comment: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer shadow-sm rounded-2xl bg-white/15 border-none">
      {/* <CardHeader className="">
       
      </CardHeader> */}
      <CardContent className=" pt-6 pb-12 ">
        <p className="text-mbio leading-[1.4] text-sm pl-2 text-white">
          &quot;{review.comment}&quot;
        </p>
      </CardContent>
      <CardFooter className="bg-mbioSecondary rounded-2xl py-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-mbioPrimary text-white">
              {review.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h6 className="text-black text-lg font-semibold ">{review.name}</h6>
            {/* <p className="text-sm text-muted-foreground">{review.date}</p> */}

            <div className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 font-light fill-current text-mbioAccent "
                />
              ))}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
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
      "environ 400 panneaux par jour pour l'instant car nous sommes en phase d’extension.",
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
      <Container className="grid md:grid-cols-2 gap-6 lg:gap-4">
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
