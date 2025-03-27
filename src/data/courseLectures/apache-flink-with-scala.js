export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [
            {
              id: 38663137,
              name: "Welcome",
            },
            {
              id: 38663139,
              name: "Scala Recap",
            },
            {
              id: 38663140,
              name: "Flink: First Principles",
            },
          ],
        },
        {
          name: "Flink Essential Streams",
          lectures: [
            {
              id: 38663150,
              name: "DataStreams",
            },
            {
              id: 38663197,
              name: "DataStreams: Exercise",
            },
            {
              id: 38663203,
              name: "DataStreams: Explicit Transformations",
            },
            {
              id: 38663212,
              name: "Handling Late Data: Watermarks",
            },
            {
              id: 38663237,
              name: "Window Functions",
            },
            {
              id: 38663239,
              name: "Window Functions, Part 2",
            },
            {
              id: 38663243,
              name: "Window Functions: Exercise",
            },
            {
              id: 38663246,
              name: "Time Based Transformations",
            },
            {
              id: 38663250,
              name: "Triggers",
            },
            {
              id: 38663254,
              name: "Handling Multiple Streams",
            },
            {
              id: 38663271,
              name: "Partitions",
            },
          ],
        },
        {
          name: "Stateful Streams",
          lectures: [
            {
              id: 38663562,
              name: "State First Principles",
            },
            {
              id: 38663563,
              name: "Rich Functions",
            },
            {
              id: 38663570,
              name: "Keyed State",
            },
            {
              id: 38663572,
              name: "Keyed State, Part 2",
            },
            {
              id: 42543469,
              name: "Checkpoints",
            },
            {
              id: 38663574,
              name: "Broadcast State",
            },
          ],
        },
        {
          name: "Flink Integrations and IO",
          lectures: [
            {
              id: 38663579,
              name: "Integrations: Kafka",
            },
            {
              id: 38663583,
              name: "Integrations: JDBC",
            },
            {
              id: 38663598,
              name: "Integrations: Cassandra",
            },
            {
              id: 38663602,
              name: "Custom Sources",
            },
            {
              id: 38663604,
              name: "Custom Sinks",
            },
            {
              id: 38663609,
              name: "Side Outputs",
            },
          ],
        },
        {
          name: "Flink Operational Essentials",
          lectures: [
            {
              id: 38663619,
              name: "How Flink Runs on a Cluster",
            },
            {
              id: 38663623,
              name: "Managing and Submitting Applications",
            },
            {
              id: 38663629,
              name: "Managing Applications in the Flink UI",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 38663638,
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
