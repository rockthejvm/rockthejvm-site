import type { APIRoute } from "astro";

const articleFiles = new Map(),
  articleObjs: { slug: string; content: string }[] = [];

function readDirectory(directory: string, articleDir: string | null) {
  for (const file of fs.readdirSync(directory)) {
    const Absolute = path.join(directory, file);
    let fileName = file.toString();

    if (fileName.includes(".")) {
      fileName = fileName.slice(0, Math.max(0, fileName.indexOf(".")));
    }

    if (fs.statSync(Absolute).isDirectory()) {
      readDirectory(Absolute, fileName);
      continue;
    } else if (file.endsWith(".mdx") || file.endsWith(".md"))
      articleFiles.set(fileName == "index" ? articleDir : fileName, Absolute);
  }
}

function parseIntroduction(markdown: string) {
  const regex = /## Introduction\s+([\s\S]*?)(?=\n\n## |$)/,
    match = regex.exec(markdown);

  return match ? match[1].trim() : "";
}

function parseConclusion(markdown: string) {
  const regex = /## Conclusion\s+([\s\S]*?)(?=\n\n## |$)/,
    match = regex.exec(markdown);

  return match ? match[1].trim() : "";
}

function buildArticleJson() {
  for (const [key, value] of articleFiles.entries()) {
    const article = fs.readFileSync(path.join(value), "utf8"),
      { data } = matter(article),
      obj = {
        slug: key,
        content: `${data.title}. ${data.excerpt}. ${data.tags.join(" ")}.`,
      };

    articleObjs.push(obj);
  }

  console.log(`Read ${articleObjs.length} articles.`);
}

export async function addEmbeddedArticles() {
  console.log("Vectorizing articles...");

  const directory = "./src/content/articles";

  readDirectory(directory, null);
  buildArticleJson();

  try {
    const externalResponse = await fetch(
      "https://related-articles.andrei-023.workers.dev/add_articles",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articles: articleObjs }),
      },
    );

    console.log("Uploaded articles");
  } catch (error) {
    console.error("Error sending files:", error);
  }
}

export const GET: APIRoute = async ({ params, request }) => {
  const branch = process.env.CF_PAGES_BRANCH || "unknown";
  if (branch === "main") {
    await addEmbeddedArticles();
  }

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
