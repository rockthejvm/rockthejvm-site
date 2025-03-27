export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Kotlin at Light Speed",
          lectures: [
            {
              id: 52534010,
              name: "Getting Started",
            },
            {
              id: 52534012,
              name: "Welcome!",
            },
            {
              id: 52534011,
              name: "Kotlin Basics",
            },
            {
              id: 52534013,
              name: "Object-Oriented Programming in Kotlin",
            },
            {
              id: 52534009,
              name: "Kotlin Collections",
            },
            {
              id: 52534014,
              name: "Functional Programming in Kotlin",
            },
            {
              id: 52534008,
              name: "Kotlin Features: Nullables, Special Methods, Extensions",
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
