import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import fs from "fs";
import path from "path";

const articleFiles = new Map();

const articleObjs = [];

function ThroughDirectory(directory, articleDir) {
  fs.readdirSync(directory).forEach((file) => {
    const Absolute = path.join(directory, file);
    let fileName = file.toString();

    if (fileName.indexOf(".") >= 0) {
      fileName = fileName.substring(0, fileName.indexOf("."));
    }
    console.log(`${fileName}, ${directory}, ${articleDir}`);
    if (fs.statSync(Absolute).isDirectory())
      return ThroughDirectory(Absolute, fileName);
    else if (file.endsWith(".mdx") || file.endsWith(".md"))
      articleFiles.set(fileName == "index" ? articleDir : fileName, Absolute);
    else console.log("NOTHING DONE");
  });
}

function buildArticleJson() {
  console.log(`Length: ${articleFiles.length}`);
  articleFiles.forEach((value, key) => {
    console.log(`${key}, ${value}`);
    const obj = {
      slug: key,
      content: fs.readFileSync(path.join(value), "utf8").substring(0, 3000),
    };
    // console.log(obj);
    articleObjs.push(obj);
  });

  console.log(articleObjs.length);
}

// Custom function you want to run
async function addEmbeddedArticles() {
  console.log("Starting Astro build...");
  // Add your logic here
  // For example, generating data files, cleaning directories, etc.

  const directory = "./src/content/articles"; // Replace with your directory path

  ThroughDirectory(directory, null);
  buildArticleJson();

  console.log("working");
  console.log(articleObjs);

  try {
    const externalResponse = await fetch(
      "https://related-articles.andrei-023.workers.dev/add_articles",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articles: articleObjs }),
      },
    );

    console.log(`RESPONSE: ${(await externalResponse.json()).body}`);
  } catch (error) {
    console.error("Error sending files:", error);
  }
}

// Custom Astro integration
function buildStart() {
  return {
    name: "my-build-start",
    hooks: {
      "astro:build:start": async () => {
        addEmbeddedArticles();
      },
    },
  };
}

export default defineConfig({
  site: "https://rockthejvm.com",
  integrations: [
    buildStart(),
    icon({
      include: {
        "fa6-brands": [
          "facebook",
          "github",
          "linkedin",
          "x-twitter",
          "youtube",
        ],
        "fa6-solid": ["caret-up", "house", "table-list", "rss"],
        heroicons: ["computer-desktop", "moon", "sun"],
      },
    }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [sectionize],
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
    },
  },
  redirects: {
    // Internal
    "/articles": "/articles/1",
    // Legal
    "/p/about-us": "/about",
    "/p/home": "/",
    "/p/logo-trademarks": "/legal/trademarks",
    "/p/membership": "/memberships",
    "/p/privacy": "/legal/privacy",
    "/p/team-pack": "/memberships",
    "/p/terms": "/legal/terms",
    // Courses
    "/p/advanced-kotlin": "/courses/advanced-kotlin",
    "/p/advanced-scala": "/courses/advanced-scala",
    "/p/akka-classic-essentials": "/courses/akka-classic-essentials-with-scala",
    "/p/akka-essentials": "/courses/akka-apache-pekko-essentials-with-scala",
    "/p/akka-http": "/courses/akka-apache-pekko-http-with-scala",
    "/p/akka-persistence": "/courses/akka-classic-persistence-with-scala",
    "/p/akka-streams": "/courses/akka-apache-pekko-streams-with-scala",
    "/p/cats-effect": "/courses/cats-effect",
    "/p/cats": "/courses/cats",
    "/p/flink": "/courses/apache-flink-with-scala",
    "/p/kotlin-at-light-speed": "/courses/kotlin-at-light-speed",
    "/p/kotlin-bundle": "/courses/the-kotlin-bundle",
    "/p/kotlin-coroutines": "/courses/kotlin-coroutines-and-concurrency",
    "/p/kotlin-essentials": "/courses/kotlin-essentials",
    "/p/scala-3-new-features": "/courses/scala-3-new-features",
    "/p/scala-advanced-old": "/courses/advanced-scala-old",
    "/p/scala-at-light-speed": "/courses/scala-at-light-speed",
    "/p/scala-functional-programming-interview-practice":
      "/courses/scala-and-functional-programming-interview-practice",
    "/p/scala-old": "/courses/scala-essentials-old",
    "/p/scala": "/courses/scala-essentials",
    "/p/spark-essentials": "/courses/apache-spark-essentials-with-scala",
    "/p/spark-optimization": "/courses/apache-spark-optimization-with-scala",
    "/p/spark-performance-tuning":
      "/courses/apache-spark-performance-tuning-with-scala",
    "/p/spark-streaming": "/courses/apache-spark-streaming-with-scala",
    "/p/the-akka-bundle": "/courses/the-akka-apache-pekko-bundle-with-scala",
    "/p/the-scala-bundle": "/courses/the-scala-bundle",
    "/p/the-spark-bundle": "/courses/the-apache-spark-bundle-with-scala",
    "/p/typelevel-rite-of-passage": "/courses/typelevel-rite-of-passage",
    "/p/zio-rite-of-passage": "/courses/zio-rite-of-passage",
    "/p/zio": "/courses/zio",
    // Articles
    "/articles/3-tricks-for-cbn": "/articles/3-call-by-name-tricks-in-scala",
    "/articles/8-pm-tricks": "/articles/8-pattern-matching-tricks-in-scala",
    "/articles/a-5-minute-akka-http-client":
      "/articles/sending-http-requests-with-scala-and-akka-in-5-minutes",
    "/articles/abstract-classes-vs-traits":
      "/articles/abstract-classes-vs-traits-in-scala-differences",
    "/articles/akka-actor-discovery":
      "/articles/akka-typed-actor-discovery-with-akka-receptionist",
    "/articles/akka-cassandra-project":
      "/articles/a-scala-project-with-akka-cats-and-cassandra",
    "/articles/akka-http-json": "/articles/akka-http-3-json-libraries",
    "/articles/akka-http-to-heroku-in-x-minutes":
      "/articles/akka-http-to-heroku-in-10-minutes",
    "/articles/akka-message-adapter": "/articles/akka-typed-adapting-messages",
    "/articles/akka-streams-backpressure":
      "/articles/akka-streams-backpressure",
    "/articles/akka-streams-graphs": "/articles/use-akka-streams-graph-dsl",
    "/articles/Akka-Typed-incentivizes-you-to-write-good-code":
      "/articles/how-akka-typed-incentivizes-writing-good-code",
    "/articles/akkastreams-to-actors-and-back":
      "/articles/from-akka-streams-to-actors-and-back",
    "/articles/algebraic-data-types": "/articles/algebraic-data-types-in-scala",
    "/articles/another-take-on-monads":
      "/articles/a-fresh-perspective-on-monads",
    "/articles/anti-givens": "/articles/scala-3-anti-givens",
    "/articles/anti-implicits":
      "/articles/exploiting-implicit-ambiguity-in-scala",
    "/articles/best-scala-courses":
      "/articles/a-guide-to-choosing-the-best-scala-course",
    "/articles/big-kotlin-tutorial": "/articles/the-big-kotlin-tutorial",
    "/articles/cats-effect-fibers":
      "/articles/cats-effect-3-introduction-to-fibers",
    "/articles/cats-effect-parallelism":
      "/articles/functional-parallel-programming-with-scala-and-cats-effect",
    "/articles/cats-effect-racing-fibers": "/articles/cats-effect-3-racing-ios",
    "/articles/cats-typeclass-hierarchy":
      "/articles/cats-essential-type-class-hierarchy",
    "/articles/contravariance":
      "/articles/why-is-contravariance-so-hard-in-scala",
    "/articles/controllable-futures": "/articles/controllable-futures-in-scala",
    "/articles/custom-pattern-matching":
      "/articles/custom-pattern-matching-in-scala",
    "/articles/doobie": "/articles/learning-doobie-for-the-greater-good",
    "/articles/enums-scala-3": "/articles/enums-in-scala-3",
    "/articles/eta-expansion-and-paf":
      "/articles/eta-expansion-and-partially-applied-functions-in-scala",
    "/articles/event-streaming-with-pulsar-and-scala":
      "/articles/event-streaming-in-apache-pulsar-with-scala",
    "/articles/finagle": "/articles/finagle-twitters-rpc-library-for-scala",
    "/articles/flink-sql-introduction":
      "/articles/streaming-sql-with-apache-flink-introduction",
    "/articles/free-monad": "/articles/free-monads-in-scala",
    "/articles/fs2": "/articles/fs2-more-than-functional-streaming-in-scala",
    "/articles/full-stack-typelevel":
      "/articles/building-a-full-stack-scala-3-application-with-the-typelevel-stack",
    "/articles/functional-collections":
      "/articles/functional-collections-in-scala",
    "/articles/functional-error-handling-in-kotlin":
      "/articles/functional-error-handling-in-kotlin-part-1-absent-values",
    "/articles/functional-error-handling-in-kotlin-part-2":
      "/articles/functional-error-handling-in-kotlin-part-2-result-and-either",
    "/articles/functional-error-handling-in-kotlin-part-3":
      "/articles/functional-error-handling-in-kotlin-part-3-the-raise-dsl",
    "/articles/givens-and-implicits": "/articles/scala-3-givens-and-implicits",
    "/articles/givens-vs-implicits": "/articles/scala-3-givens-vs-implicits",
    "/articles/grpc-in-scala-with-fs2-scalapb":
      "/articles/grpc-in-scala-with-fs2-and-scalapb",
    "/articles/higher-order-functions-for-oop":
      "/articles/higher-order-functions-for-object-oriented-programmers",
    "/articles/how-to-create-your-own-string-interpolator":
      "/articles/create-your-own-custom-string-interpolator",
    "/articles/http4s-tutorial":
      "/articles/http4s-unleashing-the-power-of-http-apis-library",
    "/articles/immutable-doubly-linked-list-scala":
      "/articles/immutable-linked-lists-in-scala-with-call-by-name-and-lazy-values",
    "/articles/kafka-akka-spark":
      "/articles/comparing-akka-streams-kafka-streams-spark-streaming",
    "/articles/kafka-streams": "/articles/kafka-101-streams",
    "/articles/kotlin-context-receivers":
      "/articles/kotlin-101-context-receivers",
    "/articles/kotlin-coroutines-101": "/articles/kotlin-101-coroutines",
    "/articles/kotlin-flows": "/articles/kotlin-101-flows",
    "/articles/kotlin-type-classes": "/articles/kotlin-101-type-classes",
    "/articles/lambda": "/articles/deploy-a-scala-application-to-aws-lambda",
    "/articles/lens": "/articles/lenses-prisms-and-optics-in-scala",
    "/articles/load-balancer":
      "/articles/a-functional-load-balancer-with-scala-http4s-and-cats-effect",
    "/articles/monads": "/articles/an-introduction-to-monads-in-scala",
    "/articles/monads-are-monoids-in-the-category-of-endofunctors":
      "/articles/a-monad-is-a-monoid-in-the-category-of-endofunctors-scala",
    "/articles/mutability-in-scala": "/articles/mutability-in-scala",
    "/articles/n-queens": "/articles/n-queens-in-scala",
    "/articles/new-types-scala-3": "/articles/scala-3-new-types",
    "/articles/nice-ways-to-read-files-in-Scala":
      "/articles/4-handy-ways-to-read-files-in-scala",
    "/articles/nothing": "/articles/much-ado-about-nothing-in-scala",
    "/articles/null-nothing-none-nil-unit":
      "/articles/the-differences-between-null-nothing-nil-none-and-unit-in-scala",
    "/articles/oauth-authentication-scala-http4s":
      "/articles/authentication-with-scala-and-http4s-oauth",
    "/articles/optimizing-kafka-clients-a-hands-on-guide":
      "/articles/kafka-101-clients",
    "/articles/otp-authentication-scala-http4s":
      "/articles/authentication-with-scala-and-http4s-oauth-two-factor-authentication",
    "/articles/pipe-pattern":
      "/articles/akka-typed-how-the-pipe-pattern-prevents-anti-patterns",
    "/articles/play-framework-http-api-tutorial":
      "/articles/rest-apis-with-play-framework-and-scala",
    "/articles/practical-type-level-programming":
      "/articles/scala-3-type-level-programming",
    "/articles/pulsar-flink":
      "/articles/stateful-streams-with-apache-pulsar-and-apache-flink",
    "/articles/pulsar-spark":
      "/articles/streaming-analytics-with-apache-pulsar-and-spark-structured-streaming",
    "/articles/reading-query-plans":
      "/articles/understanding-spark-query-plans",
    "/articles/referential-transparency":
      "/articles/what-is-referential-transparency-and-why-should-you-care",
    "/articles/refined-types": "/articles/refined-types-in-scala",
    "/articles/remote-code-execution-engine":
      "/articles/a-distributed-code-execution-engine-in-pekko-with-scala",
    "/articles/repartition-coalesce":
      "/articles/repartition-vs-coalesce-in-apache-spark",
    "/articles/roadmap-to-successful-data-engineer":
      "/articles/roadmap-to-becoming-a-successful-data-engineer",
    "/articles/sbt-tutorial": "/articles/getting-started-with-scala-sbt",
    "/articles/scala-3-dependent-types":
      "/articles/scala-3-mastering-path-dependent-types-and-type-projections",
    "/articles/scala-3-given-using":
      "/articles/scala-3-given-and-using-clauses",
    "/articles/scala-3-opaque": "/articles/scala-3-opaque-types",
    "/articles/scala-3-type-projections":
      "/articles/scala-3-general-type-projections",
    "/articles/scala-as-a-junior-dev":
      "/articles/using-scala-as-a-junior-developer",
    "/articles/scala-cli-and-scala-native":
      "/articles/creating-a-cli-sudoku-solver-with-scala",
    "/articles/scala-fs2-udp": "/articles/udp-with-scala-and-fs2",
    "/articles/scala-generics": "/articles/getting-started-with-scala-generics",
    "/articles/scala-http4s-authentication":
      "/articles/authentication-with-scala-and-http4s",
    "/articles/scala-looping":
      "/articles/things-that-dont-make-sense-scala-loops",
    "/articles/scala-modes-of-evaluation":
      "/articles/evaluation-modes-in-scala",
    "/articles/scala-option": "/articles/getting-started-with-scala-options",
    "/articles/scala-redis-websockets-part-2":
      "/articles/websockers-in-scala-part-2-integrating-redis-and-postgresql",
    "/articles/scala-syntax-tricks-for-expressiveness":
      "/articles/5-code-expressiveness-tricks-in-scala",
    "/articles/scala-types-kinds":
      "/articles/types-kinds-and-type-constructors-in-scala",
    "/articles/scala-variance-positions":
      "/articles/demystifying-variance-positions-in-scala",
    "/articles/security-in-http4s":
      "/articles/configuring-http4s-security-handling-cors-and-csrf",
    "/articles/self-types": "/articles/self-types-in-scala-overview",
    "/articles/skunk-complete-guide":
      "/articles/mastering-skunk-the-scala-library-for-database-interaction",
    "/articles/slick": "/articles/getting-started-with-scala-slick",
    "/articles/snake": "/articles/make-a-snake-game-with-scala-in-10-minutes",
    "/articles/sorting": "/articles/sort-lists-in-scala-with-tail-recursion",
    "/articles/spark-broadcast-joins":
      "/articles/broadcast-joins-in-apache-spark-an-optimization-technique",
    "/articles/spark-dags":
      "/articles/understanding-spark-directed-acyclic-graphs",
    "/articles/spark-joins": "/articles/all-the-joins-in-spark-dataframes",
    "/articles/stateful-stateless-actors":
      "/articles/akka-typed-actors-stateful-and-stateless",
    "/articles/structuring-services-with-zio-zlayer":
      "/articles/organizing-services-with-zio-and-zlayers",
    "/articles/sudoku-backtracking":
      "/articles/a-backtracking-sudoku-solver-in-scala",
    "/articles/sync,-async-and-(non)-blocking":
      "/articles/sync-async-and-non-blocking-in-scala-and-akka",
    "/articles/tagless-final": "/articles/tagless-final-in-scala",
    "/articles/ten-scala-skills":
      "/articles/top-10-skills-and-mental-models-for-becoming-a-scala-developer",
    "/articles/testing-raise":
      "/articles/elevate-your-tests-testing-functional-kotlin-with-arrow-and-raise",
    "/articles/testing-styles-scalatest":
      "/articles/scala-testing-with-scalatest-a-beginners-guide-to-testing-styles",
    "/articles/the-2020-retrospective": "/articles/2020-retrospective",
    "/articles/the-2021-retrospective": "/articles/2021-retrospective",
    "/articles/the-brilliance-of-materialized-values":
      "/articles/the-brilliance-of-materialized-values-in-akka-streams",
    "/articles/twenty-seconds":
      "/articles/how-does-the-20-seconds-idiom-work-in-scala",
    "/articles/type-level-programming-part-1":
      "/articles/type-level-programming-in-scala-part-1-numbers-and-comparisons",
    "/articles/type-level-programming-part-2":
      "/articles/type-level-programming-in-scala-part-2-adding-numbers-as-types",
    "/articles/type-level-programming-part-3":
      "/articles/type-level-programming-in-scala-part-3-sorting-lists",
    "/articles/type-level-programming-scala-3":
      "/articles/type-level-programming-in-scala-3-part-1-comparing-types",
    "/articles/type-level-quicksort":
      "/articles/type-level-programming-in-scala-3-part-2-a-quicksort-on-types",
    "/articles/ultimate-guide-to-java-virtual-threads":
      "/articles/the-ultimate-guide-to-java-virtual-threads",
    "/articles/underscore-in-scala":
      "/articles/underscores-are-overloaded-in-scala",
    "/articles/value-classes": "/articles/value-classes-in-scala",
    "/articles/variables":
      "/articles/things-that-dont-make-sense-scala-variables",
    "/articles/websockets-in-http4s":
      "/articles/websockers-in-scala-part-1-http4s",
    "/articles/why-are-typeclasses-useful":
      "/articles/why-are-scala-type-classes-useful",
    "/articles/why-we-use-companions":
      "/articles/objects-and-companions-in-scala",
    "/articles/zio-fibers":
      "/articles/zio-fibers-concurrency-and-lightweight-threads",
    "/articles/zio-streams": "/articles/zio-streams-introduction",
    "/articles/scala-functional-programming-interview-practice":
      "/articles/scala-and-functional-programming-interview-practice",
  },
});
