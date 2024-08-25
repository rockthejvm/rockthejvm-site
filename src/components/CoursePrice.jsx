import { useState, useEffect } from "react";

export default function Example(props) {
  const [price, setPrice] = useState("test");

  const getCoursePrice = async (pricingPlanId) => {
    const res = await fetch(
      `https://be9b12de.astro-test-86r.pages.dev/api/purchase/${pricingPlanId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    const course = await res.json();

    console.log(course);

    setPrice(`${course.price / 100}`);
  };

  // useEffect(() => {
  //   if (props.pricingPlanId) {
  //     getCoursePrice(props.pricingPlanId);
  //   }
  // }, [props.pricingPlanId]);

  getCoursePrice(props.pricingPlanId);

  return <p className="text-inherit">{price}</p>;
}
