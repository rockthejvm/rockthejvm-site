import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const domain = "https://related-articles.andrei-023.workers.dev";

async function addEmbeddedArticles() {
  const articles = await getCollection("articles"),
    payload = await Promise.all(
      articles.map(async (article) => ({
        slug: article.slug,
        content: (await article.render()).Content,
      })),
    );
  return fetch(`${domain}/add_articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ articles: payload }),
  });
}

export const GET: APIRoute = async ({ params, request }) => {
  const branch = process.env.CF_PAGES_BRANCH || "unknown";
  if (branch === "main") {
    try {
      await addEmbeddedArticles();
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Failed to add embedded articles",
          details: error instanceof Error ? error.message : String(error),
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }
  }

  try {
    const response = await fetch(`${domain}/match_articles`);

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
