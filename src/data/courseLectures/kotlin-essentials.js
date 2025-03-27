export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Kotlin Foundations",
          lectures: [
            {
              id: 52301560,
              name: "Welcome!",
            },
            {
              id: 52301557,
              name: "Kotlin Basics",
            },
            {
              id: 52301590,
              name: "Expressions & Instructions - Basics",
            },
            {
              id: 52301564,
              name: "Expressions & Instructions, Part 2 - When Clauses",
            },
            {
              id: 52301558,
              name: "Expressions & Instructions, Part 3 - Loops",
            },
            {
              id: 52301563,
              name: "Functions",
            },
            {
              id: 52301585,
              name: "Functions - Exercise",
            },
          ],
        },
        {
          name: "Object-Oriented Programming in Kotlin",
          lectures: [
            {
              id: 52301567,
              name: "Object-Oriented Basics",
            },
            {
              id: 52301581,
              name: "Mutable Data Structures, Getters, Setters and Constructors",
            },
            {
              id: 52301580,
              name: "OOP Exercise",
            },
            {
              id: 52301562,
              name: "Objects and Companions",
            },
            {
              id: 52301592,
              name: "Nullables",
            },
            {
              id: 52301578,
              name: "OOP Exercise: Image Cropping",
            },
            {
              id: 52301587,
              name: "Inheritance",
            },
            {
              id: 52301582,
              name: "Abstract Classes and Interfaces",
            },
            {
              id: 52301925,
              name: "OOP Exercise: Blend Modes",
            },
            {
              id: 52301591,
              name: "Access Modifiers",
            },
            {
              id: 52301597,
              name: "OOP Exercise: The UI",
            },
            {
              id: 52301594,
              name: "Delegation",
            },
            {
              id: 52301569,
              name: "Generics",
            },
            {
              id: 52301559,
              name: "Collections",
            },
            {
              id: 52301566,
              name: "Exceptions",
            },
            {
              id: 52301556,
              name: "OOP Exercise: Image Processing",
            },
            {
              id: 52301565,
              name: "OOP Exercise: Image Processing, Part 2",
            },
          ],
        },
        {
          name: "Object-Oriented Kotlin Features",
          lectures: [
            {
              id: 52301574,
              name: "Method Notation and Special Methods",
            },
            {
              id: 52301573,
              name: "Operator Overloading",
            },
            {
              id: 52301571,
              name: "Extensions",
            },
            {
              id: 52301575,
              name: "Data Classes",
            },
            {
              id: 52301588,
              name: "Enums",
            },
            {
              id: 52301596,
              name: "Anonymous Classes",
            },
            {
              id: 52301589,
              name: "Nested and Inner Classes",
            },
            {
              id: 52301577,
              name: "Value Classes",
            },
          ],
        },
        {
          name: "Functional Programming in Kotlin",
          lectures: [
            {
              id: 52301583,
              name: "Function Values",
            },
            {
              id: 52301584,
              name: "Function Values - Exercise",
            },
            {
              id: 52301572,
              name: "Functional Collection API",
            },
            {
              id: 52301570,
              name: "Functional Programming Exercise: Kernel Filters",
            },
            {
              id: 52301576,
              name: "Higher-Order Functions and Currying",
            },
            {
              id: 52301595,
              name: "Scope Functions",
            },
            {
              id: 52301579,
              name: "SAM Interfaces",
            },
          ],
        },
        {
          name: "Operational Kotlin",
          lectures: [
            {
              id: 52301586,
              name: "Testing",
            },
            {
              id: 52301568,
              name: "Build Tools: Maven",
            },
            {
              id: 52301593,
              name: "Build Tools: Gradle",
            },
            {
              id: 52301910,
              name: "Building an Application",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 52301561,
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
