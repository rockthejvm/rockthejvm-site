export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 34711709,
              name: "Welcome",
            },
          ],
        },
        {
          name: "A Taste of Advanced Scala",
          lectures: [
            {
              id: 34711734,
              name: "Scala Recap",
            },
            {
              id: 34711735,
              name: "Dark Syntax Sugars",
            },
            {
              id: 34711736,
              name: "Advanced Pattern Matching",
            },
          ],
        },
        {
          name: "Advanced Functional Programming",
          lectures: [
            {
              id: 34711698,
              name: "Partial Functions",
            },
            {
              id: 34711699,
              name: "Functional Collections: A Functional Set",
            },
            {
              id: 34711700,
              name: "The Functional Set, Level 2",
            },
            {
              id: 34711702,
              name: "Functional Collections",
            },
            {
              id: 34711703,
              name: "Currying and Partially Applied Functions",
            },
            {
              id: 34711704,
              name: "Lazy Evaluation",
            },
            {
              id: 34711705,
              name: "Lazy Evaluation Practice: A Potentially Infinite List",
            },
            {
              id: 34711706,
              name: "Lazy Lists Proficiency: Exercises",
            },
            {
              id: 34711707,
              name: "Monads",
            },
            {
              id: 34711708,
              name: "Monads: Exercises",
            },
          ],
        },
        {
          name: "Functional Concurrent Programming",
          lectures: [
            {
              id: 34711723,
              name: "Parallel Programming on the JVM",
            },
            {
              id: 34711724,
              name: "Concurrency Problems on the JVM",
            },
            {
              id: 34711725,
              name: "JVM Thread Communication, the Producer-Consumer Problem",
            },
            {
              id: 34711726,
              name: "Producer-Consumer, Level 2",
            },
            {
              id: 34711727,
              name: "Producer-Consumer, Level 3 + Exercises",
            },
            {
              id: 34711729,
              name: "Futures: Introduction",
            },
            {
              id: 34711730,
              name: "Futures: Functional Composition",
            },
            {
              id: 34711731,
              name: "Futures: Awaiting",
            },
            {
              id: 34711732,
              name: "Futures and Promises",
            },
            {
              id: 34720738,
              name: "Futures: Exercises",
            },
            {
              id: 34711733,
              name: "Parallel Collections",
            },
          ],
        },
        {
          name: "Contextual Abstractions",
          lectures: [
            {
              id: 34711738,
              name: "Given Instances & Using Clauses",
            },
            {
              id: 34711739,
              name: "Given & Using: Exercises",
            },
            {
              id: 34711740,
              name: "Extension Methods",
            },
            {
              id: 34711741,
              name: "Organizing Contextual Abstractions",
            },
            {
              id: 34711742,
              name: "Type Classes",
            },
            {
              id: 34711744,
              name: "Type Classes End-to-End Example: JSON Serialization",
            },
            {
              id: 34711743,
              name: "Context Functions",
            },
            {
              id: 34711745,
              name: "Implicit Conversions",
            },
            {
              id: 34711746,
              name: "Legacy (Scala 2) Contextual Abstractions: Implicits",
            },
          ],
        },
        {
          name: "Mastering the Type System",
          lectures: [
            {
              id: 34711712,
              name: "Advanced Inheritance",
            },
            {
              id: 34711713,
              name: "Variance",
            },
            {
              id: 34711714,
              name: "Variance Positions",
            },
            {
              id: 34711715,
              name: "Type Members",
            },
            {
              id: 34711716,
              name: "Path-Dependent Types",
            },
            {
              id: 34711721,
              name: "Opaque Type Aliases",
            },
            {
              id: 34711722,
              name: "Literal, Union and Intersection Types",
            },
            {
              id: 34711718,
              name: "Self-Types",
            },
            {
              id: 34711719,
              name: "F-Bounded Polymorphism",
            },
            {
              id: 34711717,
              name: "Structural Types",
            },
            {
              id: 34711720,
              name: "Higher-Kinded Types",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 34711711,
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
