export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [
            {
              id: 48290457,
              name: "Intro & Setup",
            },
            {
              id: 48030527,
              name: "Foundations: ZIO",
            },
            {
              id: 50654292,
              name: "Foundations: Tapir",
            },
            {
              id: 48047350,
              name: "Foundations: Quill",
            },
          ],
        },
        {
          name: "Stage 1: Companies",
          lectures: [
            {
              id: 48337636,
              name: "Health Checks",
            },
            {
              id: 48337640,
              name: "Defining the Endpoints",
            },
            {
              id: 48337637,
              name: "Endpoints, TDD-style",
            },
            {
              id: 48337638,
              name: "The Service, aka Business Logic",
            },
            {
              id: 48337639,
              name: "The Repository",
            },
            {
              id: 50654316,
              name: "Clicking Layers Together",
            },
            {
              id: 50654340,
              name: "The Service - Testing",
            },
            {
              id: 48354501,
              name: "The Repository - Testing",
            },
          ],
        },
        {
          name: "Stage 2: Reviews",
          lectures: [
            {
              id: 48387159,
              name: "Reviews - Intro and Challenge",
            },
            {
              id: 48387157,
              name: "Reviews - Repository, TDD-Style",
            },
            {
              id: 48387158,
              name: "Reviews - Repository",
            },
            {
              id: 48508829,
              name: "Reviews - Service",
            },
            {
              id: 48508832,
              name: "Reviews - Endpoints",
            },
          ],
        },
        {
          name: "Stage 3: Users, Authentication & Authorization",
          lectures: [
            {
              id: 48508830,
              name: "Error Management",
            },
            {
              id: 48508831,
              name: "Users - Repository",
            },
            {
              id: 48508828,
              name: "Users - Service",
            },
            {
              id: 48513967,
              name: "JWT Tokens & Authorization",
            },
            {
              id: 48513966,
              name: "Configs",
            },
            {
              id: 49366370,
              name: "Users - Service Testing",
            },
            {
              id: 49366368,
              name: "Users - Endpoints",
            },
            {
              id: 49366372,
              name: "Integration Testing",
            },
            {
              id: 49366371,
              name: "Password Recovery",
            },
            {
              id: 49366367,
              name: "The OTP Flow",
            },
            {
              id: 49366369,
              name: "Sending Emails",
            },
            {
              id: 49899808,
              name: "A Round of Testing",
            },
            {
              id: 49899819,
              name: "Selectively Securing Endpoints",
            },
          ],
        },
        {
          name: "Stage 4: Frontend",
          lectures: [
            {
              id: 49899820,
              name: "Frontend Setup",
            },
            {
              id: 50021558,
              name: "Laminar Crash Course",
            },
            {
              id: 50021559,
              name: "Routing and Header",
            },
            {
              id: 50022613,
              name: "Companies Page: Sharing Code between Frontend & Backend",
            },
            {
              id: 50654449,
              name: "Sending Backend Calls",
            },
            {
              id: 50654450,
              name: "Backend Calls - Infrastructure Mini-Framework",
            },
            {
              id: 50103875,
              name: "Filter Panel",
            },
            {
              id: 50138214,
              name: "Filter Panel, Part 2 - Backend",
            },
            {
              id: 50138215,
              name: "Filter Panel, Part 3 - Managing UI State",
            },
            {
              id: 50138219,
              name: "Filter Panel, Part 4 - Searching",
            },
          ],
        },
        {
          name: "Stage 5: UI Authentication Flow",
          lectures: [
            {
              id: 50141014,
              name: "Login Page",
            },
            {
              id: 50339008,
              name: "Managing User Sessions",
            },
            {
              id: 50339009,
              name: "Sign Up",
            },
            {
              id: 50339005,
              name: "Logging Out",
            },
            {
              id: 50339007,
              name: "Profile Page",
            },
            {
              id: 50339006,
              name: 'The "Forgot Password" Flow',
            },
            {
              id: 50339010,
              name: "Recovering Passwords",
            },
          ],
        },
        {
          name: "Stage 6: Frontend Sprint",
          lectures: [
            {
              id: 50335904,
              name: "Creating a Company",
            },
            {
              id: 50364526,
              name: "Uploading Pictures and Auto-Resizing",
            },
            {
              id: 50364529,
              name: "Company Page",
            },
            {
              id: 50376184,
              name: "Posting Reviews",
            },
            {
              id: 50382540,
              name: "Posting Reviews, Part 2",
            },
            {
              id: 50604385,
              name: "Finishing Touches",
            },
          ],
        },
        {
          name: "Stage 7: Turning a Project into a Product",
          lectures: [
            {
              id: 50486584,
              name: "Intro - Our Paid Product Feature",
            },
            {
              id: 50486586,
              name: "Backend Endpoints",
            },
            {
              id: 50486580,
              name: "The Service and Repository Layers",
            },
            {
              id: 50486578,
              name: "Sending Invites and Emails",
            },
            {
              id: 50486583,
              name: "Stripe - Overview",
            },
            {
              id: 50486582,
              name: "Creating Checkout Sessions",
            },
            {
              id: 50486581,
              name: "Stripe Webhooks and Activating Products",
            },
            {
              id: 50486579,
              name: "The Payment Flow on the Frontend",
            },
            {
              id: 50486585,
              name: "Sending Invites from the Profile Page",
            },
            {
              id: 50604418,
              name: "GPT-4 Integration: Infrastructure",
            },
            {
              id: 50604417,
              name: "GPT-4 Integration: The Service",
            },
            {
              id: 50604419,
              name: "GPT-4 Integration: Core",
            },
            {
              id: 50604394,
              name: "GPT-4 Integration: Frontend",
            },
          ],
        },
        {
          name: "Stage 8: The Last Stretch",
          lectures: [
            {
              id: 50538063,
              name: "Bug Bashing and Finishing Touches",
            },
            {
              id: 50604380,
              name: "Cleaning Configs",
            },
            {
              id: 50604381,
              name: "Schema Migrations and FlywayDB",
            },
            {
              id: 50538068,
              name: "Deploying - Backend",
            },
            {
              id: 50538072,
              name: "Deploying - Frontend, Domain, and a Moment of Joy",
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
