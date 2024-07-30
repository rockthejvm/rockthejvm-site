import site from "../data/site.json";

export default function Example(props) {
  return (
    <div className="flex min-h-[80vh] pb-40">
      <div className="sm:flex m-auto">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{props.logo}</div>
        <div>
          <h1 className="text-lg font-bold">{site.name}</h1>
          <p className="mt-1">
            The zero-to-master online courses and hands-on training for Scala,
            Kotlin, Spark, Flink, ZIO, Akka and more.
          </p>
          <p className="mt-1">
            No more mindless browsing, obscure blog posts and blurry videos.
            Save yourself the time and frustration and follow a smooth learning
            curve where code is king.
          </p>
        </div>
      </div>
    </div>
  );
}
