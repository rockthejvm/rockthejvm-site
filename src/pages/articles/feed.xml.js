import site from "@/data/site.json";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");
  return rss({
    customData: "<language>en-us</language>",
    description: site.description,
    items: articles.map((article) => ({
      description: article.data.excerpt,
      link: `/articles/${article.id}/`,
      pubDate: article.data.publishedDate.toISOString(),
      title: article.data.title,
    })),
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    title: `${site.name} Articles`,
    trailingSlash: false,
  });
}
