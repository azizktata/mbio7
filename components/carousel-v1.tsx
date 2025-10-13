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

export default function CarouselV1({
  visions,
}: {
  visions: { title: string; description: string; image: StaticImageData }[];
}) {
  //   const plugin = React.useRef(
  //     Autoplay({ delay: 2000, stopOnInteraction: true })
  //   );
  const myVisions = Object.values(visions);

  return (
    <Carousel
      className="w-full  "
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {myVisions.map((vision, index) => (
          <CarouselItem className="basis-full" key={index}>
            <Card className="h-[600px] relative">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  alt="Card background"
                  src={vision.image}
                  fill
                  priority
                  className="z-0 object-cover w-full object-bottom  rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-linear"></div>
              </div>
              <CardContent className="absolute inset-0 z-10 flex items-start justify-end">
                <div className="  flex flex-col mt-auto  ">
                  <h1 className="mb-4 max-w-md xl:max-w-3xl font-semibold text-4xl sm:text-5xl  text-white  tracking-wider">
                    {vision.title}
                  </h1>
                  <p className="text-base  text-gray-100 font-normal mb-4  max-w-xs sm:max-w-lg xl:max-w-xl tracking-widest">
                    {vision.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 rounded-none bg-blue-400/50 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2  rounded-none bg-blue-400/50 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
