export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Introduction",
          lectures: [
            {
              id: 33903078,
              name: "Welcome, Setup and Tips",
            },
            {
              id: 33903082,
              name: "Scala Essentials Recap (optional)",
            },
            {
              id: 33903596,
              name: "Contextual Abstractions and Type Classes (Scala 2 version) (optional)",
            },
            {
              id: 33903637,
              name: "Contextual Abstractions and Type Classes (Scala 3 version) (optional)",
            },
            {
              id: 33903652,
              name: "Cats Type Classes Recap (optional)",
            },
          ],
        },
        {
          name: "Effects and IO",
          lectures: [
            {
              id: 33903688,
              name: "Effects",
            },
            {
              id: 33903708,
              name: "Effects: Exercises",
            },
            {
              id: 33903714,
              name: "IO: Introduction",
            },
            {
              id: 33903729,
              name: "IO: Exercises",
            },
            {
              id: 33903737,
              name: "IO: Error Handling",
            },
            {
              id: 33903741,
              name: "IO Apps",
            },
            {
              id: 33903751,
              name: "IO: Parallelism",
            },
            {
              id: 33903759,
              name: "IO: Traversal",
            },
            {
              id: 33903763,
              name: "IO: Recap",
            },
          ],
        },
        {
          name: "Cats Effect Concurrency",
          lectures: [
            {
              id: 33903787,
              name: "Fibers",
            },
            {
              id: 33903794,
              name: "Fibers: Exercises",
            },
            {
              id: 33903798,
              name: "How Fibers Work",
            },
            {
              id: 33903801,
              name: "The Bracket Pattern",
            },
            {
              id: 33903803,
              name: "Resources",
            },
            {
              id: 33903807,
              name: "IO Concurrency: Racing",
            },
            {
              id: 33903812,
              name: "IO Concurrency: Cancellation",
            },
            {
              id: 33903818,
              name: "IO Concurrency: Cancellation (exercises)",
            },
            {
              id: 33903829,
              name: "IO Concurrency: Blocking",
            },
            {
              id: 33903906,
              name: "IO Concurrency: Async",
            },
          ],
        },
        {
          name: "Cats Effect Concurrent Coordination",
          lectures: [
            {
              id: 33903970,
              name: "Ref",
            },
            {
              id: 33903974,
              name: "Ref: Exercises",
            },
            {
              id: 33903976,
              name: "Deferred",
            },
            {
              id: 33903980,
              name: "Deferred: Exercises",
            },
            {
              id: 33903981,
              name: "Ref + Deferred Exercise: A Purely Functional Mutex",
            },
            {
              id: 33903984,
              name: "Ref + Deferred Exercise: A Purely Functional Mutex, Part 2",
            },
            {
              id: 33903990,
              name: "Semaphore",
            },
            {
              id: 33903991,
              name: "CountDownLatch",
            },
            {
              id: 33904000,
              name: "CountDownLatch Exercise: Writing Our Own",
            },
            {
              id: 33904010,
              name: "CyclicBarrier",
            },
          ],
        },
        {
          name: "Polymorphic Effects",
          lectures: [
            {
              id: 33904021,
              name: "Polymorphic Cancellation: MonadCancel",
            },
            {
              id: 33904024,
              name: "Polymorphic Cancellation: Exercise",
            },
            {
              id: 33904031,
              name: "Polymorphic Fibers: Spawn",
            },
            {
              id: 33904041,
              name: "Polymorphic Coordination: Concurrent",
            },
            {
              id: 33904047,
              name: "Polymorphic Coordination: Exercise",
            },
            {
              id: 33904050,
              name: "Polymorphic Timeouts: Temporal",
            },
            {
              id: 33904053,
              name: "Polymorphic Synchronous Effects: Sync",
            },
            {
              id: 33904057,
              name: "Polymorphic Asynchronous Effects: Async",
            },
          ],
        },
        {
          name: "Errata",
          lectures: [
            {
              id: 35885986,
              name: "Mutex Locking Bug Fix",
            },
          ],
        },
        {
          name: "Congratulations",
          lectures: [
            {
              id: 33905569,
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
