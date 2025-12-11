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
import React from "react";

export default function CarouselV1({
  visions,
}: {
  visions: { title: string; description: string; image: StaticImageData }[];
}) {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    );
  const myVisions = Object.values(visions);

  return (
    <Carousel
      className="w-full  "
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {myVisions.map((vision, index) => (
          <CarouselItem className="basis-full" key={index}>
            <Card className="h-[500px] relative bg-mbioSecondary">
              <div className="relative w-full h-full overflow-hidden bg-mbioSecondary">
                <Image
                  alt="Card background"
                  src={vision.image}
                  fill
                  priority
                  className="z-0 object-contain object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-linear"></div>
              </div>
              <CardContent className="absolute inset-0 z-10 flex items-center justify-start p-8 md:p-16 ">
                <div className="  flex flex-col  mt-24 ">
                  <h1 className="mb-4 max-w-md xl:max-w-2xl font-semibold text-4xl sm:text-5xl  text-white  ">
                    {vision.title}
                  </h1>
                  <p className="text-base  text-gray-100 font-normal mb-4  max-w-xs sm:max-w-lg xl:max-w-xl tracking-wider">
                    {vision.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={'outline'}  className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 bg-transparent rounded-full  border-white text-white/70 group hover:bg-white/40 hover:text-mbioPrimary h-12 w-12" />
      <CarouselNext variant={'outline'} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2 bg-transparent  rounded-full border-white text-white/70 group hover:bg-white/40 hover:text-mbioPrimary hover:bg-white/40 h-12 w-12" />
    </Carousel>
  );
}
