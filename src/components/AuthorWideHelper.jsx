export default function Example(props) {
  return (
    <div className="my-auto px-8 py-4 sm:flex">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">{props.photo}</div>
      <div className="my-auto">
        <a href={`/authors/${props.authorId}`}>
          <h1 className="text-2xl font-bold text-content hover:text-link-hover sm:text-xl md:text-2xl lg:text-3xl">
            {props.name}
          </h1>
        </a>
        {props.biography && (
          <p className="mt-1 text-lg text-content-2 sm:text-base md:text-lg lg:text-xl">
            {props.biography}
          </p>
        )}
        {props.socials && (
          <ul className="mt-4 flex justify-start gap-x-4">
            {props.socials.website && (
              <li>
                <a
                  href={props.socials.website}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.website}
                </a>
              </li>
            )}
            {props.socials.facebook && (
              <li>
                <a
                  href={`https://www.facebook.com/${props.socials.facebook}`}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.facebook}
                </a>
              </li>
            )}
            {props.socials.github && (
              <li>
                <a
                  href={`https://www.github.com/${props.socials.github}`}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.github}
                </a>
              </li>
            )}
            {props.socials.linkedin && (
              <li>
                <a
                  href={`https://www.linkedin.com/in/${props.socials.linkedin}`}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.linkedin}
                </a>
              </li>
            )}
            {props.socials.twitter && (
              <li>
                <a
                  href={`https://www.x.com/${props.socials.twitter}`}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.twitter}
                </a>
              </li>
            )}
            {props.socials.youtube && (
              <li>
                <a
                  href={`https://www.youtube.com/${props.socials.youtube}`}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.youtube}
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
