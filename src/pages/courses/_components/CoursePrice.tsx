import { useCallback, useEffect, useState } from "react";

interface Props {
  pricingPlanId: number;
}

interface Response {
  pricing_plan: {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    price: number;
    currency: string;
    course_id: number;
    frequency: {
      type: string;
      billing_interval: string;
      billing_interval_count: number;
      access_limit_date: string | null;
      access_limit_interval: string | null;
      access_limit_duration: string | null;
    };
    description: string;
    free_trial_length: number | null;
    enrollment_cap: number | null;
  };
}

export default function Example({ pricingPlanId }: Props) {
  const [price, setPrice] = useState("Free");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCoursePrice = useCallback(async (pricingPlanId: number) => {
    setLoading(true);
    setError(null);
    try {
      // const options = {
      //   method: "GET",
      //   headers: {
      //     accept: "application/json",
      //     apiKey: import.meta.env.PUBLIC_REACT_APP_API_KEY || "",
      //   },
      // };

      // const response = await fetch(
      //   `https://developers.teachable.com/v1/pricing_plans/${pricingPlanId}`,
      //   options,
      // );

      const response = await fetch(`/api/purchase/${pricingPlanId}`);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
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
      console.error("Failed to fetch course price:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pricingPlanId > 0) {
      getCoursePrice(pricingPlanId);
    }
  }, [pricingPlanId, getCoursePrice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{price}</div>;
}
