export default function Example(props) {
  return (
    <article className="bg-secondary rounded-3xl mb-8 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          {props.photo}
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-content">
            {props.name}
          </h3>
          {props.role && (
            <p className="text-sm leading-6 text-content">
              {props.role} |{" "}
              <a
                href={props.companyWebsite}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-content"
              >
                {props.companyName}
              </a>
            </p>
          )}
          {props.biography && (
            <p className="mt-4 text-lg leading-8 text-content">
              {props.biography}
            </p>
          )}
        </div>
        <ul role="list" className="mt-6 flex justify-center gap-x-6">
          {props.socials.facebook && (
            <li>
              <a
                href={`https://www.facebook.com/${props.socials.facebook}`}
                className="text-content hover:text-gray-500"
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
                className="text-content hover:text-gray-500"
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
                href={`https://www.linkedin.com/${props.socials.linkedin}`}
                className="text-content hover:text-gray-500"
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
                className="text-content hover:text-gray-500"
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
                className="text-content hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                {props.youtube}
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
