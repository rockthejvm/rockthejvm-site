import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt=""
              src="https://cdn.filestackcontent.com/kKClNQUjSXmLy790EdpB"
              className="w-full flex-none rounded-2xl shadow-xl lg:max-w-md"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Now also for teams!
              </h2>
              <p className="mt-6 text-lg leading-8 text-black">
                All of Rock the JVM, at your service. Access ~250 hours of the
                best content you'll ever find, write more code than many write
                in their careers, and be welcome in a community of driven people
                like you.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-black sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-row justify-start gap-5">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-400"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-400"
                >
                  Check the team pack
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  );
}
