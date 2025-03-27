export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Welcome",
          lectures: [
            {
              id: 14835663,
              name: "Welcome",
            },
            {
              id: 14837076,
              name: "How to Make the Best out of This Course",
            },
          ],
        },
        {
          name: "Introduction",
          lectures: [
            {
              id: 14837078,
              name: "Scala Recap",
            },
            {
              id: 14837079,
              name: "Advanced Scala Recap",
            },
            {
              id: 14837075,
              name: "Multithreading Recap",
            },
            {
              id: 14837077,
              name: "Limitations of the Standard Thread Model",
            },
          ],
        },
        {
          name: "Actors",
          lectures: [
            {
              id: 14837108,
              name: "Actors Intro",
            },
            {
              id: 14837114,
              name: "Actors, Messages, Behaviors - Part 1",
            },
            {
              id: 14837116,
              name: "Actors, Messages, Behaviors - Part 2",
            },
            {
              id: 14837115,
              name: "Actors, Messages, Behaviors - Exercises",
            },
            {
              id: 14837118,
              name: "How Actors Work",
            },
            {
              id: 14837112,
              name: "Changing Actor Behavior - Part 1",
            },
            {
              id: 14837113,
              name: "Changing Actor Behavior - Part 2",
            },
            {
              id: 14837109,
              name: "Changing Actor Behavior - Exercises",
            },
            {
              id: 14837117,
              name: "Child Actors",
            },
            {
              id: 14837111,
              name: "Child Actors - Exercises",
            },
            {
              id: 14837110,
              name: "Actor Logging",
            },
            {
              id: 14837119,
              name: "Configuring Akka",
            },
          ],
        },
        {
          name: "Testing Actors",
          lectures: [
            {
              id: 14837205,
              name: "Intro to TestKit",
            },
            {
              id: 14837201,
              name: "TestProbes",
            },
            {
              id: 14837204,
              name: "Timed Assertions",
            },
            {
              id: 14837203,
              name: "Intercepting Logs",
            },
            {
              id: 14837202,
              name: "Synchronous Testing",
            },
          ],
        },
        {
          name: 'Fault Tolerance, a.k.a. "Let it Crash"',
          lectures: [
            {
              id: 14837253,
              name: "Starting and Stopping Actors",
            },
            {
              id: 14837254,
              name: "Actor Lifecycle",
            },
            {
              id: 14837252,
              name: "Supervision",
            },
            {
              id: 14837251,
              name: "The Backoff Supervisor Pattern",
            },
          ],
        },
        {
          name: "Akka Infrastructure",
          lectures: [
            {
              id: 14837300,
              name: "Schedulers and Timers",
            },
            {
              id: 14837302,
              name: "Delegating Tasks with Routers",
            },
            {
              id: 14837299,
              name: "Custom Thread Management with Dispatchers",
            },
            {
              id: 14837301,
              name: "Custom Message Processing with Mailboxes",
            },
          ],
        },
        {
          name: "Advanced Patterns",
          lectures: [
            {
              id: 14837326,
              name: "Stashing Messages",
            },
            {
              id: 14837325,
              name: "The Ask Pattern",
            },
            {
              id: 14837327,
              name: "Finite State Machines (FSM) - Part 1",
            },
            {
              id: 14837324,
              name: "Finite State Machines - Part 2",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14837334,
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
