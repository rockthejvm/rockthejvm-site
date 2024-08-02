export default function Example(props) {
  return (
    <article className="relative isolate overflow-hidden py-8 text-white sm:py-12">
      <div className="mx-auto">
        {props.companyLogo}
        <figure className="mt-8">
          <blockquote className="text-center text-sm font-semibold leading-8 text-white sm:text-base sm:leading-9">
            <p>{props.children}</p>
          </blockquote>
          <figcaption className="mt-8">
            {props.photo}
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">
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
              <div className="text-white">
                {props.companyRole} at {props.companyTitle}
              </div>
            </div>
            <div className="mt-2 text-center text-white">
              ({props.location.city}, {props.location.country})
            </div>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
