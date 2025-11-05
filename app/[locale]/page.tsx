// Craft Imports
import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import HeroImage from "@/public/hero-mbio.jpg";
import HeroBg from "@/public/hero-bg.png";
import ImpactBg from "@/public/impact-bg.png";
import ContactBg from "@/public/contact-bg.png";
import WoodWise from "@/public/woodwise.svg";

import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
// import Stats from "@/public/stats.png";
import Logo from "@/public/mbio7-logo.png";
import Comparative from "@/public/comparaison.jpg";
import ComparativeEng from "@/public/Comparative.jpg";
import slide2 from "@/public/fabrication-2.png";
import slide3 from "@/public/fabrication-3.png";
import slide4 from "@/public/utilisation.png";

import sept2025 from "@/public/sept-2025.png";
import sept2021 from "@/public/sept-2021.png";
import aout2019 from "@/public/aout-2019.png";
import juillet2019 from "@/public/juillet-2019.png";
import mai2022 from "@/public/mai-2022.png";
import nov2022 from "@/public/novembre-2022.png";

import Label from "@/public/label.png";
import Thumbnail from "@/public/video-thumbnail.png";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
import CustomButton from "@/components/ui/customButton";
import {
  ArrowRight,
  BadgeCheck,
  LeafyGreen,
  Mail,
  MapPin,
  Phone,
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
import ContactForm from "@/components/contact-form";
import { useLocale, useTranslations } from "next-intl";
import CarouselV1 from "@/components/carousel-v1";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
// This page is using the craft.tsx component and design system
export default function Home() {
  const locale = useLocale();

  return (
    <div>
      <section className="relative h-[70vh] lg:h-[90vh] w-full">
        <Image
          src={HeroBg}
          alt="mbio7 panel"
          fill
          priority
          className="object-cover w-full object-bottom  "
        />
        {/* <div className="absolute inset-0 bg-[#084E4D78]" /> */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
      </section>
      <Banner />

      <div className=" relative">
        <Mbio7 />
        {/* <div className="absolute inset-y-20 left-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}

        <div className="p-2 bg-gradient-to-r from-[#084E4D]/60 to-[#6CC1BB] " />

        <CarouselCmp />
        <div className="p-2 bg-gradient-to-l from-[#084E4D]/60 to-[#6CC1BB]  " />
        <About />
        {/* <div className="absolute inset-y-50 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Impact />
        {/* <div className="absolute inset-y-100 left-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <WhyUs />
        {/* <div className="absolute inset-y-150 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <ComparativeStudy />
        {/* <div className="absolute inset-y-200 left-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Blogs />
        <Actualites />
        {/* <div className="absolute inset-y-250 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Reviews />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}

// This is just some example TSX
const Hero = () => {
  const t = useTranslations("Hero");
  const HeroContent = {
    title: t("title"),
    description: t("description"),
    cta1: t("cta1"),
    ctaLink: t("cta1_link"),
    cta2: t("cta2"),
    image: HeroImage,
  };
  return (
    <main className="relative border-none h-[60vh] lg:h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0  z-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-white  text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold  mb-4 text-center px-2 max-w-[25ch]">
{/*          
          <Balancer>
            Panneau mBio7, l'écologie au service de la construction
          </Balancer> */}
          <Balancer>{HeroContent.title}</Balancer>
        </h1>
        <p className="text-white max-w-[65ch] text-center text-md sm:text-lg font-medium mb-6 px-4">
          <Balancer>{HeroContent.description}</Balancer>
        </p>
        <div className="flex gap-4">
          <CustomButton label={HeroContent.cta1} href={HeroContent.ctaLink} />
          <CustomButton label={HeroContent.cta2} href="#contact" inverted />
        </div>
      </div>
    </main>
  );
};

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-3 bg-mbioSecondary">
      <p className="text-center text-base sm:text-lg text-white ">
        {t("text")}{" "}
      </p>
      <Image src={WoodWise} alt="Wood Wise" className="h-6 sm:h-8 " />
    </div>
  );
};

const Mbio7 = () => {
  const t = useTranslations("mBio7");
  const MainContent = {
    title: t("title"),
    description: t("description"),
    tags: [
      { point: t("tags.tag1") },
      { point: t("tags.tag2") },
      { point: t("tags.tag3") },
      { point: t("tags.tag4") },
      { point: t("tags.tag5") },
      { point: t("tags.tag6") },
    ],
    image: Logo,
  };
  return (
    <Section className="my-12 !pb-0">
      <Container
        id="about"
        className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
      >
        <div className=" w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary mb-4 lg:mb-8 ">
            {MainContent.title}
          </h2>
          <Balancer className="mb-4 lg:mb-8 text-muted-foreground">
            {MainContent.description}
          </Balancer>
          <div className="flex flex-wrap">
            {MainContent.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full capitalize text-mbioAccent border border-mbioAccent px-4 py-2 text-xs font-medium mr-2 mb-2 inline-block bg-white/5"
              >
                {tag.point}
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

const CarouselCmp = () => {
  const t = useTranslations("Carousel");
  const CarouselContent = [
    {
      title: t("slide1.title"),
      description: t("slide1.description"),
      image: HeroImage,
    },
    {
      title: t("slide2.title"),
      description: t("slide2.description"),
      image: slide2,
    },
    {
      title: t("slide3.title"),
      description: t("slide3.description"),
      image: slide3,
    },
    {
      title: t("slide4.title"),
      description: t("slide4.description"),
      image: slide4,
    },
  ];
  return <CarouselV1 visions={CarouselContent} />;
};

const About = () => {
  const t = useTranslations("About");
  const aboutContent = {
    title: t("title"),
    description: t("description"),
    points: [
      { detail: t("points.point1") },
      { detail: t("points.point2") },
      { detail: t("points.point3") },
      { detail: t("points.point4") },
    ],
  };
  const locale = useLocale();
  const videoUrl = locale === "fr" ? "https://www.youtube.com/watch?v=jUQu9_26Gdg" : "https://www.youtube.com/watch?v=052uUU0YS-8";
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
              href={videoUrl}
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

            <h2 className="!my-0 font-semibold text-mbioPrimary text-4xl sm:text-5xl ">
              {aboutContent.title}
            </h2>
          </div>
          <div className="text-muted-foreground max-w-xl prose">
            {aboutContent.description}

            <br />
            <ul className=" text-mbioAccent marker:text-mbioAccent">
              {aboutContent.points.map((point, index) => (
                <li key={index}>{point.detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Impact = () => {
  const t = useTranslations("Impact");
  const chiffres = [
    { title: t("stat1.title"), value: t("stat1.value") },
    { title: t("stat2.title"), value: t("stat2.value") },
    { title: t("stat3.title"), value: t("stat3.value") },
  ];
  return (
    <Section className="relative">
      <div className="relative w-full h-[130vh] sm:h-[100vh] md:h-[80vh] overflow-hidden bg-gray-100">
        <Image
          alt="Card background"
          src={ImpactBg}
          fill
          priority
          className="z-0 object-cover w-full object-bottom  rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-linear"></div>
      </div>
      <Container className="flex flex-col items-center absolute inset-0 z-10 justify-center">
        <h2 className="font-semibold text-white text-3xl sm:text-5xl  mb-4 lg:mb-6 text-center">
          <Balancer>{t("title")}</Balancer>
        </h2>
        <Balancer
          className={cn(
            "text-white/90 text-sm lg:text-base text-center mb-6  lg:mb-12 md:max-w-[70ch]"
          )}
        >
          {t("description")}
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

const WhyUs = () => {
  const t = useTranslations("Whyus");
  const WhyUsContent = [
    {
      title: t("points.point1.title"),
      description: t("points.point1.description"),
    },
    {
      title: t("points.point2.title"),
      description: t("points.point2.description"),
    },
    {
      title: t("points.point3.title"),
      description: t("points.point3.description"),
    },
    {
      title: t("points.point4.title"),
      description: t("points.point4.description"),
    },
  ];
  return (
    <Section>
      <Container>
        <h2 className="mb-8 lg:mb-16 text-center font-semibold">
          <Balancer className="text-4xl sm:text-5xl  font-semibold text-mbioPrimary cols-span-full ">
            {t("title")}
          </Balancer>
        </h2>
        <div className="grid md:grid-cols-2 gap-6  ">
          {WhyUsContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border border-gray/50 hover:scale-[1.02] hover:shadow-lg transition-all"
            >
              {index === 0 && (
                <Recycle className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 1 && (
                <LeafyGreen className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 2 && (
                <ShieldCheck className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              {index === 3 && (
                <BadgeCheck className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
              )}
              <h3 className="text-xl font-semibold text-mbioPrimary">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ComparativeStudy = () => {
  const locale = useLocale();
  return (
    <Section className="bg-mbioPrimary py-16">
      <Container>
        {/* ... Title ... */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-8 lg:mb-16">
          {locale === "fr" ? "Étude comparative" : "Comparative Study"}
        </h2>
        {/* === STYLING IDEA 2: FOLDED PAPER (Using a strong offset shadow) === */}
        <div
          className="
          relative w-full 
          bg-white
          rounded-lg                     
          shadow-[8px_8px_0_0_rgba(0,0,0,0.4)]  /* Custom offset shadow for depth */
          border border-gray-200             /* A light border to define the edge */
          max-w-4xl mx-auto 
                       
        "
        >
          <Image
            src={locale === "fr" ? Comparative : ComparativeEng}
            alt="Étude comparative"
            width={1200}
            height={800}
            className="w-full h-auto rounded-md"
          />
        </div>
        {/* ================================================================= */}
      </Container>
    </Section>
  );
};

const Blogs = () => {
  const t = useTranslations("Blogs");
  const blogs = [
    {
      date: "06 Nov 2019",
      title: t("blog1.title"),
      description: t("blog1.description"),
      image: Monaco,
      link: "/article la gazette.pdf",
      category: "La gazette de Monaco",
    },
    {
      date: " 1er janvier 2019",
      title: t("blog2.title"),
      description: t("blog2.description"),
      link: "/article mBio7 Liberation 02.01.jpg",
      image: Liberation,
      category: "Liberation",
    },
    {
      date: "Août 2018",
      title: t("blog3.title"),
      description: t("blog3.description"),
      // link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801",
      link: "/article Nice Matin 16.08.2018.pdf",
      image: NiceMatin,
      category: "Nice matin",
    },
  ];
  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary text-center mb-8 lg:mb-16">
          {useLocale() === "fr" ? "Derniers articles" : "Latest Blogs"}
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
    link: string;
    image: StaticImageData;
    category: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg  bg-white/10 transition-shadow cursor-pointer py-0 shadow-sm rounded-lg ">
      <CardHeader className="p-0 relative">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute bottom-5 right-0 m-4"></div>
      </CardHeader>
      <CardContent className="mt-6">
        <span className="text-mbioAccent text-sm rounded-full py-1.5 px-3.5 border border-mbioAccent">
          {blog.category}
        </span>
        <Balancer className="text-mbioPrimary font-semibold text-xl py-4">
          {blog.title}
        </Balancer>
        <Balancer className="text-muted-foreground text-sm">
          {blog.description}
        </Balancer>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-mbioAccent px-0">
          <Link href={blog.link} target="_blank" className="flex items-center gap-1">
            {useLocale() === "fr" ? "Lire l'article" : "Read full article"}
            <ArrowRight className="h-4 w-4 " />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const actualitesFR = [
  {
    date: "September 2025",
    title: "Envoi du premier container de pièces industrielles vers la France",
    image: sept2025,
  },
  {
    date: "Novembre 2022",
    title: "Reprise des parts de la SAS de Mr Tallarida au profit de Mr Dogui",
    image: nov2022,
  },
  {
    date: "Aout 2019",
    title:
      "Démarrage du 2e chantier de construction de maison d'habitation à Sospel",
    image: aout2019,
  },
  {
    date: "Juillet 2019",
    title:
      "Visite en Bulgarie de William Liu de Guoli Packing Chine pour visualiser la production en vue de reproduire en Chine",
    image: juillet2019,
  },
  {
    date: "29 septembre 2021",
    title:
      "Sélectionné comme un des cinq finalistes (sur 600) de la CleanTech Open France, concours organisé par le ministère de la transition écologique pour récompenser les meilleurs projets nationaux pour la défense de l'environnement",
    image: sept2021,
  },
  {
    date: "Mai 2022",
    title: "Présentation à Change Now Paris",
    image: mai2022,
  },
];
const actualitesEN = [
  {
    date: "November 2022",
    title:
      "Resumption of the shares of Mr. Tallarida's SAS in favor of Mr. Dogui",
    image: nov2022,
  },
  {
    date: "September 2025",
    title: "Sending the first container of industrial parts to France",
    image: sept2025,
  },
  {
    date: "Aout 2019",
    title:
      "Start of the 2nd construction site for residential houses in Sospel",
    image: aout2019,
  },
  {
    date: "Juillet 2019",
    title:
      "Visit to Bulgaria by William Liu of Guoli Packing China to visualize production with a view to reproducing in China",
    image: juillet2019,
  },
  {
    date: "29 septembre 2021",
    title:
      "Selected as one of five finalists (out of 600) for the CleanTech Open France, a competition organized by the Ministry of Ecological Transition to reward the best national projects for environmental protection",
    image: sept2021,
  },
  {
    date: "Mai 2022",
    title: "Presentation in Change Now Paris",
    image: mai2022,
  },
];
interface ActualiteCardProps {
  actualite: {
    date: string;
    title: string;

    image: StaticImageData;
  };
}

const ActualitesCard = ({ actualite }: ActualiteCardProps) => {
  return (
    <Card className="hover:shadow-lg  bg-white/10 transition-shadow cursor-pointer py-0 shadow-sm rounded-lg ">
      <div className="relative group">
        <Image
          src={actualite.image}
          alt={actualite.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="absolute inset-0 hidden group-hover:flex flex-col justify-end bg-black/60 p-4 transition-all">
          <p className="text-mbioAccent">{actualite.date}</p>
          <Balancer className="text-white font-semibold text-sm py-4 ">
            {actualite.title}
          </Balancer>
        </div>
      </div>
    </Card>
  );
};
const Actualites = () => {
  const locale = useLocale();
  const actualites = locale === "fr" ? actualitesFR : actualitesEN;
  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary text-center mb-8 lg:mb-16">
          {locale === "fr" ? "Actualités" : "Gallery of Events"}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {actualites.map((actualite, index) => (
            <ActualitesCard key={index} actualite={actualite} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Reviews = () => {
  const t = useTranslations("Reviews");
  const reviews = [
    {
      name: t("reviews.review1.name"),
      rating: 5,
      comment: t("reviews.review1.comment"),
    },
    {
      name: t("reviews.review2.name"),
      rating: 5,
      comment: t("reviews.review2.comment"),
    },
  ];
  return (
    <Section className="bg-gradient-to-r from-[#084E4D] to-[#85E08A]">
      <Container>
        <h2 className="font-semibold text-white text-4xl sm:text-5xl  mb-8 lg:mb-16 text-center">
          {t("title")}
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
    <Card className=" shadow-lg transition-shadow cursor-pointer rounded-2xl bg-green/15 border-none ">
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

const FAQ = () => {
  const t = useTranslations("FAQ");

  const content: FAQItem[] = [
    {
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
    },
    {
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
    },
    {
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
    },
    {
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
    },
    {
      question: t("questions.q5.question"),
      answer: t("questions.q5.answer"),
    },
    {
      question: t("questions.q6.question"),
      answer: t("questions.q6.answer"),
    },
    {
      question: t("questions.q7.question"),
      answer: t("questions.q7.answer"),
    },
    {
      question: t("questions.q8.question"),
      answer: t("questions.q8.answer"),
    },
  ];
  return (
    <Section>
      <Container className="grid md:grid-cols-2 gap-6 lg:gap-4">
        <h2 className="font-semibold text-mbioPrimary text-4xl sm:text-5xl ">
          FAQ – {t("title_part1")} {t("title_part2")}
        </h2>

        <div className="not-prose  flex flex-col gap-4 ">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-mbioPrimary text-lg">
                  <div className="flex items-center">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-4">
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

const Contact = () => {
  const locale = useLocale();
  const contactSection = {
    subtitle: locale === "fr" ? "Restons en contact" : "Get in Touch",
    title: locale === "fr" ? "Contactez-nous" : "Contact Us",
    email: "contact@woodwise.fr",
    phone: "80157 59053",
    address: "QUARTIER CUNI, SOSPEL, 06380, FR",
  };

  return (
    <Section
      id="contact"
      className=" bg-gradient-to-br from-[#6CC1BB]  to-teal-900"
    >
      <Container className="flex flex-col md:flex-row gap-8  md:gap-16 items-start md:items-center">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h4 className="text-md font-light text-white/70 ml-1 ">
            {useLocale() === "fr" ? "Restons en contact" : "Get in Touch"}
          </h4>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-white mb-6">
            {contactSection.title}
          </h1>
          <div className="ml-1">
            <div className="flex items-center gap-4 mb-4">
              <Mail size={20} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactSection.email}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MapPin size={24} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactSection.address}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone size={20} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactSection.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="bg-white p-8 rounded-lg shadow-md ">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};
