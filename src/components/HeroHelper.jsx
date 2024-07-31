import site from "../data/site.json";

export default function Example(props) {
  return (
    <div className="flex min-h-[100vh] pb-40">
      <div className="sm:flex my-auto mx-24">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{props.logo}</div>
        <div>
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl my-6">
            {site.name.toUpperCase()}
          </h1>
          <p className="mb-5">
            The zero-to-master online courses and hands-on training for Scala,
            Kotlin, Spark, Flink, ZIO, Akka and more.
          </p>
          <p className="mb-5">
            No more mindless browsing, obscure blog posts and blurry videos.
            Save yourself the time and frustration and follow a smooth learning
            curve where code is king.
          </p>
        </div>
      </div>
    </div>
  );
}
