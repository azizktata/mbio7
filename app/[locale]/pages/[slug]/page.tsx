import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/banner-3.jpg";
import banner from "@/public/hero.jpg";
import HeroImage from "@/public/hero-mbio.jpg";
import thumbnail from "@/public/thumbnail-2.png";
import main from "@/public/utilisation.png";
import experience1 from "@/public/mBio7-C-1.png";
import experience2 from "@/public/mBio7-B.png";
import experience3 from "@/public/fire-test.png";
import experience4 from "@/public/Isolation-A.png";
import fabrication1 from "@/public/fabrication-1.png";
import fabrication2 from "@/public/fabrication-2.png";
import fabrication3 from "@/public/fabrication-3.png";
// import banner from "@/public/banner-2.jpg";
import Balancer from "react-wrap-balancer";
import Nav from "@/components/nav/desktop-nav";
import { PlayIcon } from "lucide-react";
// Revalidate pages every hour
export const revalidate = 3600;

// export async function generateStaticParams() {
//   const pages = await getAllPages();

//   return pages.map((page) => ({
//     slug: page.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const page = await getPageBySlug(slug);

//   if (!page) {
//     return {};
//   }

//   const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
//   ogUrl.searchParams.append("title", page.title.rendered);
//   // Strip HTML tags for description and limit length
//   const description = page.excerpt?.rendered
//     ? page.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
//     : page.content.rendered
//         .replace(/<[^>]*>/g, "")
//         .trim()
//         .slice(0, 200) + "...";
//   ogUrl.searchParams.append("description", description);

//   return {
//     title: page.title.rendered,
//     description: description,
//     openGraph: {
//       title: page.title.rendered,
//       description: description,
//       type: "article",
//       url: `${siteConfig.site_domain}/pages/${page.slug}`,
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: page.title.rendered,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: page.title.rendered,
//       description: description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const page = await getPageBySlug(slug);

  return (
    <div className="min-h-screen w-full bg-mbioPrimary">
      <Nav />
      <div id="banner" className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={banner}
            alt={`banner`}
            className="object-cover w-full object-top"
            fill
          />
          <div className="absolute inset-0 bg-[#084E4D78]/50 "></div>
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white  text-4xl sm:text-5xl font-semibold capitalize mb-2">
            <Balancer>{decodeURIComponent(slug.replace(/-/g, " "))}</Balancer>
          </h1>
          <p
            className={
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base s"
            }
          >
            <Link href={"/"}>Accueil</Link> /{" "}
            <Balancer>{decodeURIComponent(slug.replace(/-/g, " "))}</Balancer>
          </p>
        </div>
      </div>
      {decodeURIComponent(slug) === "fabrication" && (
        <>
        {fabricationContent.map((item, index) => (
          <Section key={index} >
           
           {
            index % 2 === 0 && (
              <FeatureInverted
                image={item.image}
                title={item.title}
                description={item.description}
                specials={item.specials}
              />
            )}
            {index % 2 === 1 && (
              <Feature
                image={item.image}
                title={item.title}
                description={item.description}
                specials={item.specials}
              />
            )}
          </Section>
        ))}
         
        </>
      )}
       {decodeURIComponent(slug) === "utilisation" && (
        <>
          <Main />
          <Hero />
      
        </>
      )}
       {decodeURIComponent(slug) === "experiences" && (
        <>
          <ExperienceHero />
            {experienceContent.map((item, index) => (
          <Section key={index} >
           
           {
            index % 2 === 0 && (
              <FeatureInverted
                image={item.image}
                title={item.title}
                description={item.description}
                specials={item.specials}
                cta={item.cta}
              />
            )}
            {index % 2 === 1 && (
              <Feature
                image={item.image}
                title={item.title}
                description={item.description}
                specials={item.specials}
                cta={item.cta}
              />
            )}
          </Section>
        ))}
         
      
        </>
      )}
    </div>
  );
}

const fabricationContent = [
  {
    title: "La fabrication de nos panneaux mBio7",
    description:
      "Fruit de plus de 10 années de recherche et développement, la mise au point des panneaux mBio7 s’appuie sur un savoir-faire industriel éprouvé depuis plus de 30 ans dans la production de palettes en bois moulé. Ce procédé unique a permis de créer un panneau de construction innovant aux performances techniques remarquables.",
    specials: [
      "Procédé industriel éprouvé et fiabilisé",
      "Plus de 10 ans de recherche et d’innovation",
      "Caractéristiques techniques inédites"
    ],
    image: fabrication1,
  },
  {
    title: "L'origine de la matière",
    description:
      "Nos panneaux MBio7 sont constitués à plus de 95 % de fibres de bois et 5% de résine thermodurcissable sans formaldéhyde.",
    specials: [
      "Utilisation de bois recyclé (95 %)",
      "Matériau naturel et biosourcé",
      "Durabilité et respect de l’environnement"
    ],
    image: fabrication3,
  },
  {
    title: "La mise en forme et la cuisson",
    description:
      "La matière est ensuite placée dans une presse équipée d’un moule mBio7. Une force de plus de 900 tonnes combinée à une cuisson à 170°C assure le thermo-durcissement du composite. Le panneau ressort automatiquement du moule, solide et prêt à l’emploi après refroidissement.",
    specials: [
      "Pression de plus de 900 tonnes",
      "Thermo-durcissement à 170°C",
      "Panneaux prêts à l’usage immédiatement"
    ],
    image: fabrication2,
  },
];

interface FeatureProps {
  image: any;
  title: string;
  description: string;
  specials?: string[];
  cta?: string;
}


const Feature = ({ image, title, description, specials, cta }: FeatureProps) => {
  return (
    <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
      <div className="not-prose relative flex h-96 overflow-hidden rounded-lg ">
        <Image
          src={image}
          alt="placeholder"
          className="fill object-cover object-left"
        />

       
      </div>
      <div className="flex flex-col gap-6 py-8 text-white">
        <h2 className="!my-0 text-white text-4xl sm:text-5xl">{title}</h2>
        <Balancer>

        <p className="font-light leading-[1.4] text-mbioMutedForeground">
          {description}
        </p>
        </Balancer>

        {
          specials &&
         <ul className=" list-disc text-mbioAccent marker:text-mbioAccent pl-5">
              {specials.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
        }

        {
          cta &&
        <div className="not-prose flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href={cta} target="_blank" rel="noopener noreferrer">Voir la vidéo</Link>
          </Button>
         
        </div> 
        }
      </div>
    </Container>
  );
};

const FeatureInverted = ({ image, title, description, specials, cta }: FeatureProps) => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h2 className="!my-0 text-white text-3xl sm:text-5xl">{title}</h2>

      <Balancer>

          <p className="font-light leading-[1.4] text-mbioMutedForeground">
            {description}
          </p>
      </Balancer>
          
           {
          specials &&
         <ul className=" list-disc text-mbioAccent marker:text-mbioAccent pl-5">
              {specials.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
        }
         
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg ">
          <Image src={image} alt="placeholder" className="fill object-cover" />
           {
          cta &&
           <div className="absolute inset-0 flex items-center justify-center">
          <Link href="https://www.youtube.com/watch?v=xmI_naeRfdw" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="ghost"
            className="h-16 w-16 rounded-full bg-mbioQuaternary hover:bg-mbioTertiary p-0"
          >
            <PlayIcon className="h-8 w-8 fill-current text-white" />
          </Button>
          </Link>
        </div>
        }
        </div>
      </Container>
    </Section>
  );
};


const utilisationHero = {
  title: "Comment utiliser les panneaux mBio7 ?",
  description:
    "Les panneaux mBio7 sont polyvalents et peuvent être utilisés dans divers types de projets de construction et de rénovation. Voici quelques-unes des principales utilisations des panneaux mBio7 :",
  image: thumbnail,
  details: [
    "Construction neuve",
    "Rénovation",
    "Aménagement intérieur",
    'l’isolation extérieure et intérieure de bâtiments existants',
    'l’utilisation en coffrage perdu (piscines ou murs de soutènement)',
    'la construction de murs porteurs et non porteurs',
    'la création de cloisons intérieures',
    'et bien plus encore..'
   
    
  ],
}

const Hero = () => {
  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-6 md:gap-16 ">
        <div className="not-prose relative h-full flex overflow-hidden rounded-lg relative ">
          <Image
            src={utilisationHero.image}
            alt="Mbio7"
             className="object-cover object-bottom rounded-lg w-full h-full"
            height={600}
            width={800}
/>
        <div className="absolute inset-0  bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href="https://www.youtube.com/watch?v=vjsfSNBXmXM" target="_blank" rel="noopener noreferrer">
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
          <h2 className="!my-0 font-semibold text-white text-3xl sm:text-5xl ">
            {utilisationHero.title}
          </h2>
          <div
           className="text-mbioMutedForeground max-w-xl prose"
          >
            {utilisationHero.description}
        
            <br />
            <ul className=" text-mbioAccent marker:text-mbioAccent">
              {utilisationHero.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
         

       
        </div>
      </Container>
    </Section>
  );
};

const MainContent = {
  title: "Première Maison écologique en panneaux de bois moulé en France",
  description:
    "En 2017 une première maison test est réalisée à Sospel avec l’aide de Jérémy, jeune ingénieur en stage de l’Institut de Technologie ESTIA. Il s’agit bien sûr d’un bâtiment de petite taille en raison du nombre limité de prototypes, mais mBio7 permet toute taille de construction. Cette structure est parfaitement intacte à ce jour, malgré les années et les conditions rudes de la montagne, isolation parfaite et pas une seule fissure malgré l’absence de fondations.",
  dimensions: [
    "Longueur : 3.82 m",
    "Largeur : 2.90 m",
    "Superficie : 10 m²",
    'Hauteur : 2.31 m',
    'Toit en mBio7: 60 panneaux',
    'Nombre de panneaux: 160',
    'Poids approximatif:  1 450 kg',
    'Sol en OSB sur chevrons',
    'Fenêtres PVC',
    'Enduit rustique sur treillis agrafé'
  ],
  image: main,
};

const Main = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <div className="not-prose relative flex h-auto w-full overflow-hidden rounded-lg ">
          <Image
            src={MainContent.image}
            alt="main"
            className="fill object-cover"
          />
        </div>
        <h3 className="my-2 mt-8 text-white text-3xl sm:text-5xl font-semibold">
          <Balancer>{MainContent.title}</Balancer>
        </h3>
        <p className="text-mbioMutedForeground leading-[1.6] my-6">
          <Balancer>
           En 2017 une première maison test est réalisée à Sospel avec l’aide de Jérémy, jeune ingénieur en stage de l’Institut de Technologie ESTIA.
           Il s’agit bien sûr d’un bâtiment de petite taille en raison du nombre limité de prototypes, mais mBio7 permet toute taille de construction.
           Cette structure est parfaitement intacte à ce jour, malgré les années et les conditions rudes de la montagne, isolation parfaite et pas une seule fissure malgré l’absence de fondations.
          </Balancer>
        </p>
        <div className="flex flex-wrap">

          {
            MainContent.dimensions.map((dimension) => (
              <span key={dimension} className="rounded-full capitalize text-mbioAccent border border-mbioAccent px-4 py-2 text-xs font-medium mr-2 mb-2 inline-block bg-white/5">
                {dimension}
              </span>
          ))
        }
        </div>
      </Container>
    </Section>
  );
};




const experienceContent = [

  {
    title: "SANITAIRE",
    description:
      "De par sa conception c’est un produit sain, non absorbant donc sans humidité et sans possibilité d’intégration de moisissures. Associé à des matériaux sains, votre construction gardera, avec le temps, sa douceur de vivre.",
    image: experience2,
    specials: [
      "Produit sain et non absorbant",
      "Résistant à l'humidité",
      "Prévention des moisissures"
    ],
  },
  {
    title: "SECURITE STRUCTURELLE",
    description:
      "Contrairement aux constructions traditionnelles en briques, le bois moulé étant un produit non sécable (qui ne ce fissure pas), votre mur en mBio7 ne peut se fissurer et grâce à sa technique d’assemblage, apporte la souplesse nécessaire pour supporter les mouvements de terrain. Un assemblage de panneaux mBio7 dans les règles de l’art facilite la réalisation d’habitations antisismiques.",
    image: experience2,
    specials: [
      "Produit non sécable (ne se fissure pas)",
      "Souplesse pour supporter les mouvements de terrain",
      "Facilite la réalisation d'habitations antisismiques"
    ],
  },
  {
    title: "SECURITE INCENDIE",
    description:
      "Associé à des matériaux classe M1, l’absence d’air à l’intérieure des panneaux mBio7 en fait un produit excessivement difficile à bruler et impossible à s’auto consumer.",
    image: experience3,
     cta: "https://www.youtube.com/watch?v=xmI_naeRfdw",
     specials: [
       "Absence d'air à l'intérieur des panneaux",
       "Difficulté à brûler",
       "Impossible à s'auto-consumer"
     ]
  },
  {
    title: "ISOLATION THERMIQUE",
    description:
      "Le bois moulé est un excellent isolant naturel. Sa structure alvéolaire lui confère une résistance thermique élevée, contribuant ainsi à une meilleure efficacité énergétique des bâtiments.",
    image: experience4,
    specials: [
      "Excellent isolant naturel",
      "Résistance thermique élevée",
      "Efficacité énergétique améliorée"
    ]
  },
];

const experienceHero =   {
    title: "Un petit chez soi vaut mieux qu’un grand chez les autres",
    description:
      "Un chez soi, tout simplement, grand ou petit, mais qui protège votre famille et vous permets de faire des économies tout en respectant la nature. mBio7 permet tout cela et bien plus encore",
    image: experience1,
   
  }
const ExperienceHero = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <h3 className="text-white text-4xl sm:text-5xl mb-6">
          <Balancer>

          {experienceHero.title}
          </Balancer>
          </h3>
        <p className="text-mbioMutedForeground mb-6" >
          <Balancer>
            {experienceHero.description}
          </Balancer>
        </p>
        {/* <div className="not-prose my-8 flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Learn More {"->"}</Link>
          </Button>
        </div> */}
        <div className="not-prose relative flex h-auto overflow-hidden rounded-lg lg:ml-auto">
          <Image
            src={experienceHero.image}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

