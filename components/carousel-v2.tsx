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
import { Container } from "./craft";
import { useLocale } from "next-intl";

export default function CarouselV2({
  images,
}: {
  images: { url: StaticImageData }[];
}) {
  //   const plugin = React.useRef(
  //     Autoplay({ delay: 2000, stopOnInteraction: true })
  //   );
  const myImages = Object.values(images);
  const locale = useLocale();
  return (
    <div className="w-full bg-gray-100/40 py-8">
      <Container>
        <h2 className="!my-0 font-semibold text-mbioPrimary text-3xl sm:text-5xl ">
          {locale === "fr" ? "Process de construction" : "Construction process"}
        </h2>
        <Carousel
          className="w-full  my-8"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {myImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 ">
                <div className="p-1">
                  <Card className="border-none">
                    <div className="relative w-full h-[700px]  overflow-hidden rounded-none border-none">
                      <Image
                        alt="Card background"
                        src={image.url}
                        fill
                        priority
                        className="z-0 object-cover w-full object-center  rounded-md"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-mbioPrimary rounded-sm" />
          <CarouselNext className="text-mbioPrimary rounded-sm" />
        </Carousel>
      </Container>
    </div>
  );
}
// CarouselContent className="">
//         {myImages.map((image, index) => (
//           <CarouselItem className=" basis-3 " key={index}>
//             <Card className=" ">
//               <div className="relative w-full h-full overflow-hidden bg-gray-100">
//                 <Image
//                   alt="Card background"
//                   src={image.url}
//                   fill
//                   priority
//                   className="z-0 object-cover w-full object-bottom  rounded-md"
//                 />
//               </div>

//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 rounded-none bg-blue-400/50 border-none text-white  hover:bg-white/40" />
//       <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2  rounded-none bg-blue-400/50 border-none text-white hover:bg-white/40" />
