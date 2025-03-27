export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Prologue",
          lectures: [
            {
              id: 15088316,
              name: "Welcome",
            },
          ],
        },
        {
          name: "Introduction",
          lectures: [
            {
              id: 15088318,
              name: "Scala Recap",
            },
            {
              id: 15088319,
              name: "Spark Recap",
            },
            {
              id: 15088320,
              name: "Spark Streaming First Principles",
            },
          ],
        },
        {
          name: "Structured Streaming",
          lectures: [
            {
              id: 15088340,
              name: "Streaming DataFrames",
            },
            {
              id: 15088341,
              name: "Streaming Aggregations",
            },
            {
              id: 15088343,
              name: "Streaming Joins",
            },
            {
              id: 15088344,
              name: "Streaming Datasets",
            },
          ],
        },
        {
          name: "Low-Level Streaming with DStreams",
          lectures: [
            {
              id: 15088329,
              name: "Discretized Streams (DStreams)",
            },
            {
              id: 15088330,
              name: "DStreams Transformations",
            },
            {
              id: 15088331,
              name: "DStreams Window Functions",
            },
          ],
        },
        {
          name: "Spark Streaming Integrations",
          lectures: [
            {
              id: 15088323,
              name: "Kafka & Structured Streaming",
            },
            {
              id: 15088324,
              name: "Kafka & DStreams",
            },
            {
              id: 15088325,
              name: "JDBC with Postgres",
            },
            {
              id: 15088326,
              name: "Akka and Akka Streams",
            },
            {
              id: 15088328,
              name: "Cassandra",
            },
          ],
        },
        {
          name: "Twitter Sentiment Analysis",
          lectures: [
            {
              id: 15088345,
              name: "Setting up a Twitter App",
            },
            {
              id: 15088347,
              name: "Our First Custom Receiver",
            },
            {
              id: 15088348,
              name: "Reading Tweets",
            },
            {
              id: 15088349,
              name: "Reading Tweets: Exercises",
            },
            {
              id: 15088350,
              name: "Sentiment Analysis on Tweets using NLP",
            },
          ],
        },
        {
          name: "Advanced Spark Streaming",
          lectures: [
            {
              id: 15088332,
              name: "Event Time Windows",
            },
            {
              id: 15088333,
              name: "Event Time Windows: Exercises",
            },
            {
              id: 15088334,
              name: "Processing Time Windows",
            },
            {
              id: 15088336,
              name: "Watermarks",
            },
            {
              id: 15088337,
              name: "Watermarks, Part 2",
            },
            {
              id: 15088338,
              name: "Arbitrary Stateful Computation",
            },
            {
              id: 15088339,
              name: "Arbitrary Stateful Computation",
            },
          ],
        },
        {
          name: "The Science Project",
          lectures: [
            {
              id: 15088353,
              name: "Setting up the REST Server and the Kafka Broker",
            },
            {
              id: 15088354,
              name: "Integrating Spark Structured Streaming, Test, Run!",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 15088352,
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
