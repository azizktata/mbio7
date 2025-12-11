"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React, { use } from "react";
import CustomButton from "./ui/customButton";
import { useLocale } from "next-intl";

export default function CarouselHero({
  heros,
}: {
  heros: { title: string; description: string; image: StaticImageData }[];
}) {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );
  const myHeros = Object.values(heros);
  const locale = useLocale();
  const cta = locale === "fr" ? "En Savoir Plus" : "Learn More";
  const ctaLink = locale === "fr" ? "/pages/utilisations" : "/pages/how-to-use";
  return (
    <Carousel
      className="w-full  "
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {myHeros.map((hero, index) => (
          <CarouselItem className="basis-full" key={index}>
            <Card className="h-[550px] lg:h-[650px] relative">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  alt="Card background"
                  src={hero.image}
                  fill
                  priority
                  className="z-0 object-cover w-full object-center  rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-linear"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-linear"></div>
              </div>
              <CardContent className="absolute inset-0 z-10 flex items-end justify-center ">
                <div className="  flex flex-col items-start sm:items-center mb-32 md:mb-26 ">
                  <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl  text-left sm:text-center text-white  tracking-wider">
                    {hero.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base  text-gray-100 font-normal mb-4 max-w-[75ch]  text-left sm:text-center  tracking-widest">
                    {hero.description}
                  </p>
                   <CustomButton label={cta} href={ctaLink}  className="self-start sm:self-center mt-4"/>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20  p-2 bg-transparent rounded-full  border-white text-white/70 group hover:bg-white/40 hover:text-mbioPrimary md:h-12 md:w-12" />
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20  p-2 bg-transparent rounded-full border-white text-white/70 group hover:bg-white/40 hover:text-mbioPrimary md:h-12 md:w-12" />
    </Carousel>
  );
}
