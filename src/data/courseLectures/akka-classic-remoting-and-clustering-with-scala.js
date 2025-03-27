export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "First Section",
          lectures: [
            {
              id: 14995177,
              name: "Welcome",
            },
            {
              id: 14998264,
              name: "How to Make the Best out of This Course",
            },
            {
              id: 14998324,
              name: "Scala Recap",
            },
            {
              id: 14998337,
              name: "Akka Recap",
            },
          ],
        },
        {
          name: "Akka Remoting",
          lectures: [
            {
              id: 14998332,
              name: "Remote Actors",
            },
            {
              id: 14998325,
              name: "Remote Actors - Exercise",
            },
            {
              id: 14998329,
              name: "Deploying Actors Remotely",
            },
            {
              id: 14998333,
              name: "Deploying Actors Remotely - Exercise",
            },
          ],
        },
        {
          name: "Akka Clustering",
          lectures: [
            {
              id: 14998331,
              name: "Clustering Intro",
            },
            {
              id: 14998323,
              name: "Clustering in Action",
            },
            {
              id: 14998338,
              name: "A Bigger Clustering Example - Part 1",
            },
            {
              id: 14998328,
              name: "A Bigger Clustering Example - Part 2",
            },
            {
              id: 14998330,
              name: "Clustering - Exercise",
            },
            {
              id: 14998327,
              name: "Cluster-Aware Routers",
            },
          ],
        },
        {
          name: "Advanced Akka Clustering Techniques",
          lectures: [
            {
              id: 14998336,
              name: "Cluster Singleton",
            },
            {
              id: 14998335,
              name: "Cluster Singleton - Exercise",
            },
            {
              id: 14998326,
              name: "Cluster Sharding",
            },
            {
              id: 14998339,
              name: "A Bigger Cluster Sharding Example - Part 1",
            },
            {
              id: 14998334,
              name: "A Bigger Cluster Sharding Example - Part 2",
            },
          ],
        },
        {
          name: "Epilogue",
          lectures: [
            {
              id: 14998412,
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
