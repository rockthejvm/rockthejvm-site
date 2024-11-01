export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 14734851,
              name: "Welcome",
            },
            {
              id: 14734852,
              name: "How to Make the Best out of This Course",
            },
          ],
        },
        {
          name: "A Taste of Advanced Scala",
          lectures: [
            {
              id: 14734790,
              name: "Scala Recap",
            },
            {
              id: 14734789,
              name: "Dark Syntax Sugars",
            },
            {
              id: 14733762,
              name: "Advanced Pattern Matching, Part 1",
            },
            {
              id: 14733764,
              name: "Advanced Pattern Matching, Part 2",
            },
          ],
        },
        {
          name: "Advanced Functional Programming",
          lectures: [
            {
              id: 14733778,
              name: "Partial Functions",
            },
            {
              id: 14733780,
              name: "Functional Collections: A Functional Set",
            },
            {
              id: 14733797,
              name: "The Functional Set, Level 2",
            },
            {
              id: 14733753,
              name: "The Functional Set, Level 9000: A Potentially Infinite Set",
            },
            {
              id: 14733783,
              name: "Moar Functional Collections!",
            },
            {
              id: 14733760,
              name: "Currying and Partially Applied Functions",
            },
            {
              id: 14733792,
              name: "Lazy Evaluations",
            },
            {
              id: 14733761,
              name: "Lazy Evaluation Practice: A Potentially Infinite List",
            },
            {
              id: 14733794,
              name: "Streams/Lazy Lists Proficiency: Exercises",
            },
            {
              id: 14733755,
              name: "Monads",
            },
            {
              id: 14733757,
              name: "Monads: Exercises",
            },
          ],
        },
        {
          name: "Functional Concurrent Programming",
          lectures: [
            {
              id: 14733787,
              name: "Introduction to Parallel Programming on the JVM",
            },
            {
              id: 14733768,
              name: "Concurrency Problems on the JVM",
            },
            {
              id: 14733802,
              name: "JVM Thread Communication, the Producer-Consumer Problem",
            },
            {
              id: 14733754,
              name: "Producer-Consumer, Level 2",
            },
            {
              id: 14733796,
              name: "Producer-Consumer, Level 3 + Exercises",
            },
            {
              id: 14733759,
              name: "JVM Thread Communication Exercises",
            },
            {
              id: 14733793,
              name: "Futures and Promises, Part 1",
            },
            {
              id: 14733795,
              name: "Futures and Promises, Part 2",
            },
            {
              id: 14733782,
              name: "Futures and Promises, Part 3",
            },
            {
              id: 14733784,
              name: "Futures and Promises, Part 4 + Exercises",
            },
            {
              id: 14733786,
              name: "Scala & JVM Standard Parallel Libraries",
            },
          ],
        },
        {
          name: "Implicits",
          lectures: [
            {
              id: 14733785,
              name: "Enter Implicits",
            },
            {
              id: 14733799,
              name: "Organizing Implicits",
            },
            {
              id: 14733791,
              name: "Type Classes, Part 1",
            },
            {
              id: 14733800,
              name: "Type Classes, Part 2",
            },
            {
              id: 14733788,
              name: "Pimp My Library!",
            },
            {
              id: 14733763,
              name: "Type Classes, Part 3",
            },
            {
              id: 14733756,
              name: "Type Classes End-to-End Example: JSON Serialization",
            },
            {
              id: 14733777,
              name: "Type Classes Use Case: The Magnet Pattern",
            },
            {
              id: 14733773,
              name: "Scala <> Java conversions",
            },
          ],
        },
        {
          name: "Mastering the Type System",
          lectures: [
            {
              id: 14733767,
              name: "Advanced Inheritance",
            },
            {
              id: 14733772,
              name: "Variance",
            },
            {
              id: 14733770,
              name: "Variance: Exercises",
            },
            {
              id: 14733766,
              name: "Type Members",
            },
            {
              id: 14733775,
              name: "Inner Types",
            },
            {
              id: 14733801,
              name: "Structural Types",
            },
            {
              id: 14733781,
              name: "Self-Types",
            },
            {
              id: 14733779,
              name: "The (fancy-sounding) F-Bounded Polymorphism",
            },
            {
              id: 14733776,
              name: "Higher-Kinded Types",
            },
            {
              id: 14733798,
              name: "Reflection, Part 1",
            },
            {
              id: 14733774,
              name: "Reflection, Part 2",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14764110,
              name: "You Rock!",
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
