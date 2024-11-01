export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [
            {
              id: 37762616,
              name: "Welcome!",
            },
            {
              id: 37763021,
              name: "Scala Recap",
            },
            {
              id: 37763039,
              name: "Thread Model Limitations",
            },
          ],
        },
        {
          name: "Actors",
          lectures: [
            {
              id: 37763040,
              name: "Introduction to the Actor Model",
            },
            {
              id: 37763048,
              name: "Practical Intro to Actors",
            },
            {
              id: 37763052,
              name: "Actors: Exercises",
            },
            {
              id: 37763056,
              name: "How Actors Work",
            },
            {
              id: 37763059,
              name: "Managing Actor State",
            },
            {
              id: 37763063,
              name: "Child Actors",
            },
            {
              id: 37763067,
              name: "Child Actors: Exercise",
            },
            {
              id: 37763070,
              name: "Stopping Actors",
            },
            {
              id: 37763072,
              name: "Watching Actors",
            },
            {
              id: 37763075,
              name: "Antipattern: Breaking Actor Encapsulation",
            },
            {
              id: 37763077,
              name: "Actor Supervision",
            },
          ],
        },
        {
          name: "Testing",
          lectures: [
            {
              id: 37764108,
              name: "Intro to TestKit",
            },
            {
              id: 37764118,
              name: "Using TestProbes",
            },
            {
              id: 37764138,
              name: "Timed Assertions",
            },
            {
              id: 37764131,
              name: "Intercepting Logs",
            },
            {
              id: 37764148,
              name: "Synchronous Testing",
            },
          ],
        },
        {
          name: "Akka Infrastructure",
          lectures: [
            {
              id: 37764434,
              name: "Configuration",
            },
            {
              id: 37764438,
              name: "Schedulers",
            },
            {
              id: 37764441,
              name: "Timers",
            },
            {
              id: 37764448,
              name: "Routers",
            },
            {
              id: 37764453,
              name: "Dispatchers",
            },
            {
              id: 37764456,
              name: "Mailboxes",
            },
          ],
        },
        {
          name: "Advanced Patterns",
          lectures: [
            {
              id: 37765000,
              name: "Ask",
            },
            {
              id: 37765075,
              name: "Pipe",
            },
            {
              id: 37765079,
              name: "Stash",
            },
          ],
        },
        {
          name: "You Rock!",
          lectures: [
            {
              id: 37765094,
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
