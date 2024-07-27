import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import site from "../data/site.json";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    customData: `<language>en-us</language>`,
    description: site.description,
    items: posts.map((post) => ({
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.publishedDate,
      title: post.data.title,
    })),
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    title: `The ${site.name} Blog`,
  });
}
