import { useState, useEffect } from "react";

export default function Example(props) {
  const [price, setPrice] = useState("Free");

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

      if (course.price <= 0) {
        setPrice(`Free`);
      } else {
        setPrice(`$${course.price / 100}`);
      }
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

  return <div>{price}</div>;
}
