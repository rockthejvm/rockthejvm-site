import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/assets/components/ui/carousel.tsx";

export default function CarouselSpacing(props) {
  const articleSlots = [
    { article: props.firstArticle, key: "firstArticle" },
    { article: props.secondArticle, key: "secondArticle" },
    { article: props.thirdArticle, key: "thirdArticle" },
    { article: props.fourthArticle, key: "fourthArticle" },
    { article: props.fifthArticle, key: "fifthArticle" },
  ];

  return (
    <section>
      <h2 className="mx-auto text-center">Related Articles</h2>
      <Carousel className="mx-auto w-full max-w-full p-4">
        <CarouselContent className="-ml-1 p-4">
          {articleSlots.map(({ article, key }) => (
            <CarouselItem
              key={key}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {article}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-black" />

        <CarouselNext className="bg-black" />
      </Carousel>
    </section>
  );
}
