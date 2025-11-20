export const _courses: {
  category: string;
  description: string;
  courses: {
    id: string;
    hasCoupon: boolean;
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
        hasCoupon: false,
        prices: { old: 190, new: 95 },
      },
      {
        id: "black-friday-2023-upgrade",
        hasCoupon: false,
        prices: { old: 435, new: 195 },
      },
      {
        id: "black-friday-2022-upgrade",
        hasCoupon: false,
        prices: { old: 1425, new: 325 },
      },
      {
        id: "black-friday-2021-upgrade",
        hasCoupon: false,
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
        hasCoupon: true,
        prices: { old: 495, new: 247.5 },
      },
      {
        id: "typelevel-rite-of-passage",
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 245, new: 122.5 },
      },
      {
        id: "the-kotlin-bundle",
        hasCoupon: true,
        prices: { old: 160, new: 80 },
      },
      {
        id: "the-apache-spark-bundle-with-scala",
        hasCoupon: true,
        prices: { old: 180, new: 90 },
      },
      {
        id: "the-akka-apache-pekko-bundle-with-scala",
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "advanced-scala",
        hasCoupon: true,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-projects",
        hasCoupon: true,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "scala-macros-and-metaprogramming",
        hasCoupon: true,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "scala-and-functional-programming-interview-practice",
        hasCoupon: true,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "scala-3-new-features",
        hasCoupon: true,
        prices: { old: 35, new: 17.5 },
      },
      {
        id: "scala-essentials-old",
        hasCoupon: true,
        prices: { old: 50, new: 25 },
      },
      {
        id: "advanced-scala-old",
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "advanced-kotlin",
        hasCoupon: true,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "kotlin-coroutines-and-concurrency",
        hasCoupon: true,
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
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "cats-effect",
        hasCoupon: true,
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
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-optimization-with-scala",
        hasCoupon: true,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "apache-spark-performance-tuning-with-scala",
        hasCoupon: true,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-streaming-with-scala",
        hasCoupon: true,
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
        hasCoupon: true,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "akka-apache-pekko-streams-with-scala",
        hasCoupon: true,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "akka-apache-pekko-http-with-scala",
        hasCoupon: true,
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
        hasCoupon: false,
        prices: { old: 0, new: 0 },
      },
      {
        id: "kotlin-at-light-speed",
        hasCoupon: false,
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
        hasCoupon: true,
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-persistence-with-scala",
        hasCoupon: true,
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-remoting-and-clustering-with-scala",
        hasCoupon: true,
        prices: { old: 50, new: 25 },
      },
      {
        id: "akka-classic-serialization-with-scala",hasCoupon: true,
        prices: { old: 30, new: 15 },
      },
    ],
  },
];
