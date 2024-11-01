export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 33520615,
              name: "Welcome",
            },
            {
              id: 33520616,
              name: "How to Make the Best out of This Course",
            },
          ],
        },
        {
          name: "The Absolute Basics",
          lectures: [
            {
              id: 33520632,
              name: "Values, Variables and Types",
            },
            {
              id: 33520633,
              name: "Expressions",
            },
            {
              id: 33520634,
              name: "Functions",
            },
            {
              id: 33520635,
              name: "Type Inference",
            },
            {
              id: 33520636,
              name: "Recursion",
            },
            {
              id: 33520637,
              name: "Call by Name and Call by Value",
            },
            {
              id: 33520638,
              name: "Default and Named Arguments",
            },
            {
              id: 33520639,
              name: "String Operations and Interpolations",
            },
          ],
        },
        {
          name: "Object-Oriented Programming in Scala",
          lectures: [
            {
              id: 33520617,
              name: "Object-Oriented Basics",
            },
            {
              id: 33520618,
              name: "Object-Oriented Basics: Exercises",
            },
            {
              id: 33520619,
              name: "Method Notations",
            },
            {
              id: 33520620,
              name: "Method Notations: Exercises",
            },
            {
              id: 33520622,
              name: "Scala Objects",
            },
            {
              id: 33520621,
              name: "Inheritance",
            },
            {
              id: 33520623,
              name: "Abstract Classes and Inheritance",
            },
            {
              id: 33520624,
              name: "Inheritance Exercises and Starting Our Own List",
            },
            {
              id: 33520627,
              name: "Anonymous Classes",
            },
            {
              id: 33520625,
              name: "Introduction to Generics",
            },
            {
              id: 33520628,
              name: "Exercise: Extending MyList",
            },
            {
              id: 33520629,
              name: "Case Classes",
            },
            {
              id: 33520630,
              name: "Handling Exceptions",
            },
            {
              id: 33520631,
              name: "Packaging and Imports",
            },
          ],
        },
        {
          name: "Functional Programming in Scala",
          lectures: [
            {
              id: 33520643,
              name: "What's a Function, Really?",
            },
            {
              id: 33520644,
              name: "Anonymous Functions",
            },
            {
              id: 33520645,
              name: "Higher-Order Functions and Curries",
            },
            {
              id: 33520646,
              name: "HOFs: Exercises",
            },
            {
              id: 33520647,
              name: "The Big 3: map, flatMap and filter",
            },
            {
              id: 33520648,
              name: "A Collections Overview",
            },
            {
              id: 33520649,
              name: "Sequences",
            },
            {
              id: 33520650,
              name: "Tuples and Maps",
            },
            {
              id: 33520651,
              name: "Maps: Exercises",
            },
            {
              id: 33520652,
              name: "Options",
            },
            {
              id: 33520653,
              name: "Try",
            },
          ],
        },
        {
          name: "Pattern Matching",
          lectures: [
            {
              id: 33520640,
              name: "Pattern Matching",
            },
            {
              id: 33520641,
              name: "ALL the Patterns!",
            },
            {
              id: 33520642,
              name: "Patterns Everywhere",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 33520614,
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
