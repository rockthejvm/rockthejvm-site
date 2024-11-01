export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Prologue",
          lectures: [
            {
              id: 41601071,
              name: "Welcome",
            },
            {
              id: 41601137,
              name: "Scala Essentials Recap",
            },
            {
              id: 41601141,
              name: "Variance",
            },
            {
              id: 41601143,
              name: "Contextual Abstractions (Scala 2)",
            },
            {
              id: 41601148,
              name: "Contextual Abstractions (Scala 3)",
            },
          ],
        },
        {
          name: "Introduction to ZIO",
          lectures: [
            {
              id: 41601152,
              name: "Effects",
            },
            {
              id: 41601155,
              name: "Effects: Exercises",
            },
            {
              id: 41601191,
              name: "ZIO",
            },
            {
              id: 41601193,
              name: "ZIO: Exercises",
            },
            {
              id: 41601195,
              name: "ZIO Applications",
            },
            {
              id: 41601199,
              name: "ZIO: Error Handling",
            },
            {
              id: 41601203,
              name: "ZIO: Error Handling, Part 2",
            },
            {
              id: 41601205,
              name: "ZIO: Dependencies and ZLayers",
            },
            {
              id: 41601208,
              name: "ZIO: ZLayers, Part 2",
            },
          ],
        },
        {
          name: "ZIO Concurrency",
          lectures: [
            {
              id: 41601363,
              name: "Fibers",
            },
            {
              id: 41601397,
              name: "Fibers: Exercises",
            },
            {
              id: 41601399,
              name: "How Fibers Work",
            },
            {
              id: 41601403,
              name: "Interruptions",
            },
            {
              id: 41601405,
              name: "Parallelism",
            },
            {
              id: 41601408,
              name: "Resources",
            },
            {
              id: 41601414,
              name: "Blocking Effects",
            },
            {
              id: 41601418,
              name: "Mastering Interruptions",
            },
            {
              id: 41601447,
              name: "Asynchronous Effects",
            },
            {
              id: 41601449,
              name: "Schedules, Retries and Repeats",
            },
          ],
        },
        {
          name: "ZIO Concurrent Coordination",
          lectures: [
            {
              id: 41603579,
              name: "Refs",
            },
            {
              id: 41603580,
              name: "Promises",
            },
            {
              id: 41603581,
              name: "Promises: Exercises",
            },
            {
              id: 41603584,
              name: "Ref + Promise Exercise: Mutex",
            },
            {
              id: 41603586,
              name: "Mutex, Part 2",
            },
            {
              id: 41603589,
              name: "Semaphores",
            },
            {
              id: 41603591,
              name: "STM: Transactional Effects",
            },
            {
              id: 41603595,
              name: "STM: Transactional Data Structures",
            },
            {
              id: 41603598,
              name: "STM: Transactional Concurrent Coordination",
            },
          ],
        },
        {
          name: "Testing ZIO Applications",
          lectures: [
            {
              id: 41603601,
              name: "ZIO Testing Basics",
            },
            {
              id: 41603604,
              name: "ZIO Testing with JUnit",
            },
            {
              id: 41603631,
              name: "Testing Services and Dependencies",
            },
            {
              id: 41603633,
              name: "Property-Based Testing",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 41603660,
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
