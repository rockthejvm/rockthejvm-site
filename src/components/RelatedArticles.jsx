"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";

export default function CarouselSpacing(props) {
  return (
    <section>
      <h2 className="mx-auto text-center">Related Articles</h2>
      <Carousel className="mx-auto w-full max-w-full p-4">
        <CarouselContent className="-ml-1 p-4">
          <CarouselItem key={0} className="pl-4 md:basis-1/2 lg:basis-1/3">
            {props.firstArticle}
          </CarouselItem>
          <CarouselItem key={1} className="pl-4 md:basis-1/2 lg:basis-1/3">
            {props.secondArticle}
          </CarouselItem>
          <CarouselItem key={2} className="pl-4 md:basis-1/2 lg:basis-1/3">
            {props.thirdArticle}
          </CarouselItem>
          <CarouselItem key={3} className="pl-4 md:basis-1/2 lg:basis-1/3">
            {props.fourthArticle}
          </CarouselItem>
          <CarouselItem key={4} className="pl-4 md:basis-1/2 lg:basis-1/3">
            {props.fifthArticle}
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  );
}
