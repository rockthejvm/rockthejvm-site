export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Warmup",
          lectures: [
            {
              id: 59654505,
              name: "Welcome!",
            },
            {
              id: 59653475,
              name: "Custom String Interpolators",
            },
            {
              id: 59653498,
              name: "Match Types",
            },
          ],
        },
        {
          name: "Inlines",
          lectures: [
            {
              id: 59653500,
              name: "Intro to Inlines",
            },
            {
              id: 59653482,
              name: "Inline conditionals",
            },
            {
              id: 59653491,
              name: "Inline Summoning",
            },
            {
              id: 59653493,
              name: "Compile-Time Errors",
            },
            {
              id: 59653484,
              name: "Compile-Time Operations",
            },
            {
              id: 59653483,
              name: "Avoiding Type Erasure",
            },
            {
              id: 59653467,
              name: "Tuple Matching",
            },
            {
              id: 59653487,
              name: "Mirrors",
            },
            {
              id: 59653485,
              name: "Type Class Derivation",
            },
          ],
        },
        {
          name: "Macros",
          lectures: [
            {
              id: 59653486,
              name: "What's a Macro?",
            },
            {
              id: 59653468,
              name: "Quoting",
            },
            {
              id: 59653469,
              name: "Types",
            },
            {
              id: 59653464,
              name: "Quote Matching",
            },
            {
              id: 59653472,
              name: "Type Matching",
            },
            {
              id: 59653488,
              name: "Error Reporting",
            },
            {
              id: 59653463,
              name: "Givens and Summoning",
            },
            {
              id: 59653492,
              name: "Building Expressions",
            },
            {
              id: 59653465,
              name: "Lists of Expressions",
            },
            {
              id: 59653470,
              name: "Macro Reflection",
            },
            {
              id: 59653477,
              name: "Structural Types and Records",
            },
            {
              id: 59653473,
              name: "Displaying Trees",
            },
            {
              id: 59653490,
              name: "Symbols",
            },
            {
              id: 59653462,
              name: "Tree Matching",
            },
            {
              id: 59653480,
              name: "Val Defs",
            },
            {
              id: 59653466,
              name: "Def Defs",
            },
            {
              id: 59653496,
              name: "Mapping and Aggregating Trees",
            },
          ],
        },
        {
          name: "Mini-Project: Wartimizer",
          lectures: [
            {
              id: 59653499,
              name: "Intro and Objective",
            },
            {
              id: 59653471,
              name: "Infrastructure and Scaffolding",
            },
            {
              id: 59653489,
              name: "Wart Remover: String + Any",
            },
            {
              id: 59653478,
              name: "Code Optimizer: Collection Calls",
            },
            {
              id: 59653476,
              name: "Code Optimizer: Copy Chains",
            },
            {
              id: 59653474,
              name: "Copy Chains, Part 2",
            },
          ],
        },
        {
          name: "Mini-Project: Type-Safe JDBC",
          lectures: [
            {
              id: 59653501,
              name: "Intro",
            },
            {
              id: 59653497,
              name: "Scaffolding",
            },
            {
              id: 59653494,
              name: "Schemas",
            },
            {
              id: 59653479,
              name: "Column Mappings",
            },
            {
              id: 59653461,
              name: "Query Results",
            },
            {
              id: 59653495,
              name: "Query Results, Part 2",
            },
            {
              id: 59653481,
              name: "Magic Mapping at Compile Time",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 59654506,
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
