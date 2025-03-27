export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Welcome",
          lectures: [
            {
              id: 15088296,
              name: "Welcome",
            },
            {
              id: 15088297,
              name: "How to Make the Best out of This Course",
            },
            {
              id: 15088298,
              name: "Scala Recap",
            },
            {
              id: 15088299,
              name: "Spark First Principles",
            },
          ],
        },
        {
          name: "Spark Structured API with DataFrames",
          lectures: [
            {
              id: 15088306,
              name: "DataFrames Basics",
            },
            {
              id: 15088307,
              name: "DataFrames Basics: Exercises",
            },
            {
              id: 15088308,
              name: "How DataFrames Work",
            },
            {
              id: 15088309,
              name: "Data Sources",
            },
            {
              id: 15088310,
              name: "Data Sources, Part 2 + Exercises",
            },
            {
              id: 15088311,
              name: "DataFrame Columns and Expressions",
            },
            {
              id: 15088312,
              name: "Columns and Expressions: Exercises",
            },
            {
              id: 15088313,
              name: "DataFrame Aggregations",
            },
            {
              id: 15088314,
              name: "DataFrame Joins",
            },
            {
              id: 15088315,
              name: "Joins: Exercises",
            },
          ],
        },
        {
          name: "Spark Types and Datasets",
          lectures: [
            {
              id: 15088300,
              name: "Working with Spark Types",
            },
            {
              id: 15088301,
              name: "Advanced Spark Types",
            },
            {
              id: 15088302,
              name: "Managing Nulls in Data",
            },
            {
              id: 15088304,
              name: "Type-Safe Processing: Datasets",
            },
            {
              id: 15088305,
              name: "Datasets, Part 2 + Exercises",
            },
          ],
        },
        {
          name: "Spark SQL",
          lectures: [
            {
              id: 15088317,
              name: "The Spark SQL Shell",
            },
            {
              id: 15088322,
              name: "Programmatic Spark SQL",
            },
            {
              id: 15088327,
              name: "Spark SQL: Exercises",
            },
          ],
        },
        {
          name: "Spark Low-Level",
          lectures: [
            {
              id: 15088359,
              name: "RDDs",
            },
            {
              id: 15088360,
              name: "RDDs, Part 2 + Exercises",
            },
          ],
        },
        {
          name: "Practical Spark",
          lectures: [
            {
              id: 15088357,
              name: "How Spark Runs on a Cluster",
            },
            {
              id: 15088358,
              name: "Deploying Spark Applications on a Cluster",
            },
          ],
        },
        {
          name: "A Real Big Data Project",
          lectures: [
            {
              id: 15088335,
              name: "A Big Data Problem",
            },
            {
              id: 15088342,
              name: "Investigative Data Analysis on Big Data",
            },
            {
              id: 15088346,
              name: "Investigative Data Analysis on Big Data, Part 2",
            },
            {
              id: 15088351,
              name: "Gathering Answers and Running our Solution on Amazon EMR",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 15088361,
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
