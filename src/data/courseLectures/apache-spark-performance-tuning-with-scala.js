export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Warmup",
          lectures: [
            {
              id: 17570828,
              name: "Welcome & Setup",
            },
            {
              id: 17570834,
              name: "Scala Recap",
            },
            {
              id: 17570836,
              name: "Spark Recap",
            },
          ],
        },
        {
          name: "Foundation",
          lectures: [
            {
              id: 17570819,
              name: "Core",
            },
            {
              id: 17570820,
              name: "Spark Job Anatomy",
            },
            {
              id: 17570821,
              name: "Query Plans",
            },
            {
              id: 17570822,
              name: "The Spark UI and DAGs",
            },
            {
              id: 17570823,
              name: "A Tale of Two Spark APIs",
            },
            {
              id: 17570824,
              name: "Deploying & Configuring Spark Applications",
            },
            {
              id: 17570825,
              name: "Catalyst",
            },
            {
              id: 17570826,
              name: "Tungsten",
            },
          ],
        },
        {
          name: "Memory, Caching and Checkpointing",
          lectures: [
            {
              id: 17570842,
              name: "Executor Memory Architecture",
            },
            {
              id: 17570843,
              name: "Caching",
            },
            {
              id: 17570844,
              name: "Checkpointing",
            },
          ],
        },
        {
          name: "Partitioning",
          lectures: [
            {
              id: 17570845,
              name: "Repartition & Coalesce",
            },
            {
              id: 17570846,
              name: "Partitioning Problems",
            },
            {
              id: 17570847,
              name: "Shuffle Partitioning",
            },
            {
              id: 17570848,
              name: "Custom Partitioners",
            },
          ],
        },
        {
          name: "Performance Tuning, Problems and More",
          lectures: [
            {
              id: 17570837,
              name: "Optimizing Cluster Resource Allocation",
            },
            {
              id: 17570838,
              name: "Fixing Data Skews and Straggling Tasks",
            },
            {
              id: 17570839,
              name: "Serialization Problems, Part 1",
            },
            {
              id: 17570840,
              name: "Serialization Problems, Part 2",
            },
            {
              id: 17570841,
              name: "Kryo",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 17570849,
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
