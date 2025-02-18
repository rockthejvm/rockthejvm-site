import { useCallback, useEffect, useState } from "react";

interface Props {
  pricingPlanId: number;
  active?: boolean;
}

interface Response {
  price: number;
}

export default function Example({ pricingPlanId, active = true }: Props) {
  const [price, setPrice] = useState("Free"),
    [loading, setLoading] = useState(true),
    [error, setError] = useState<string | null>(null),
    getCoursePrice = useCallback(async (pricingPlanId: number) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/purchase/${pricingPlanId}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const course: Response = await response.json();

        if (course.price <= 0) {
          setPrice("Free");
        } else {
          setPrice(`$${(course.price / 100).toFixed(2)}`);
        }
      } catch (error) {
        setError(
          `Failed to fetch course price: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
        // console.error("Failed to fetch course price:", error);
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    if (pricingPlanId > 0) {
      getCoursePrice(pricingPlanId);
    }
  }, [pricingPlanId, getCoursePrice]);

  if (!active) {
    return <div>Currently unavailable</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{price}</div>;
}
