"use client";

import { useState } from "react";

export default function Example(props) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const articleSeries = props.articleSeries;
  const article = props.article;
  const label = props.label;

  const handleClick = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <details open={props.open} onClick={handleClick}>
      <summary class="cursor-pointer list-none px-4 py-5 text-content-1 sm:px-6">
        <div class="flex flex-row justify-between">
          <h2 class="inline max-w-full">{label ?? "Continue reading:"}</h2>{" "}
          <p class="text-3xl">{detailsOpen ? "▼" : "►"}</p>
        </div>
      </summary>
      <ol class="divide-y divide-gray-200 px-4 py-5 text-content-1 sm:p-6">
        {articleSeries.map((seriesArticle) =>
          seriesArticle.slug === article.slug ? (
            <li class="flex items-center py-4 text-content">
              <span class="px-2 italic">{seriesArticle.data.title}</span>
              <span class="text-accent-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 inline-block size-6 align-middle"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              <span>This article</span>
            </li>
          ) : (
            <li class="py-4 text-content">
              <a href={`/articles/${seriesArticle.slug}`}>
                {seriesArticle.data.title}
              </a>
            </li>
          ),
        )}
      </ol>
    </details>
  );
}
