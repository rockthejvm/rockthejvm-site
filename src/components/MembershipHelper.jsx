import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = ["TODO", "TODO", "TODO", "TODO", "TODO", "TODO"];

export default function Example(props) {
  return (
    <div className="">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20 xl:px-20">
            {props.image}
            <div className="w-full flex-auto">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Now also for teams!
              </h3>
              <p className="mt-6 text-lg leading-8 text-white">
                All of Rock the JVM, at your service. Access ~250 hours of the
                best content you'll ever find, write more code than many write
                in their careers, and be welcome in a community of driven people
                like you.
              </p>
              <div className="mt-10 flex flex-row items-center justify-center gap-x-6 lg:justify-start gap-5">
                <a
                  href="#"
                  className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Check out the team pack <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
