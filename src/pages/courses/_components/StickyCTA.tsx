import PurchaseLink from "@/components/PurchaseLink";
import { useEffect, useState } from "react";

interface Props {
  currency: string;
  isFree: boolean;
  priceInCents: number;
  pricingPlanId: number;
  showMembership: boolean;
  title: string;
}

export default function StickyCTA({
  currency,
  isFree,
  priceInCents,
  pricingPlanId,
  showMembership,
  title,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("course-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry!.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const formattedPrice = (priceInCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-content/10 bg-secondary/95 px-4 py-3 shadow-2xl backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-content">
              {title}
            </p>
            {!isFree && (
              <p className="text-sm font-bold text-accent-1">{formattedPrice}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-4">
            {showMembership && (
              <a
                href="/memberships"
                className="hidden text-xs text-content-1/60 hover:text-content-1 hover:no-underline sm:block"
              >
                or get membership &rarr;
              </a>
            )}
            <PurchaseLink
              pricingPlanId={pricingPlanId}
              className="shrink-0 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-gray-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
            >
              {isFree ? "Enroll for Free" : "Enroll Now"}
            </PurchaseLink>
          </div>
        </div>
      </div>
    </div>
  );
}
