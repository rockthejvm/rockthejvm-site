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
          {props.firstArticle && props.length >= 1 && (
            <CarouselItem
              key={0}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {props.firstArticle}
            </CarouselItem>
          )}
          {props.secondArticle && props.length >= 2 && (
            <CarouselItem
              key={1}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {props.secondArticle}
            </CarouselItem>
          )}
          {props.thirdArticle && props.length >= 3 && (
            <CarouselItem
              key={2}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {props.thirdArticle}
            </CarouselItem>
          )}
          {props.fourthArticle && props.length >= 4 && (
            <CarouselItem
              key={3}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {props.fourthArticle}
            </CarouselItem>
          )}
          {props.fifthArticle && props.length >= 5 && (
            <CarouselItem
              key={4}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {props.fifthArticle}
            </CarouselItem>
          )}
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  );
}
