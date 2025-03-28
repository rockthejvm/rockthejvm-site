import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const response = await fetch(
      "https://related-articles.andrei-023.workers.dev/match_articles",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ),
    data = await response.json();

  return new Response(JSON.stringify(data));
};
