export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [
            {
              id: 39891832,
              name: "Welcome",
            },
          ],
        },
        {
          name: "Scala 3: What's Changed",
          lectures: [
            {
              id: 39882188,
              name: "Core Syntax",
            },
            {
              id: 39882182,
              name: "Implicits Part 1: Givens",
            },
            {
              id: 39882177,
              name: "Givens Bonus: NotGiven",
            },
            {
              id: 39882186,
              name: "Implicits Part 2: Extension Methods",
            },
            {
              id: 39882184,
              name: "Implicits Part 3: Conversions",
            },
            {
              id: 39882181,
              name: "Minor Other Changes",
            },
          ],
        },
        {
          name: "Scala 3: What's Added",
          lectures: [
            {
              id: 39882176,
              name: "Infix Notation",
            },
            {
              id: 39882187,
              name: "New Function Features",
            },
            {
              id: 39882190,
              name: "Exports",
            },
            {
              id: 39882185,
              name: "Union and Intersection Types",
            },
            {
              id: 39882178,
              name: "Enums",
            },
            {
              id: 39882192,
              name: "Opaque Types",
            },
            {
              id: 39882191,
              name: "Match Types",
            },
            {
              id: 39882180,
              name: "Type Lambdas",
            },
          ],
        },
        {
          name: "Scala 3: What's Removed",
          lectures: [
            {
              id: 39882189,
              name: "Syntax",
            },
            {
              id: 39882183,
              name: "Organization",
            },
            {
              id: 39882179,
              name: "Abstract Type Projections",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 39893703,
              name: "Congratulations!",
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
