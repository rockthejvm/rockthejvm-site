export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 14709710,
              name: "Welcome",
            },
          ],
        },
        {
          name: "The Absolute Basics",
          lectures: [
            {
              id: 14709547,
              name: "Values and Types",
            },
            {
              id: 14709567,
              name: "Expressions",
            },
            {
              id: 14709571,
              name: "Functions",
            },
            {
              id: 14709559,
              name: "Type Inference",
            },
            {
              id: 14709561,
              name: "Recursion",
            },
            {
              id: 14709544,
              name: "Call by Name and Call by Value",
            },
            {
              id: 14709541,
              name: "Default and Named Arguments",
            },
            {
              id: 14709563,
              name: "String Operations and Interpolations",
            },
          ],
        },
        {
          name: "Object-Oriented Programming in Scala",
          lectures: [
            {
              id: 14709572,
              name: "Object-Oriented Basics",
            },
            {
              id: 14709569,
              name: "Object-Oriented Basics: Exercises",
            },
            {
              id: 14709556,
              name: "Method Notations",
            },
            {
              id: 14709551,
              name: "Inheritance",
            },
            {
              id: 14709570,
              name: "Access Modifiers",
            },
            {
              id: 33521935,
              name: "Preventing Inheritance",
            },
            {
              id: 14709537,
              name: "Scala Objects",
            },
            {
              id: 14709538,
              name: "Abstract Classes and Traits",
            },
            {
              id: 14709557,
              name: "Object-Oriented Exercise: A Linked List",
            },
            {
              id: 14709555,
              name: "Generics",
            },
            {
              id: 14709549,
              name: "Anonymous Classes",
            },
            {
              id: 14709539,
              name: "Exercise: Extending MyList",
            },
            {
              id: 14709550,
              name: "Case Classes",
            },
            {
              id: 33526230,
              name: "Enums",
            },
            {
              id: 14709542,
              name: "Handling Exceptions",
            },
            {
              id: 14709552,
              name: "Imports and exports",
            },
          ],
        },
        {
          name: "Functional Programming in Scala",
          lectures: [
            {
              id: 14709568,
              name: "What's a Function, Really?",
            },
            {
              id: 14709553,
              name: "Anonymous Functions",
            },
            {
              id: 14709565,
              name: "Higher-Order Functions and Currying",
            },
            {
              id: 14709560,
              name: "HOFs & Currying: Exercises",
            },
            {
              id: 33526295,
              name: "HOFs & Currying: Exercises (part 2)",
            },
            {
              id: 14709558,
              name: "Map, flatMap, filter and for-comprehensions",
            },
            {
              id: 14709566,
              name: "Linear Collections: Seq, List, Vector, Array, Set, Range",
            },
            {
              id: 14709540,
              name: "Tuples and Maps",
            },
            {
              id: 14709546,
              name: "Tuples and Maps: Exercises",
            },
            {
              id: 14709564,
              name: "Handling Absence: Option",
            },
            {
              id: 14709562,
              name: "Handling Failure: Try",
            },
          ],
        },
        {
          name: "Scala Power",
          lectures: [
            {
              id: 14709548,
              name: "Pattern Matching",
            },
            {
              id: 14709554,
              name: "ALL the Patterns!",
            },
            {
              id: 14709543,
              name: "Patterns Everywhere",
            },
            {
              id: 33526372,
              name: "Hot Takes: Braceless Syntax",
            },
            {
              id: 33526385,
              name: "Hot Takes: Imperative Programming in Scala, Variables and Loops",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14769678,
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
