export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Welcome",
          lectures: [
            {
              id: 16745687,
              name: "Welcome",
            },
            {
              id: 16745688,
              name: "Scala Recap",
            },
            {
              id: 16745689,
              name: "Spark Recap",
            },
          ],
        },
        {
          name: "Spark Performance Foundations",
          lectures: [
            {
              id: 16745681,
              name: "Core",
            },
            {
              id: 16745682,
              name: "Spark Job Anatomy",
            },
            {
              id: 16745683,
              name: "Reading Query Plans",
            },
            {
              id: 16745684,
              name: "Reading DAGs",
            },
            {
              id: 16745685,
              name: "The Different Spark APIs",
            },
            {
              id: 16745686,
              name: "Deploying and Configuring Spark Apps",
            },
          ],
        },
        {
          name: "Optimizing DataFrame Transformations (Mostly Joins)",
          lectures: [
            {
              id: 16745694,
              name: "General Join Mechanics",
            },
            {
              id: 16745695,
              name: "Joins Recap (optional)",
            },
            {
              id: 16745696,
              name: "Broadcast Joins",
            },
            {
              id: 16745697,
              name: "Column Pruning",
            },
            {
              id: 16745698,
              name: "Pre-Partitioning",
            },
            {
              id: 16745699,
              name: "Bucketing",
            },
            {
              id: 16745700,
              name: "Skewed Joins",
            },
          ],
        },
        {
          name: "Optimizing RDD Transformations (Mostly Joins)",
          lectures: [
            {
              id: 16745690,
              name: "Optimizing RDD Joins",
            },
            {
              id: 16745691,
              name: "Cogrouping",
            },
            {
              id: 16745692,
              name: "Broadcast Joins",
            },
            {
              id: 16745693,
              name: "Skewed Joins",
            },
          ],
        },
        {
          name: "Optimizing Key-Value RDDs",
          lectures: [
            {
              id: 16745702,
              name: "RDD Transformations",
            },
            {
              id: 16745703,
              name: "By Key Functions",
            },
            {
              id: 16745704,
              name: "Reusing JVM Objects, Part 1",
            },
            {
              id: 16745705,
              name: "Reusing JVM Objects, Part 2",
            },
            {
              id: 16745706,
              name: "Iterator-to-iterator Transformations",
            },
            {
              id: 16745707,
              name: "Iterator-to-iterator Transformations - Exercises",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 16745708,
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
