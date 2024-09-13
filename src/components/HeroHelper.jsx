import site from "../data/site.json";

export default function Example(props) {
	return (
		<div className="min-h-[92vh] pt-20 pb-40">
			<div className="hidden sm:mb-8 sm:flex sm:justify-center">
				<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-content-1 ring-1 ring-content-2/10 hover:ring-content-2/20">
					Check out our new advanced Kotlin course{" "}
					<a
						href="/courses/advanced-kotlin"
						className="font-semibold text-accent-1"
					>
						<span className="absolute inset-0" aria-hidden="true"></span>Read
						more <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<div className="flex">
				<div className="md:flex my-auto mx-8 md:mx-24">
					<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{props.logo}</div>
					<div>
						<h1 className="font-extrabold text-content text-5xl sm:text-6xl md:text-7xl my-6">
							{site.name.toUpperCase()}
						</h1>
						<p className="mb-5 text-content">
							The zero-to-master online courses and hands-on training for Scala,
							Kotlin, Spark, Flink, ZIO, Akka and more.
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
