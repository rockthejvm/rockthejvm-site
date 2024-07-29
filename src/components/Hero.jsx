import site from "../data/site.json";

export default function Example() {
  return (
    <div className="sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32"
        >
          <path
            d="M0 0l200 200M0 200L200 0"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-lg font-bold">{site.name}</h1>
        <p className="mt-1">
          The zero-to-master online courses and hands-on training for Scala,
          Kotlin, Spark, Flink, ZIO, Akka and more.
        </p>
        <p className="mt-1">
          No more mindless browsing, obscure blog posts and blurry videos. Save
          yourself the time and frustration and follow a smooth learning curve
          where code is king.
        </p>
      </div>
    </div>
  );
}
