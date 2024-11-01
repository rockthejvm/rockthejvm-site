export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [
            {
              id: 46105686,
              name: "Intro & Setup",
            },
            {
              id: 45807377,
              name: "Foundations: Cats",
            },
            {
              id: 45807393,
              name: "Foundations: Cats Effect",
            },
            {
              id: 45807385,
              name: "Foundations: Doobie",
            },
            {
              id: 45807395,
              name: "Foundations: Http4s",
            },
          ],
        },
        {
          name: "Backend Stage 1: Job Management",
          lectures: [
            {
              id: 45807388,
              name: "Backend Scaffolding",
            },
            {
              id: 45807392,
              name: "Jobs Endpoints",
            },
            {
              id: 45807391,
              name: "Jobs Endpoints Implementation",
            },
            {
              id: 45807376,
              name: "Logging & Debugging Infra",
            },
            {
              id: 45807372,
              name: 'Jobs Core Module, aka "Algebra"',
            },
            {
              id: 45807384,
              name: 'Running Jobs "Algebra"',
            },
            {
              id: 45807374,
              name: "A Full Jobs CRUD App",
            },
            {
              id: 45807390,
              name: "Adding Database Configuration",
            },
            {
              id: 45807371,
              name: "Testing: Jobs HTTP API",
            },
            {
              id: 45807382,
              name: "Testing: Jobs",
            },
            {
              id: 45807381,
              name: "HTTP Payload Validation",
            },
            {
              id: 45807394,
              name: "Filtering and Pagination",
            },
            {
              id: 45807396,
              name: "Finishing Tests",
            },
          ],
        },
        {
          name: "Backend Stage 2: User Management and Security",
          lectures: [
            {
              id: 45807375,
              name: "Users with TDD",
            },
            {
              id: 45807397,
              name: "Designing the Auth API",
            },
            {
              id: 45807380,
              name: "Auth TDD-Style",
            },
            {
              id: 45807383,
              name: "Auth Implementation",
            },
            {
              id: 45807389,
              name: "Auth HTTP API",
            },
            {
              id: 45807398,
              name: "Auth HTTP, TDD-Style",
            },
            {
              id: 45807399,
              name: "Auth HTTP Implementation",
            },
            {
              id: 45807378,
              name: "Auth HTTP Validation",
            },
            {
              id: 45807373,
              name: "Role-Based Access Control (RBAC)",
            },
            {
              id: 45807379,
              name: "Integrating the Auth Stack",
            },
            {
              id: 45807387,
              name: "Taking the Backend for a Spin",
            },
            {
              id: 45807370,
              name: "Protecting Jobs HTTP Endpoints",
            },
            {
              id: 45874469,
              name: "A Quick Refactor",
            },
            {
              id: 45874467,
              name: "Password Recovery: Tokens",
            },
            {
              id: 45874464,
              name: "Password Recovery: Sending Emails",
            },
            {
              id: 45874465,
              name: "Password Recovery: Finishing Up",
            },
            {
              id: 45874466,
              name: "Completing the Server",
            },
          ],
        },
        {
          name: "Frontend Stage 1: Scaffolding",
          lectures: [
            {
              id: 45827862,
              name: "Inception: Adding ScalaJS",
            },
            {
              id: 45874468,
              name: "Foundations: Tyrian",
            },
            {
              id: 45874463,
              name: "Single-Page Application (SPA) Routing",
            },
            {
              id: 45870874,
              name: "Adding a Header with Links",
            },
            {
              id: 45916890,
              name: "Adding Pages",
            },
          ],
        },
        {
          name: "Frontend Stage 2: User Management",
          lectures: [
            {
              id: 45916887,
              name: "Signing Up",
            },
            {
              id: 45916888,
              name: "Signing Up: Interacting with the Backend",
            },
            {
              id: 45916892,
              name: "Logging In",
            },
            {
              id: 45916891,
              name: "User Sessions",
            },
            {
              id: 45916889,
              name: "Session Cookies",
            },
            {
              id: 45947499,
              name: "Logging Out",
            },
            {
              id: 45947497,
              name: "Invalidating User Sessions",
            },
            {
              id: 45947496,
              name: 'The "Forgot Password" Flow',
            },
            {
              id: 46712044,
              name: "Resetting Password",
            },
            {
              id: 46712049,
              name: "Profile Page",
            },
          ],
        },
        {
          name: "Frontend Stage 3: Job Management",
          lectures: [
            {
              id: 46061874,
              name: "Posting Jobs",
            },
            {
              id: 46061870,
              name: "Uploading Files",
            },
            {
              id: 46061873,
              name: "Showing the Job List",
            },
            {
              id: 46061871,
              name: "Implementing Backend Filters",
            },
            {
              id: 46061876,
              name: "Adding a Filter Panel",
            },
            {
              id: 46061872,
              name: "The Filter Panel UI",
            },
            {
              id: 46061875,
              name: "Displaying Individual Jobs and Rendering Markdown",
            },
          ],
        },
        {
          name: "Frontend Stage 4: Cosmetics",
          lectures: [
            {
              id: 45978164,
              name: "Header",
            },
            {
              id: 45987509,
              name: "Job Filter Panel",
            },
            {
              id: 46019962,
              name: "Job List Page",
            },
            {
              id: 46010980,
              name: "Job Page",
            },
            {
              id: 46019990,
              name: "Auth Pages",
            },
            {
              id: 46040866,
              name: "Post Job Page",
            },
          ],
        },
        {
          name: "The Icing on the Cake",
          lectures: [
            {
              id: 46111705,
              name: "Stripe Integration Overview",
            },
            {
              id: 46111707,
              name: "Stripe Endpoints",
            },
            {
              id: 46111706,
              name: "Stripe Webhooks",
            },
            {
              id: 46111704,
              name: "Full-Stack Integration",
            },
          ],
        },
        {
          name: "Deployment",
          lectures: [
            {
              id: 46082511,
              name: "Preparing the App for the World: Finishing Touches",
            },
            {
              id: 46097498,
              name: "Deployment, Part 1: Dockerized Server",
            },
            {
              id: 46100114,
              name: "Deployment, Part 2: Frontend",
            },
          ],
        },
        {
          name: "Errata",
          lectures: [
            {
              id: 48544434,
              name: "JWTs & Suboptimal Database Queries",
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
