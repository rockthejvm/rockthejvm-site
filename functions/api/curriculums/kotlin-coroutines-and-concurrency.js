export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Prologue",
          lectures: [
            {
              id: 56581949,
              name: "Welcome!",
            },
            {
              id: 56581950,
              name: "Kotlin Essentials Recap",
            },
            {
              id: 56581982,
              name: "First Principles: Parallelism & Concurrency",
            },
          ],
        },
        {
          name: "JVM Concurrency",
          lectures: [
            {
              id: 56581334,
              name: "JVM Threads",
            },
            {
              id: 56581342,
              name: "JVM Threads Synchronization",
            },
            {
              id: 56581338,
              name: "JVM Virtual Threads (Project Loom)",
            },
          ],
        },
        {
          name: "Coroutines",
          lectures: [
            {
              id: 56581333,
              name: "Coroutines Basics & Suspend Functions",
            },
            {
              id: 56581340,
              name: "Coroutine Builders",
            },
            {
              id: 56581336,
              name: "Coroutine Scopes and Structured Concurrency",
            },
            {
              id: 56581341,
              name: "Cooperative Scheduling",
            },
            {
              id: 56581329,
              name: "Cancellation and Error Handling",
            },
            {
              id: 56581339,
              name: "Dispatchers and Coroutine Contexts",
            },
            {
              id: 56581330,
              name: "So, Why Coroutines?",
            },
          ],
        },
        {
          name: "Advanced Tools",
          lectures: [
            {
              id: 56581328,
              name: "Flows",
            },
            {
              id: 56581331,
              name: "Flows: Exercise",
            },
            {
              id: 56581337,
              name: "Channels",
            },
            {
              id: 56663588,
              name: "Testing Coroutines",
            },
          ],
        },
        {
          name: "Coroutines Project: Aktors",
          lectures: [
            {
              id: 56581344,
              name: "Intro to the Actor Model & First Steps",
            },
            {
              id: 56581343,
              name: "Programming Actors with Behaviors",
            },
            {
              id: 56581332,
              name: "Stopping Actors and Actor Contexts",
            },
            {
              id: 56581335,
              name: "Creating Child Actors",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 56581948,
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
