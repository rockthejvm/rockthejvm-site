export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "First Section",
          lectures: [
            {
              id: 12869417,
              name: "Welcome!",
            },
            {
              id: 12869427,
              name: "Scala Recap",
            },
          ],
        },
        {
          name: "Working with Lists",
          lectures: [
            {
              id: 12869423,
              name: "Lists Intro",
            },
            {
              id: 12869428,
              name: "Get K-th element (easy)",
            },
            {
              id: 12869430,
              name: "Length (easy)",
            },
            {
              id: 12869416,
              name: "Reverse (easy)",
            },
            {
              id: 12869421,
              name: "Concatenation (easy)",
            },
            {
              id: 12869424,
              name: "Remove K-th element (easy)",
            },
            {
              id: 12869429,
              name: "The big 3: map, flatMap, filter (easy)",
            },
            {
              id: 12869422,
              name: "Run-length Encoding (medium)",
            },
            {
              id: 12869415,
              name: "Duplicate Elements (medium)",
            },
            {
              id: 12869425,
              name: "Rotate List (medium)",
            },
            {
              id: 12869418,
              name: "Random Samples (medium)",
            },
            {
              id: 12869426,
              name: "An Improved flatMap (medium)",
            },
            {
              id: 12869420,
              name: "Insertion Sort (hard)",
            },
            {
              id: 12869419,
              name: "Merge Sort (hard)",
            },
            {
              id: 12869431,
              name: "Quick Sort (hard)",
            },
          ],
        },
        {
          name: "Numbers and Math",
          lectures: [
            {
              id: 12995155,
              name: "Prime check (easy)",
            },
            {
              id: 12995163,
              name: "Decompose into Primes (easy)",
            },
            {
              id: 12995162,
              name: "(bonus) Enhancing Numbers",
            },
            {
              id: 12995156,
              name: "Approximating Pi (medium)",
            },
            {
              id: 12995167,
              name: "Recurring Decimals (hard)",
            },
            {
              id: 30942238,
              name: "Largest Number (easy)",
            },
            {
              id: 30942552,
              name: "Reverse Integer (easy)",
            },
            {
              id: 30942826,
              name: "Parse Integer (medium)",
            },
            {
              id: 30943047,
              name: "Ugly Number (medium)",
            },
            {
              id: 30943571,
              name: "Duplicates (medium)",
            },
          ],
        },
        {
          name: "Strings",
          lectures: [
            {
              id: 12995169,
              name: "Count Chars (easy)",
            },
            {
              id: 12995164,
              name: "Anagram Check (medium)",
            },
            {
              id: 12995730,
              name: "Valid Parentheses (easy)",
            },
            {
              id: 12995731,
              name: "Generate Valid Parentheses (medium)",
            },
            {
              id: 12995732,
              name: "Justify (hard)",
            },
            {
              id: 30945161,
              name: "Ransom note (easy)",
            },
            {
              id: 30945577,
              name: "Compare Version Numbers (medium)",
            },
            {
              id: 30945864,
              name: "Multiply Strings (hard)",
            },
            {
              id: 30946060,
              name: "Reorganize Strings (medium)",
            },
            {
              id: 30946329,
              name: "Reverse Words (easy)",
            },
          ],
        },
        {
          name: "Working with Trees",
          lectures: [
            {
              id: 12995170,
              name: "Trees Intro",
            },
            {
              id: 12995168,
              name: "Check Leaves (easy)",
            },
            {
              id: 12995165,
              name: "Size (easy)",
            },
            {
              id: 12995173,
              name: "Collect Nodes at Level (medium)",
            },
            {
              id: 12995171,
              name: "Mirroring a Tree (medium)",
            },
            {
              id: 12995160,
              name: "Shape of you? (medium)",
            },
            {
              id: 30947853,
              name: "ToList (medium)",
            },
            {
              id: 30948117,
              name: "Path Sum (medium)",
            },
            {
              id: 30948259,
              name: "Path Sum 2 (hard)",
            },
            {
              id: 30948260,
              name: "Surveillance Cameras (hard)",
            },
          ],
        },
        {
          name: "Working with Graphs",
          lectures: [
            {
              id: 12995161,
              name: "Graphs Intro and Degrees",
            },
            {
              id: 12995159,
              name: "Path Check (medium)",
            },
            {
              id: 12995174,
              name: "Find Path (medium)",
            },
            {
              id: 12995166,
              name: "Make Undirected (medium)",
            },
            {
              id: 12995175,
              name: "Graph Coloring (hard)",
            },
            {
              id: 30948860,
              name: "Find Town Judge (easy)",
            },
            {
              id: 30948933,
              name: "University Courses (easy)",
            },
            {
              id: 30948934,
              name: "University Courses 2 (medium)",
            },
            {
              id: 30949371,
              name: "Computer Network Delay (hard)",
            },
          ],
        },
        {
          name: "Interesting Problems",
          lectures: [
            {
              id: 12995172,
              name: "ASCII Fractals with Sierpinski (medium)",
            },
            {
              id: 12995157,
              name: "N-Queens (hard)",
            },
            {
              id: 12995158,
              name: "Pocket Calculator (hard)",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 12995831,
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
