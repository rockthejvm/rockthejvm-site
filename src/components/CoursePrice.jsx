// import { useState, useEffect } from "react";

// export default function Example(props) {
//   const [price, setPrice] = useState("");

//   const getCoursePrice = async (pricingPlanId) => {
//     const response = await fetch(
//       `https://be9b12de.astro-test-86r.pages.dev/api/purchase/${pricingPlanId}`,
//       {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       },
//     );

//     const course = await response.json();

//     console.log(course);

//     setPrice(`${course.price / 100}`);
//   };

//   useEffect(() => {
//     console.log("WORKING");

//     getCoursePrice(props.pricingPlanId);
//   }, []);

//   return <p className="text-inherit">{price}</p>;
// }

// import React, { useState, useEffect } from "react";

// // Define the type for the response from the API
// interface PriceResponse {
//   price: number;
// }

// const PriceComponent: React.FC = () => {
//   // State to hold the price
//   const [price, setPrice] = useState<number | null>(null);
//   // State to handle loading state
//   const [loading, setLoading] = useState<boolean>(false);
//   // State to handle errors
//   const [error, setError] = useState<string | null>(null);

//   // Function to fetch price from the API
//   const fetchPrice = async () => {
//     console.log("TEST1");
//     setLoading(true);
//     setError(null);
//     try {
//       console.log("TEST2");
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//       ); // Replace with your API endpoint
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data: PriceResponse = (await response.json())[0]["id"];
//       console.log("TEST3");
//       setPrice(data.price);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unknown error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Effect to fetch the price when the component mounts
//   useEffect(() => {
//     console.log("TEST5");
//     fetchPrice();
//   }, []);

//   return (
//     <div>
//       <h1>Price Component</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {price !== null && <p>Price: ${price.toFixed(2)}</p>}
//     </div>
//   );
// };

// export default PriceComponent;
// import React, { useState } from "react";

// const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Counter;

import { useState, useEffect } from "react";

export default function Example(props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");

  const getCoursePrice = async (pricingPlanId) => {
    console.log("RUNNING getCoursePrice");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      // const response = await fetch(
      //   `https://be9b12de.astro-test-86r.pages.dev/api/purchase/${pricingPlanId}`,
      //   {
      //     method: "GET",
      //     headers: { "Content-Type": "application/json" },
      //   },
      // );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const course = await response.json();
      console.log("Course data:", course);

      // setPrice(`${course.price / 100}`);

      setPrice(`${course[0].id}`);
    } catch (error) {
      console.error("Failed to fetch course price:", error);
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      console.log("RUNNING fetchPrice");
      await getCoursePrice(5654540);
      console.log("Setting count to 69");
      setCount(69);
    };

    fetchPrice();
  }, []);

  return (
    <div>
      <h1>
        Counter: {count} {price}
      </h1>
      <p>HELLO</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
