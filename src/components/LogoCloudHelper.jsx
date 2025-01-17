export default function Example(props) {
  return (
    <article className="card-shadow-color card-shadow featured-clients rounded-3xl bg-secondary pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold leading-8 text-content">
          I've taught Scala, Kotlin, Akka, Spark and more in live trainings at
          some of the best companies in the world.
        </h3>
        <div className="mx-auto mt-32 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {props.children}
        </div>
      </div>
    </article>
  );
}
