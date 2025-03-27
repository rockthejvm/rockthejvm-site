export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 14851185,
              name: "Welcome",
            },
            {
              id: 14851356,
              name: "How to Make the Best out of This Course",
            },
            {
              id: 14851378,
              name: "Scala Recap",
            },
            {
              id: 14851380,
              name: "Akka Recap",
            },
          ],
        },
        {
          name: "Introduction",
          lectures: [
            {
              id: 14851388,
              name: "Event Sourcing",
            },
            {
              id: 14851379,
              name: "Persistent Actors",
            },
            {
              id: 14851385,
              name: "Persisting Extras",
            },
            {
              id: 14851387,
              name: "Persistent Actors - Exercise",
            },
            {
              id: 14851383,
              name: "Multiple Persists",
            },
            {
              id: 14851382,
              name: "Snapshots",
            },
            {
              id: 14851384,
              name: "Recovery",
            },
            {
              id: 14851381,
              name: "Persist Async",
            },
          ],
        },
        {
          name: "Persistent Stores, Serialization and Integrations",
          lectures: [
            {
              id: 14851432,
              name: "Local Stores",
            },
            {
              id: 14851431,
              name: "PostgreSQL",
            },
            {
              id: 14851429,
              name: "Cassandra",
            },
            {
              id: 14851430,
              name: "Custom Serialization",
            },
          ],
        },
        {
          name: "Advanced Techniques and Best Practices",
          lectures: [
            {
              id: 14851467,
              name: "Event Adapters",
            },
            {
              id: 14851466,
              name: "Detaching the Domain Model from the Data Model",
            },
            {
              id: 14851468,
              name: "Akka Persistence Query",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14851505,
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
