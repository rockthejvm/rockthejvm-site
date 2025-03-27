export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Scala at Light Speed!",
          lectures: [
            {
              id: 13122825,
              name: "Getting Started",
            },
            {
              id: 13122611,
              name: "The Absolute Basics",
            },
            {
              id: 13122607,
              name: "Scala as an Object-Oriented Language",
            },
            {
              id: 13122612,
              name: "Functional Programming in Scala",
            },
            {
              id: 13122609,
              name: "Pattern Matching",
            },
            {
              id: 13122610,
              name: "Advanced Bits",
            },
            {
              id: 33103926,
              name: "Scala 3 Contextual Abstractions",
            },
          ],
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
