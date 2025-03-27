export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Getting Started",
          lectures: [
            {
              id: 15007163,
              name: "Welcome",
            },
            {
              id: 15008639,
              name: "Scala Recap",
            },
            {
              id: 15008643,
              name: "Akka Recap",
            },
          ],
        },
        {
          name: "Serialization",
          lectures: [
            {
              id: 15008635,
              name: "Custom Serialization",
            },
            {
              id: 15008638,
              name: "Kryo",
            },
            {
              id: 15008641,
              name: "Avro",
            },
            {
              id: 15008636,
              name: "Google Protocol Buffers (Protobuf)",
            },
            {
              id: 15008640,
              name: "2-5 benchmark",
            },
            {
              id: 15008637,
              name: "Benchmark Results",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 15008642,
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
