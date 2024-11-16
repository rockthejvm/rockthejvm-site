export const _courses: {
  category: string;
  courses: {
    id: string;
    productId: number;
    prices: {
      old: number;
      new: number;
    };
  }[];
}[] = [
  {
    category: "Product-Based Courses",
    courses: [
      {
        id: "zio-rite-of-passage",
        productId: 5192130,
        prices: { old: 495, new: 247.5 },
      },
      {
        id: "typelevel-rite-of-passage",
        productId: 4667616,
        prices: { old: 495, new: 247.5 },
      },
    ],
  },
  {
    category: "Bundles",
    courses: [
      {
        id: "the-scala-bundle",
        productId: 3998815,
        prices: { old: 195, new: 97.5 },
      },
      {
        id: "the-kotlin-bundle",
        productId: 5782585,
        prices: { old: 160, new: 80 },
      },
      {
        id: "the-apache-spark-bundle-with-scala",
        productId: 2012159,
        prices: { old: 180, new: 90 },
      },
      {
        id: "the-akka-apache-pekko-bundle-with-scala",
        productId: 3742053,
        prices: { old: 180, new: 90 },
      },
    ],
  },
  {
    category: "Scala",
    courses: [
      {
        id: "scala-essentials",
        productId: 3260415,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-and-functional-programming-interview-practice",
        productId: 2984435,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "advanced-scala",
        productId: 3406098,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "scala-3-new-features",
        productId: 3998364,
        prices: { old: 35, new: 17.5 },
      },
      {
        id: "scala-essentials-old",
        productId: 3259945,
        prices: { old: 50, new: 25 },
      },
      {
        id: "advanced-scala-old",
        productId: 1769641,
        prices: { old: 50, new: 25 },
      },
    ],
  },
  {
    category: "Kotlin",
    courses: [
      {
        id: "kotlin-essentials",
        productId: 5366085,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "advanced-kotlin",
        productId: 5645634,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "kotlin-coroutines-and-concurrency",
        productId: 5770038,
        prices: { old: 75, new: 37.5 },
      },
    ],
  },
  {
    category: "ZIO",
    courses: [
      {
        id: "zio",
        productId: 4130417,
        prices: { old: 95, new: 47.5 },
      },
    ],
  },
  {
    category: "Typelevel",
    courses: [
      {
        id: "cats",
        productId: 3307540,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "cats-effect",
        productId: 3306666,
        prices: { old: 95, new: 47.5 },
      },
    ],
  },
  {
    category: "Apache Flink",
    courses: [
      {
        id: "apache-flink-with-scala",
        productId: 3860349,
        prices: { old: 85, new: 42.5 },
      },
    ],
  },
  {
    category: "Apache Spark",
    courses: [
      {
        id: "apache-spark-essentials-with-scala",
        productId: 3886421,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-optimization-with-scala",
        productId: 3428819,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "apache-spark-performance-tuning-with-scala",
        productId: 3428855,
        prices: { old: 75, new: 37.5 },
      },
      {
        id: "apache-spark-streaming-with-scala",
        productId: 3886435,
        prices: { old: 75, new: 37.5 },
      },
    ],
  },
  {
    category: "Akka/Apache Pekko",
    courses: [
      {
        id: "akka-apache-pekko-essentials-with-scala",
        productId: 3741873,
        prices: { old: 85, new: 42.5 },
      },
      {
        id: "akka-apache-pekko-streams-with-scala",
        productId: 4245226,
        prices: { old: 95, new: 47.5 },
      },
      {
        id: "akka-apache-pekko-http-with-scala",
        productId: 1769902,
        prices: { old: 50, new: 25 },
      },
    ],
  },
  {
    category: "Still Free!",
    courses: [
      {
        id: "scala-at-light-speed",
        productId: 5766155,
        prices: { old: 0, new: 0 },
      },
      {
        id: "kotlin-at-light-speed",
        productId: 5388114,
        prices: { old: 0, new: 0 },
      },
    ],
  },
];
