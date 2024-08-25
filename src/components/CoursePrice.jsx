import { useState, useEffect } from "react";

export default function Example(props) {
  const [price, setPrice] = useState(0);

  const getCoursePrice = async (pricingPlanId) => {
    try {
      const response = await fetch(`/api/purchase/${pricingPlanId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const course = await response.json();

      setPrice(course.price);
    } catch (error) {
      console.error("Failed to fetch course price:", error);
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      await getCoursePrice(props.pricingPlanId);
    };

    fetchPrice();
  }, []);

  return <div>{price <= 0 ? "Free" : `$${price / 100}`}</div>;
}
