import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/assets/components/ui/carousel.tsx";

export default function CarouselSpacing(props) {
  const articleSlots = [
    props.firstArticle,
    props.secondArticle,
    props.thirdArticle,
    props.fourthArticle,
    props.fifthArticle,
  ];

  return (
    <section>
      <h2 className="mx-auto text-center">Related Articles</h2>
      <Carousel className="mx-auto w-full max-w-full p-4">
        <CarouselContent className="-ml-1 p-4">
          {articleSlots.map((article, index) => (
            <CarouselItem
              key={article.slug}
              className="h-auto pl-4 md:basis-1/2 lg:basis-1/3"
            >
              {article}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  );
}
