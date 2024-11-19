export const _courses: {
  category: string;
  courses: {
    id: string;
    prices: {
      old: number;
      new: number;
    };
  }[];
}[] = [
  {
    category: "Project-Based Courses",
    courses: [
      {
        id: "zio-rite-of-passage",
        prices: { old: 495, new: 247.5 },
      },
      {
        id: "typelevel-rite-of-passage",
        prices: { old: 495, new: 247.5 },
      },
    ],
  },
  {
    category: "Bundles",
    courses: [
      {
        id: "the-scala-bundle",
        prices: { old: 195, new: 97.5 },
      },
      {
        id: "the-kotlin-bundle",
        prices: { old: 160, new: 80 },
      },
      {
        id: "the-apache-spark-bundle-with-scala",
        prices: { old: 180, new: 90 },
      },
      {
        id: "the-akka-apache-pekko-bundle-with-scala",
        prices: { old: 180, new: 90 },
      },
    ],
  },
  {
    category: "Scala",
    courses: [
      {
        id: "scala-essentials",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-and-functional-programming-interview-practice",
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "advanced-scala",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-3-new-features",
        prices: { old: 35, new: 17.5 },
      },
      {
        id: "scala-essentials-old",
        prices: { old: 50, new: 25 },
      },
      {
        id: "advanced-scala-old",
        prices: { old: 50, new: 25 },
      },
    ],
  },
  {
    category: "Kotlin",
    courses: [
      {
        id: "kotlin-essentials",
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "advanced-kotlin",
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "kotlin-coroutines-and-concurrency",
        prices: { old: 75, new: 37.5 },
      },
    ],
  },
  {
    category: "ZIO",
    courses: [
      {
        id: "zio",
        prices: { old: 95, new: 47.5 },
      },
    ],
  },
  {
    category: "Typelevel",
    courses: [
      {
        id: "cats",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "cats-effect",
        prices: { old: 95, new: 47.5 },
      },
    ],
  },
  {
    category: "Apache Flink",
    courses: [
      {
        id: "apache-flink-with-scala",
        prices: { old: 85, new: 42.5 },
      },
    ],
  },
  {
    category: "Apache Spark",
    courses: [
      {
        id: "apache-spark-essentials-with-scala",
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-optimization-with-scala",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "apache-spark-performance-tuning-with-scala",
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-streaming-with-scala",
        prices: { old: 75, new: 37.5 },
      },
    ],
  },
  {
    category: "Akka/Apache Pekko",
    courses: [
      {
        id: "akka-apache-pekko-essentials-with-scala",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "akka-apache-pekko-streams-with-scala",
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "akka-apache-pekko-http-with-scala",
        prices: { old: 50, new: 25 },
      },
    ],
  },
  {
    category: "Still Free!",
    courses: [
      {
        id: "scala-at-light-speed",
        prices: { old: 0, new: 0 },
      },
      {
        id: "kotlin-at-light-speed",
        prices: { old: 0, new: 0 },
      },
    ],
  },
  {
    category: "Akka Classic Courses",
    courses: [
      {
        id: "akka-classic-essentials-with-scala",
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-persistence-with-scala",
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-remoting-and-clustering-with-scala",
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-serialization-with-scala",
        prices: { old: 30, new: 15 },
      },
    ],
  },
];
