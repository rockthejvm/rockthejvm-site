export default function Example(props) {
  return (
    <article className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {props.companyLogo}
        <figure className="mt-8">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{props.children}</p>
          </blockquote>
          <figcaption className="mt-8">
            {props.photo}
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                <a href={props.link}>{props.name}</a>
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                {props.companyRole} at {props.companyTitle}
              </div>
            </div>
            <div className="mt-2 text-center text-gray-600">
              ({props.location.city}, {props.location.country})
            </div>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
