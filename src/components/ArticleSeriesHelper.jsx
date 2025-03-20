import { useState } from "react";

export default function Example({ article, articleSeries, label, open }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleClick = () => {
    setDetailsOpen(!detailsOpen);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  };

  return (
    <details open={open} onClick={handleClick} onKeyUp={handleKeyUp}>
      <summary className="cursor-pointer list-none px-4 py-5 text-content-1 sm:px-6">
        <div className="flex flex-row items-center justify-start">
          <span className="text-3xl">{detailsOpen ? "⮛" : "➣"}</span>
          <h2 className="inline max-w-full">
            {label ?? "Continue reading:"}
          </h2>{" "}
        </div>
      </summary>
      <ol className="divide-y divide-gray-200 px-4 py-5 text-content-1 sm:p-6">
        {articleSeries.map((seriesArticle) =>
          seriesArticle.id === article.id ? (
            <li
              key={seriesArticle.id}
              className="flex items-center py-4 text-content"
            >
              <span className="px-2 italic">{seriesArticle.data.title}</span>
              <span className="text-accent-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-2 inline-block size-6 align-middle"
                  title="Arrow pointing left"
                  aria-label="Arrow pointing left"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              <span>This article</span>
            </li>
          ) : (
            <li key={seriesArticle.id} className="py-4 text-content">
              <a href={`/articles/${seriesArticle.id}`}>
                {seriesArticle.data.title}
              </a>
            </li>
          ),
        )}
      </ol>
    </details>
  );
}
