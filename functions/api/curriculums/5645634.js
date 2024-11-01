export function onRequestGet() {
  return new Response(
    JSON.stringify({
      heading:
        "Become a Kotlin expert. Learn the rare knowledge of Kotlin internals and type system that will bring you to the top 1% of Kotlin developers.",
      name: "Advanced Kotlin",
      updatedLectureSections: [
        {
          name: "Mastering the Type System",
          lectures: [
            {
              id: 55015087,
              name: "Lambdas with Receivers and DSLs",
            },
            {
              id: 55015081,
              name: "DSLs: Exercise",
            },
            {
              id: 55015089,
              name: "Advanced Generics and Variance",
            },
            {
              id: 55015096,
              name: "Variance Positions",
            },
            {
              id: 55015093,
              name: "Type Aliases",
            },
            {
              id: 55015082,
              name: "Delegated Properties",
            },
            {
              id: 55015085,
              name: "Delegated Properties in the Standard Library",
            },
          ],
        },
        {
          name: "Welcome",
          lectures: [
            {
              id: 55067809,
              name: "Welcome!",
            },
            {
              id: 55015092,
              name: "Kotlin Essentials Recap",
            },
          ],
        },
        {
          name: "Kotlin Internals",
          lectures: [
            {
              id: 55015084,
              name: "Contracts",
            },
            {
              id: 55015090,
              name: "Inline Functions",
            },
            {
              id: 55015091,
              name: "Reified Types",
            },
            {
              id: 55015097,
              name: "Reflection: Basics",
            },
            {
              id: 55015094,
              name: "Reflection: Types",
            },
            {
              id: 55015088,
              name: "Reflection: Annotations",
            },
            {
              id: 55015086,
              name: "Reflection: Exercise",
            },
            {
              id: 55015083,
              name: "Reflection: Recap",
            },
            {
              id: 55015095,
              name: "Kotlin Symbol Processing (KSP)",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 55095941,
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
