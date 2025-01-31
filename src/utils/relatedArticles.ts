import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articleFiles = new Map();

const articleObjs: { slug: string; content: string }[] = [];

function readDirectory(directory: string, articleDir: string | null) {
  fs.readdirSync(directory).forEach((file) => {
    const Absolute = path.join(directory, file);
    let fileName = file.toString();

    if (fileName.indexOf(".") >= 0) {
      fileName = fileName.substring(0, fileName.indexOf("."));
    }

    if (fs.statSync(Absolute).isDirectory())
      return readDirectory(Absolute, fileName);
    else if (file.endsWith(".mdx") || file.endsWith(".md"))
      articleFiles.set(fileName == "index" ? articleDir : fileName, Absolute);
  });
}

function parseIntroduction(markdown: string) {
  const regex = /## Introduction\s+([\s\S]*?)(?=\n\n## |$)/;
  const match = markdown.match(regex);

  if (match) {
    console.log(match[1].trim());
  }
  return match ? match[1].trim() : "";
}

function parseConclusion(markdown: string) {
  const regex = /## Conclusion\s+([\s\S]*?)(?=\n\n## |$)/;
  const match = markdown.match(regex);

  if (match) {
    console.log(match[1].trim());
  }
  return match ? match[1].trim() : "";
}

function buildArticleJson() {
  articleFiles.forEach((value, key) => {
    const article = fs.readFileSync(path.join(value), "utf8");
    const { data } = matter(article);
    const obj = {
      slug: key,
      content: `${data.title}. ${data.excerpt}. ${data.tags.join(" ")}. ${parseIntroduction(article)}`,
    };
    console.log(obj);
    articleObjs.push(obj);
  });

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

export async function getArticleMatches() {
  try {
    const res = await fetch(
      "https://related-articles.andrei-023.workers.dev/match_articles",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    const body = await res.json();

    fs.writeFile(
      "src/data/matchedArticles.json",
      JSON.stringify(body),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("JSON data saved to data.json");
      },
    );
  } catch (error) {
    console.error("Error sending files:", error);
  }
}
