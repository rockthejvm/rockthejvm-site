import type { CollectionEntry } from "astro:content";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

interface Props {
  articles: CollectionEntry<"articles">["data"][];
}

export default function Example({ articles }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto min-w-80 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {articles.map((article) => (
              <article
                // key={article.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={article.datetime} className="text-gray-500">
                    {article.date}
                  </time> */}
                  {/* <a
                    href={article.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {article.category.title}
                  </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {/* <a href={article.href}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </a> */}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {/* {article.excerpt} */}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* <img
                    alt=""
                    src={article.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  /> */}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {/* <a href={article.author.href}>
                        <span className="absolute inset-0" />
                        {article.author.name}
                      </a> */}
                    </p>
                    {/* <p className="text-gray-600">{article.author.role}</p> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
