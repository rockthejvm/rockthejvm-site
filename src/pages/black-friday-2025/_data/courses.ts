export const _courses: {
  category: string;
  description: string;
  courses: {
    id: string;
    prices: {
      old: number;
      new: number;
    };
  }[];
}[] = [
  {
    category: "Black Friday Upgrades",
    description: "If you bought previous years' Black Friday bundles, you can upgrade to all new courses published since at an outrageous price.",
    courses: [
      {
        id: "black-friday-2024-upgrade",
        prices: { old: 190, new: 95 },
      },
      {
        id: "black-friday-2023-upgrade",
        prices: { old: 435, new: 195 },
      },
      {
        id: "black-friday-2022-upgrade",
        prices: { old: 1425, new: 375 },
      },
      {
        id: "black-friday-2021-upgrade",
        prices: { old: 1585, new: 395 },
      },
    ],
  },
  {
    category: "Project-Based Courses",
    description: "Production-grade projects, built from scratch, to take your skills to the next level.",
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
    description: "The classical packs, at a massive discount.",
    courses: [
      {
        id: "the-scala-bundle",
        prices: { old: 245, new: 122.5 },
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
    description: "Everything you need to know about Scala, at the best discount of the year.",
    courses: [
      {
        id: "scala-essentials",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "advanced-scala",
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-projects",
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "scala-macros-and-metaprogramming",
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "scala-and-functional-programming-interview-practice",
        prices: { old: 95, new: 47.5 },
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
    description: "Master Kotlin with these in-depth courses, with massive discounts.",
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
    description: "Learn ZIO from the ground up, at an unbeatable price.",
    courses: [
      {
        id: "zio",
        prices: { old: 95, new: 47.5 },
      },
    ],
  },
  {
    category: "Typelevel",
    description: "Get up to speed with Typelevel libraries, at the best price.",
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
    description: "Master Apache Flink with Scala, at a massive discount.",
    courses: [
      {
        id: "apache-flink-with-scala",
        prices: { old: 85, new: 42.5 },
      },
    ],
  },
  {
    category: "Apache Spark",
    description: "Become an Apache Spark expert with Scala, at the best price.",
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
    description: "Learn Akka/Apache Pekko with Scala, at an unbeatable price.",
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
    description: "Can't discount these, but super valuable.",
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
    category: "Akka Classic",
    description: "For those who still need Akka Classic, this is your shot at a big discount.",
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
