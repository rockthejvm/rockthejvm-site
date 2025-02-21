import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const response = await fetch(
      "https://related-articles.andrei-023.workers.dev/match_articles",
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch articles" }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const body = await response.json();

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
