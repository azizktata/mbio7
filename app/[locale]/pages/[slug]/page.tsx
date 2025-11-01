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
// import banner from "@/public/hero.jpg";
import banner from "@/public/hero-bg.png";
// import banner from "@/public/hero.jpg";
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

import montage1 from "@/public/mBio7-montage01.jpg";
import montage2 from "@/public/mBio7-montage02.jpg";
import montage3 from "@/public/mBio7-montage03.jpg";
import montage4 from "@/public/mBio7-montage04.jpg";
import montage5 from "@/public/mBio7-montage05.jpg";
import montage6 from "@/public/mBio7-montage06.jpg";
import montage7 from "@/public/mBio7-montage07.jpg";
import montage8 from "@/public/mBio7-montage08.jpg";
import montage11 from "@/public/mBio7-montage11.jpg";
import montage12 from "@/public/mBio7-montage12.jpg";


// import banner from "@/public/banner-2.jpg";
import Balancer from "react-wrap-balancer";
import Nav from "@/components/nav/desktop-nav";
import { PlayIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import CarouselV1 from "@/components/carousel-v1";
import CarouselV2 from "@/components/carousel-v2";
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
  params: Promise<{ slug: string, locale: string }>;
}) {
  // const page = await getPageBySlug(slug);
 const { slug, locale } = await params;
  
  const handleTranslateTitle = (slug: string) => {
    const translationsToEn: Record<string, string> = {
      "fabrication": "manufacture",
      "utilisations": "how to use",
      "expérience": "experience",
    };
   if (locale === "en") {
     return translationsToEn[slug] || slug;
   }
   else {
     const translationsToFr: Record<string, string> = {
       "manufacture": "fabrication",
       "how to use": "utilisations",
       "experience": "expérience",
     };
     return translationsToFr[slug] || slug;
   }

  };

  const t = await getTranslations('Fabrication')

  const fabricationContent = [
  {
    title: t('fabrication1.title'),
    description: t('fabrication1.description'),
    specials: [
     { point : t('fabrication1.specials.point1') },
      { point : t('fabrication1.specials.point2') },
      { point : t('fabrication1.specials.point3') },
    ],
    image: fabrication1,
  },
  {
    title: t('fabrication2.title'),
    description:
      t('fabrication2.description'),
    specials: [
      { point : t('fabrication2.specials.point1') },
      { point : t('fabrication2.specials.point2') },
      { point : t('fabrication2.specials.point3') },
    ],
    image: fabrication2,
  },
  {
    title: t('fabrication3.title'),
    description:
      t('fabrication3.description'),
    specials: [
      { point : t('fabrication3.specials.point1') },
      { point : t('fabrication3.specials.point2') },
      { point : t('fabrication3.specials.point3') },
    ],
    image: fabrication3,
  },
];

const t2 = await getTranslations('Experience')
const experienceContent = [

  {
    title: t2('experience1.title'),
    description: t2('experience1.description'),
    image: experience2,
    specials: [
      {
        point: t2('experience1.specials.point1'),
      },
      {
        point: t2('experience1.specials.point2'),
      },
      {
        point: t2('experience1.specials.point3'),
      }
    ],
  },
  {
    title: t2("experience2.title"),
    description: t2("experience2.description"),
    image: experience2,
    specials: [
      {
        point: t2("experience2.specials.point1"),
      },
      {
        point: t2("experience2.specials.point2"),
      },
      {
        point: t2("experience2.specials.point3"),
      }
    ],
  },
  {
    title: t2("experience3.title"),
    description: t2("experience3.description"),
    image: experience3,
    cta: "https://www.youtube.com/watch?v=xmI_naeRfdw",
    specials: [
      {
        point: t2("experience3.specials.point1"),
      },
      {
        point: t2("experience3.specials.point2"),
      },
      {
        point: t2("experience3.specials.point3"),
      }
     ]
  },
  {
    title: t2("experience4.title"),
    description: t2("experience4.description"),
    image: experience4,
    specials: [
     { point: t2("experience4.specials.point1") },
      { point: t2("experience4.specials.point2") },
      { point: t2("experience4.specials.point3") },
    ]
  },
];
const useImages = [
  { url: montage1 },
  { url: montage2 },
  { url: montage3 },
  { url: montage4 },
  { url: montage5 },
  { url: montage6 },
  { url: montage7 },
  { url: montage8 },
  { url: montage11 },
  { url: montage12 },
]
      // <section className="relative h-[70vh] lg:h-[90vh] w-full">
      //   <Image
      //     src={HeroBg}
      //     alt="mbio7 panel"
      //     fill
      //     priority
      //     className="object-cover w-full object-bottom  "
      //   />
      //   {/* <div className="absolute inset-0 bg-[#084E4D78]" /> */}
      //   <div className="absolute inset-0 bg-black/10" />
      //   <div className="relative z-10">
      //     <Nav />
      //     <Hero />
      //   </div>
      // </section>
  return (
    <div className="min-h-screen w-full relative ">
    <div className="relative z-10">

  
      <Nav />
        <div className=" h-64 w-full">
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
           <Balancer>{handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}</Balancer>
          </h1>
          <p
            className={
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base s"
            }
          >
            <Link href={"/"}>Accueil</Link> /{" "}
           <Balancer>{handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}</Balancer>
          </p>
        </div>
        </div>
      { (decodeURIComponent(slug) === "fabrication" || decodeURIComponent(slug) === "manufacture") && (
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
       { (decodeURIComponent(slug) === "utilisations" || decodeURIComponent(slug) === "how-to-use") && (
        <>
          <Main />
          <CarouselV2 images={useImages} />
          <Hero />
        </>
      )}
       { (decodeURIComponent(slug) === "expérience" || decodeURIComponent(slug) === "experience") && (
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



interface FeatureProps {
  image: any;
  title: string;
  description: string;
  specials?: { point: string }[];
  cta?: string;
}


const Feature = ({ image, title, description, specials, cta }: FeatureProps) => {
  return (
    <Container className="grid items-stretch md:grid-cols-2 md:gap-12 relative" >
      {/* =====================================================
        GEOMETRY ADDITION - Image Container 
        - Relative positioning for the absolute pseudo-elements.
        - `z-0` ensures the image wrapper is in a standard layer.
        - Increased `h-96` to `h-[420px]` just for a slightly bigger image area.
      */}
      <div className="not-prose relative flex h-[420px] overflow-hidden rounded-lg z-0">
        
        {/* Slanted Accent Background (Bottom Left Corner) */}
        <div 
          className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-mbioAccent opacity-20 transform skew-y-3 -translate-x-1/4 -translate-y-1/4 z-[-1]"
        ></div>

        {/* Small Solid Corner Shape (Top Right) */}


        {/* The actual image element */}
        <Image
          src={image}
          alt="Illustration de panneaux de construction en bois"
          className="fill object-cover object-left rounded-lg transition-transform duration-500 hover:scale-[1.03] z-10"
        />
      </div>
      
      {/* =====================================================
        TEXT CONTENT - Kept largely the same, maybe slight tweaks
      */}
      <div className="flex flex-col gap-6 py-8 text-mbioPrimary">
        <h2 className="!my-0 text-mbioPrimary text-4xl sm:text-5xl">{title}</h2>
        <Balancer>
          <p className="font-light leading-[1.4] text-muted-foreground">
            {description}
          </p>
        </Balancer>
        {
          specials &&
          <ul className=" list-disc text-mbioAccent marker:text-mbioAccent pl-5">
            {specials.map((special, index) => (
              <li key={index}>{special.point}</li>
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
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12 relative" >
        {/* =====================================================
          TEXT CONTENT (Left Side) - Kept the same
        */}
        <div 
          className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#064343] opacity-10 transform skew-y-3 -translate-x-1/4 -translate-y-1/4 z-[-1]"
        ></div>
        <div className="flex flex-col gap-6 py-8 text-mbioPrimary">
          <h2 className="!my-0 text-mbioPrimary text-3xl sm:text-5xl">{title}</h2>

          <Balancer>
            <p className="font-light leading-[1.4] text-muted-foreground">
              {description}
            </p>
          </Balancer>
            
          {
            specials &&
            <ul className=" list-disc text-mbioAccent marker:text-mbioAccent pl-5">
                {specials.map((special, index) => (
                  <li key={index}>{special.point}</li>
                ))}
              </ul>
          }
        </div>
        
        {/* =====================================================
          GEOMETRY ADDITION - Image Container (Right Side)
        */}
        <div className="not-prose relative flex h-[420px] overflow-hidden rounded-lg z-0">
          
          {/* 1. Slanted Accent (Bottom Left) - Subtle background movement */}
          <div 
            className="absolute top-0 left-0 w-3/5 h-3/5 bg-[#080d46] opacity-10 transform skew-y-3 -translate-x-1/4 translate-y-1/4 z-[-1] rounded-tl-xl"
          ></div>

          {/* 2. Structured Corner Frame (Top Right) - Uses a border for a modular, open-box feel */}
          

          {/* The actual image element with hover effect */}
          <Image 
            src={image} 
            alt="Illustration de panneaux de construction en bois" 
            className="fill object-cover rounded-lg transition-transform duration-500 hover:scale-[1.03] z-10" 
          />

          {/* CTA button (Z-20 to ensure it's on top of everything) */}
          {
            cta &&
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Link href={cta} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost"
                  className="h-16 w-16 rounded-full bg-mbioQuaternary hover:bg-mbioTertiary p-0 transition-all duration-300"
                >
                  {/* Assuming PlayIcon is defined/imported */}
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



const Hero = () => {
  const t = useTranslations('UtilisationHero');
  const utilisationHero = {
    title: t("title"),
    description: t("description"),
    image: thumbnail,
    details: [
      t("details.point1"),
      t("details.point2"),
      t("details.point3"),
      t("details.point4"),
      t("details.point5"),
      t("details.point6"),
      t("details.point7"),
      t("details.point8"),

    ],
  }
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
          <h2 className="!my-0 font-semibold text-mbioPrimary text-3xl sm:text-5xl ">
            {utilisationHero.title}
          </h2>
          <div
           className="text-muted-foreground max-w-xl prose"
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


const Main = () => {
  const t = useTranslations('UtilisationMain');
  const MainContent = {
    title: t("title"),
    description: t("description"),
    dimensions: [
      t("dimensions.point1"),
      t("dimensions.point2"),
      t("dimensions.point3"),
      t("dimensions.point4"),
      t("dimensions.point5"),
      t("dimensions.point6"),
      t("dimensions.point7"),
      t("dimensions.point8"),
      t("dimensions.point9"),
      t("dimensions.point10"),
    ],
    image: main,
  };
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
        <h3 className="my-2 mt-8 text-mbioPrimary text-3xl sm:text-5xl font-semibold">
          <Balancer>{MainContent.title}</Balancer>
        </h3>
        <p className="text-muted-foreground leading-[1.6] my-6">
          <Balancer>
            {MainContent.description}
          </Balancer>
        </p>
        <div className="flex flex-wrap">

          {
            MainContent.dimensions.map((dimension, index) => (
              <span key={index} className="rounded-full capitalize text-mbioAccent border border-mbioAccent px-4 py-2 text-xs font-medium mr-2 mb-2 inline-block bg-white/5">
                {dimension}
              </span>
          ))
        }
        </div>
      </Container>
    </Section>
  );
};






const ExperienceHero =  () => {
  const t2 = useTranslations('Experience');
  const experienceHero =   {
      title: t2("title"),
      description: t2("description"),
      image: experience1,
     
    }
  return (
    <Section className="relative">
       <div 
          className="absolute bottom-0 right-0 w-2/4 h-2/4 bg-[#064343] opacity-10 transform skew-y-3 -translate-x-1/4 -translate-y-1/4 z-[-1]"
        ></div>
      <Container className="grid items-stretch">
        <h3 className="text-mbioPrimary text-4xl sm:text-5xl mb-6">
          <Balancer>

          {experienceHero.title}
          </Balancer>
          </h3>
        <p className="text-muted-foreground mb-6" >
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

