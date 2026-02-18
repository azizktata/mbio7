// Craft Imports
import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import HeroBg from "@/public/hero-bg.png";
import ImpactBg from "@/public/impact-bg.png";
// import ContactBg from "@/public/contact-bg.png";
import WoodWise from "@/public/woodwise.svg";

import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
// import Stats from "@/public/stats.png";
import Logo from "@/public/mbio7-logo.png";
import Comparative from "@/public/comparaison.jpg";
import ComparativeEng from "@/public/Comparative.jpg";
import slide1 from "@/public/mBio7-montage12.jpg";
import slide2 from "@/public/fabrication-2.png";
import slide3 from "@/public/fabrication-3.png";
import slide4 from "@/public/utilisation.png";
import slide5 from "@/public/mBio7-montage01.jpg";


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
  Recycle,
  ShieldCheck,
  Star,
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
import CarouselHero from "@/components/carousel-hero";
import {
  getHeroSection,
  getAboutSection,
  getProcessSection,
  getVideoSection,
  getImpactSection,
  getWhyUsSection,
  getComparativeSection,
  getBlogsSection,
  getActualitesSection,
  getReviewsSection,
  getFAQSection,
  getContactSection,
} from "@/lib/wp-fetch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
// This page is using the craft.tsx component and design system
export default  function Home() {
  const locale = useLocale();


  return (
    <div>
      <section className="relative h-[550px] lg:h-[600px]  w-full">

        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <Nav />
          <Hero locale={locale} />
        </div>
      </section>
      <Banner />

      <div className=" relative">
        <Mbio7 locale={locale} />

        <div className="p-2 bg-gradient-to-b from-[#084E4D]/60 to-[#6CC1BB] " />

        <div className="">
          <CarouselCmp locale={locale} />
        </div>
        <div className="p-2 bg-gradient-to-t from-[#084E4D]/60 to-[#6CC1BB] " />
        <About locale={locale} />
        {/* <div className="absolute inset-y-50 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Impact locale={locale} />
        {/* <div className="absolute inset-y-100 left-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <WhyUs locale={locale} />
        {/* <div className="absolute inset-y-150 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <ComparativeStudy locale={locale} />
        {/* <div className="absolute inset-y-200 left-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Blogs locale={locale} />
        <Actualites locale={locale} />
        {/* <div className="absolute inset-y-250 right-0 w-1/2 bg-mbioPrimary/10 blur-[100px] h-[500px]" /> */}
        <Reviews locale={locale} />
        <FAQ locale={locale} />
        <Contact locale={locale} />
      </div>
    </div>
  );
}

const Hero = async ({locale}: { locale: string }) => {
  const heroData = await getHeroSection(locale);

  const heroes = heroData.imageUrls.map((url) => ({
    title: heroData.title,
    description: heroData.subtitle,
    image: url,
    cta: heroData.cta,
  }));

  return (
    <main className="relative border-none h-[400px]  flex items-center justify-center text-center">
      <div className="absolute inset-0  z-10 flex flex-col items-center justify-center gap-2">
        <CarouselHero heros={heroes} />
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

const Mbio7 = async ({ locale }: { locale: string }) => {
  const aboutData = await getAboutSection(locale);

  return (
    <Section className="my-12 !pb-0">
      <Container
        id="about"
        className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
      >
        <div className=" w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary mb-4 lg:mb-8 ">
            {aboutData.title}
          </h2>
          <Balancer className="mb-4 lg:mb-8 text-muted-foreground">
            {aboutData.description}
          </Balancer>
          <div className="flex flex-wrap">
            {aboutData.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full capitalize text-mbioAccent border border-mbioAccent px-4 py-2 text-xs font-medium mr-2 mb-2 inline-block bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-full h-52  md:h-96">
          {aboutData.logo ? (
            <Image
              src={aboutData.logo}
              alt="mBio7 logo"
              className="object-contain rounded-lg"
              fill
            />
          ) : (
            <Image
              src={Logo}
              alt="mBio7 logo"
              className="object-contain rounded-lg"
              fill
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

const fallbackSlideImages = [slide4, slide2, slide3];

const CarouselCmp = async ({ locale }: { locale: string }) => {
  const slides = await getProcessSection(locale);

  const slidesWithFallback = slides.map((slide, index) => ({
    ...slide,
    image: slide.image || fallbackSlideImages[index % fallbackSlideImages.length],
  }));

  return <CarouselV1 visions={slidesWithFallback} />;
};

const About = async ({ locale }: { locale: string }) => {
  const videoData = await getVideoSection(locale);

  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-6 lg:gap-16 ">
        <div className="not-prose relative h-64 md:h-96 flex overflow-hidden rounded-lg relative ">
          <Image
            src={videoData.thumbnail || Thumbnail}
            alt="Mbio7"
            className="object-cover object-right rounded-lg"
            fill
          />
          <div className="absolute inset-0  bg-black/30" />
          {videoData.video_url && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href={videoData.video_url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  className="h-16 w-16 rounded-full bg-mbioSecondary hover:bg-mbioTertiary p-0"
                >
                  <PlayIcon className="h-8 w-8 fill-current text-white" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 py-8 relative">
          <div className="flex flex-col items-start gap-2">
            <div className=" ">
              <Image
                src={Label}
                alt="Label"
                className="object-contain rounded-lg"
                width={100}
                height={100}
              />
            </div>

            <h2 className="!my-0 font-semibold text-mbioPrimary text-4xl sm:text-5xl ">
              {videoData.title}
            </h2>
          </div>
          <div className="text-muted-foreground max-w-xl prose">
            {videoData.description}

            <br />
            <ul className=" text-mbioAccent marker:text-mbioAccent">
              {videoData.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Impact = async ({ locale }: { locale: string }) => {
  const impactData = await getImpactSection(locale);

  return (
    <Section className="relative">
      <div className="absolute inset-0 overflow-hidden bg-gray-100">
        <Image
          alt="Card background"
          src={impactData.background || ImpactBg}
          fill
          priority
          className="z-0 object-cover w-full object-bottom rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b bg-[#6CC1BB]/30 via-linear"></div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-16">
        <h2 className="font-semibold text-white text-3xl sm:text-5xl mb-4 lg:mb-6 text-center">
          <Balancer>{impactData.title}</Balancer>
        </h2>
        <p
          className={cn(
            "text-white text-sm lg:text-base text-center mb-6 w-full lg:mb-12 md:max-w-[60ch]"
          )}
        >
          {impactData.description}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-6">
          {impactData.stats.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-6 items-center py-8 px-3 bg-card rounded-2xl border shadow-sm transition-background duration-300 hover:bg-gradient hover:text-white"
            >
              <h3 className="text-6xl font-semibold text-mbioPrimary group-hover:text-white">
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

const whyUsIcons = [Recycle, LeafyGreen, ShieldCheck, BadgeCheck];

const WhyUs = async ({ locale }: { locale: string }) => {
  const whyUsData = await getWhyUsSection(locale);

  return (
    <Section>
      <Container>
        <h2 className="mb-8 lg:mb-16 text-center font-semibold">
          <Balancer className="text-4xl sm:text-5xl  font-semibold text-mbioPrimary cols-span-full ">
            {whyUsData.title}
          </Balancer>
        </h2>
        <div className="grid md:grid-cols-2 gap-6  ">
          {whyUsData.points.map((item, index) => {
            const Icon = whyUsIcons[index % whyUsIcons.length];
            return (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 rounded-lg border border-gray/50 hover:scale-[1.02] hover:shadow-lg transition-all"
              >
                <Icon className="h-16 w-16 bg-mbioAccent p-4 rounded-full" />
                <h3 className="text-xl font-semibold text-mbioPrimary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const ComparativeStudy = async ({ locale }: { locale: string }) => {
  const compData = await getComparativeSection(locale);
  const fallbackImage = locale === "fr" ? Comparative : ComparativeEng;

  return (
    <Section className="bg-gradient-to-l from-[#2A6F6A] to-[#85E08A] py-16">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-8 lg:mb-16">
          {compData.title}
        </h2>
        <div
          className="
          relative w-full
          bg-white
          rounded-lg
          shadow-[8px_8px_0_0_rgba(0,0,0,0.4)]
          border border-gray-200
          max-w-4xl mx-auto
        "
        >
          <Image
            src={compData.image || fallbackImage}
            alt={compData.title}
            width={1200}
            height={800}
            className="w-full h-auto rounded-md"
          />
        </div>
      </Container>
    </Section>
  );
};

const fallbackBlogImages = [Monaco, Liberation, NiceMatin];

const Blogs = async ({ locale }: { locale: string }) => {
  const blogsData = await getBlogsSection(locale);

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary text-center mb-8 lg:mb-16">
          {blogsData.title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} fallbackImage={fallbackBlogImages[index % fallbackBlogImages.length]} cta={blogsData.cta} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const BlogCard = ({ blog, fallbackImage, cta }: {
  blog: { date: string; title: string; description: string; link: string; image: string | false; category: string };
  fallbackImage: StaticImageData;
  cta: string;
}) => {
  return (
    <Card className="hover:shadow-lg  bg-white/10 transition-shadow cursor-pointer py-0 shadow-sm rounded-lg ">
      <CardHeader className="p-0 relative">
        <Image
          src={blog.image || fallbackImage}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-5 right-0 m-4"></div>
      </CardHeader>
      <CardContent className="mt-6 flex flex-col items-start">
        <p className="text-mbioAccent text-sm  rounded-full py-1.5 px-3.5 border border-mbioAccent">
          {blog.category}
        </p>
        <Balancer className="text-mbioPrimary font-semibold text-xl py-4 ">
          {blog.title}
        </Balancer>
        <Balancer className="text-muted-foreground text-sm">
          {blog.description}
        </Balancer>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-mbioAccent px-0">
          <Link
            href={blog.link}
            target="_blank"
            className="flex items-center gap-1"
          >
            {cta}
            <ArrowRight className="h-4 w-4 " />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const fallbackActualiteImages = [sept2025, nov2022, aout2019, juillet2019, sept2021, mai2022];

const ActualitesCard = ({ actualite, fallbackImage }: {
  actualite: { date: string; title: string; image: string | false };
  fallbackImage: StaticImageData;
}) => {
  return (
    <Card className="hover:shadow-lg  bg-white/10 transition-shadow cursor-pointer py-0 shadow-sm rounded-lg ">
      <div className="relative group">
        <Image
          src={actualite.image || fallbackImage}
          alt={actualite.title}
          width={400}
          height={256}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="absolute inset-0 hidden group-hover:flex flex-col justify-end bg-black/60 p-4 transition-all">
          <p className="text-mbioAccent">{actualite.date}</p>
          <p className="text-white font-semibold text-sm py-4 w-full">
            {actualite.title}
          </p>
        </div>
      </div>
    </Card>
  );
};

const Actualites = async ({ locale }: { locale: string }) => {
  const actualitesData = await getActualitesSection(locale);

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-semibold text-mbioPrimary text-center mb-8 lg:mb-16">
          {actualitesData.title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {actualitesData.items.map((actualite, index) => (
            <ActualitesCard key={index} actualite={actualite} fallbackImage={fallbackActualiteImages[index % fallbackActualiteImages.length]} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Reviews = async ({ locale }: { locale: string }) => {
  const reviewsData = await getReviewsSection(locale);

  return (
    <Section className="bg-gradient-to-r from-[#2A6F6A] to-[#85E08A]">
      <Container>
        <h2 className="font-semibold text-white text-4xl sm:text-5xl  mb-8 lg:mb-16 text-center">
          {reviewsData.title}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
          {reviewsData.reviews.map((review, index) => (
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

const FAQ = async ({ locale }: { locale: string }) => {
  const faqData = await getFAQSection(locale);

  return (
    <Section>
      <Container className="grid md:grid-cols-2 gap-6 lg:gap-4">
        <h2 className="font-semibold text-mbioPrimary text-4xl sm:text-5xl ">
          FAQ – {faqData.title}
        </h2>

        <div className="not-prose  flex flex-col gap-4 ">
          {faqData.questions.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-mbioPrimary text-lg">
                  <div className="flex items-center">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-4">
                  <Balancer>
                    {item.answer}
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

const Contact = async ({ locale }: { locale: string }) => {
  const contactData = await getContactSection(locale);

  return (
    <Section
      id="contact"
      className=" bg-gradient-to-br from-[#2A6F6A] to-[#85E08A]"
    >
      <Container className="flex flex-col md:flex-row gap-8  md:gap-16 items-start md:items-center">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h4 className="text-md font-light text-white/70 ml-1 ">
            {contactData.subtitle}
          </h4>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-white mb-6">
            {contactData.title}
          </h1>
          <div className="ml-1">
            <div className="flex items-center gap-4 mb-4">
              <Mail size={20} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactData.email}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MapPin size={24} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactData.address}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone size={20} className="text-white/70" />
              <p className="text-white font-semibold text-base sm:text-lg">
                {contactData.phone}
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
