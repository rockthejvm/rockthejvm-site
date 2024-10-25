import site from "../data/site.json";

export default function Example(props) {
  return (
    <div className="min-h-[92vh] pb-40 pt-20">
      <div className="hidden lg:mb-8 lg:flex lg:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-content-1 ring-1 ring-content-2/10 hover:ring-content-2/20">
          Check out our new{" "}
          <a
            href="/courses/kotlin-coroutines-and-concurenc"
            className="font-semibold text-accent-1"
          >
            Kotlin Coroutines & Concurrency course
          </a>
          {/* <a
						href="/courses/advanced-kotlin"
						className="font-semibold text-accent-1"
					>
						<span className="absolute inset-0" aria-hidden="true"></span>Read
						more<span aria-hidden="true">&rarr;</span>
					</a> */}
        </div>
      </div>
      <div className="flex">
        <div className="mx-8 my-auto md:mx-24 md:flex">
          <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">{props.logo}</div>
          <div>
            <h1 className="my-6 text-5xl font-extrabold text-content sm:text-6xl md:text-7xl">
              {site.name.toUpperCase()}
            </h1>
            <p className="mb-5 text-content">
              The zero-to-master online courses and hands-on training for Scala,
              Kotlin, Apache Spark, Apache Flink, ZIO, Akka/Apache Pekko and
              more.
            </p>
            <p className="mb-5 text-content">
              No more mindless browsing, obscure blog posts and blurry videos.
              Save yourself the time and frustration and follow a smooth
              learning curve where code is king.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
