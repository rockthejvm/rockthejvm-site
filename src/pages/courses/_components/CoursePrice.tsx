import centsToPrice from "@/utils/centsToPrice";

interface Props {
  priceInCents: number;
  currency: string;
  recurring: "nonrecurring" | "monthly" | "yearly";
  children?: React.ReactNode;
}

export default function CoursePrice(props: Props) {
  const { priceInCents, currency, recurring } = props;
  const price = centsToPrice(priceInCents, currency);

  return (
    <>
      <span className="mt-4 flex items-baseline gap-x-2 text-5xl font-bold tracking-tight text-content">
        {price}
      </span>
      {recurring !== "nonrecurring" && (
        <span className="text-base text-content">/{recurring}</span>
      )}
    </>
  );
}
