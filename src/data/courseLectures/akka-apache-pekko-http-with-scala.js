export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Getting Started",
          lectures: [
            {
              id: 14958938,
              name: "Welcome",
            },
            {
              id: 14959159,
              name: "How to Make the Best out of This Course",
            },
            {
              id: 14959200,
              name: "Scala Recap",
            },
            {
              id: 14959198,
              name: "Akka Streams Recap",
            },
          ],
        },
        {
          name: "The Low-Level Server",
          lectures: [
            {
              id: 14959256,
              name: "The Low-Level Server API - Part 1",
            },
            {
              id: 14959259,
              name: "The Low-Level Server API - Part 2",
            },
            {
              id: 14959258,
              name: "Marshalling JSON",
            },
            {
              id: 14959257,
              name: "A Low-Level REST server with JSON",
            },
            {
              id: 14959255,
              name: "Handling Query Parameters",
            },
            {
              id: 14959260,
              name: "Low-Level HTTPS",
            },
          ],
        },
        {
          name: "The High-Level Server",
          lectures: [
            {
              id: 14959486,
              name: "Introduction to the High-Level API",
            },
            {
              id: 14959494,
              name: "Directives Breakdown - Part 1",
            },
            {
              id: 14959490,
              name: "Directives Breakdown - Part 2",
            },
            {
              id: 14959493,
              name: "A High-Level Server Example",
            },
            {
              id: 14959492,
              name: "The High-Level Server - Exercise",
            },
            {
              id: 14959487,
              name: "Marshalling JSON with Directives - Part 1",
            },
            {
              id: 14959485,
              name: "Marshalling JSON with Directives - Part 2",
            },
            {
              id: 14959482,
              name: "Handling HTTP Rejections",
            },
            {
              id: 14959488,
              name: "Handling Exceptions",
            },
            {
              id: 14959484,
              name: "Testing Routes with the Akka HTTP TestKit",
            },
            {
              id: 14959483,
              name: "WebSockets",
            },
            {
              id: 14959489,
              name: "Uploading Files",
            },
            {
              id: 14959491,
              name: "JSON Web Tokens (JWT) Authorization",
            },
          ],
        },
        {
          name: "The Client",
          lectures: [
            {
              id: 14959663,
              name: "The Connection-Level Client API",
            },
            {
              id: 14959662,
              name: "The Host-Level Client API",
            },
            {
              id: 14959664,
              name: "The Request-Level Client API",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14959672,
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
