export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Getting Started",
          lectures: [
            {
              id: 14900477,
              name: "Welcome",
            },
            {
              id: 14900482,
              name: "How to Make the Best out of This Course",
            },
            {
              id: 14900496,
              name: "Scala Recap",
            },
          ],
        },
        {
          name: "Streams Primer",
          lectures: [
            {
              id: 14900499,
              name: "Streams First Principles",
            },
            {
              id: 14900500,
              name: "Materializing Streams",
            },
            {
              id: 14900497,
              name: "Operator Fusion",
            },
            {
              id: 14900498,
              name: "Backpressure Basics",
            },
          ],
        },
        {
          name: "Stream Graphs",
          lectures: [
            {
              id: 14900536,
              name: "Intro to Graphs and the GraphDSL",
            },
            {
              id: 14900540,
              name: "Open Graphs and Graph Shapes",
            },
            {
              id: 14900537,
              name: "More Open Graphs",
            },
            {
              id: 14900539,
              name: "Graph Materialized Values",
            },
            {
              id: 14900538,
              name: "BidirectionalFlows",
            },
            {
              id: 14900535,
              name: "Graph Cycles",
            },
          ],
        },
        {
          name: "Stream Techniques and Best Practices",
          lectures: [
            {
              id: 14958108,
              name: "Integrating with Actors",
            },
            {
              id: 14958107,
              name: "Integrating with a General External Service",
            },
            {
              id: 14958111,
              name: "Advanced Backpressure",
            },
            {
              id: 14958110,
              name: "Fault Tolerance",
            },
            {
              id: 14958109,
              name: "Testing Streams",
            },
          ],
        },
        {
          name: "Advanced Streams",
          lectures: [
            {
              id: 14900568,
              name: "Dynamic Stream Handling",
            },
            {
              id: 14900570,
              name: "Substreams",
            },
            {
              id: 14900569,
              name: "Custom Graph Shapes",
            },
            {
              id: 14900566,
              name: "The GraphStage API - Part 1",
            },
            {
              id: 14900567,
              name: "The GraphStage API - Part 2",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14900577,
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
