export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 23728899,
              name: "Welcome",
            },
            {
              id: 23728958,
              name: "How to Make the Best Out of This Course",
            },
            {
              id: 23728909,
              name: "Scala Essentials Recap",
            },
            {
              id: 23728905,
              name: "Scala Implicits Recap",
            },
            {
              id: 23728908,
              name: "Type Classes",
            },
            {
              id: 23728896,
              name: "Introduction to Cats",
            },
            {
              id: 23728901,
              name: "Type Classes and Variance",
            },
          ],
        },
        {
          name: "Abstract Math for Fun and Profit",
          lectures: [
            {
              id: 23728914,
              name: "Semigroups",
            },
            {
              id: 23728891,
              name: "Monoids",
            },
            {
              id: 23728900,
              name: "Functors",
            },
            {
              id: 23728917,
              name: "Monads, Part 1",
            },
            {
              id: 23728902,
              name: "Monads, Part 2",
            },
            {
              id: 23728907,
              name: "Using Monads",
            },
            {
              id: 23728903,
              name: "Custom Monads",
            },
            {
              id: 23728892,
              name: "Monad Transformers",
            },
          ],
        },
        {
          name: "Data Manipulation",
          lectures: [
            {
              id: 23728894,
              name: "Readers",
            },
            {
              id: 23728904,
              name: "Writers",
            },
            {
              id: 23728895,
              name: "Evaluation",
            },
            {
              id: 23728920,
              name: "State",
            },
            {
              id: 23728910,
              name: "Data Validation, Part 1",
            },
            {
              id: 23728911,
              name: "Data Validation, Part 2",
            },
          ],
        },
        {
          name: "Type Classes We Can't Live Without",
          lectures: [
            {
              id: 23728918,
              name: "Semigroupal",
            },
            {
              id: 23728912,
              name: "Applicative",
            },
            {
              id: 23728915,
              name: "Weaker Applicatives: Apply",
            },
            {
              id: 23728921,
              name: "Weaker Monads: FlatMap",
            },
            {
              id: 23728898,
              name: "Handling Errors",
            },
            {
              id: 23728916,
              name: "Folding",
            },
            {
              id: 23728919,
              name: "Traversing, Part 1",
            },
            {
              id: 23728906,
              name: "Traversing, Part 2",
            },
          ],
        },
        {
          name: "Bonus: Some Alien Bits",
          lectures: [
            {
              id: 23728897,
              name: "Kleisli",
            },
            {
              id: 23728893,
              name: "Contravariant",
            },
            {
              id: 23728913,
              name: "Invariant",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 23728959,
              name: "You ROCK!",
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
