import type { JSX } from "astro/jsx-runtime";
import { CollectionEntry } from "astro:content";

interface Props {
  company: Omit<
    CollectionEntry<"testimonials">["data"]["company"],
    "entity"
  > & { entity: CollectionEntry<"companies">["data"] };
  children: JSX.Element;
  companyLogo: JSX.Element;
  location: CollectionEntry<"testimonials">["data"]["location"];
  name: CollectionEntry<"testimonials">["data"]["name"];
  photo: JSX.Element;
  profile: CollectionEntry<"testimonials">["data"]["profile"];
}

export default ({
  children,
  company,
  companyLogo,
  location,
  name,
  photo,
  profile,
}: Props) => (
  <article className="relative isolate overflow-hidden py-8 text-content sm:py-12">
    <div className="mx-auto text-content">
      {companyLogo}
      <figure className="mt-8">
        <blockquote className="text-center text-sm font-semibold leading-8 text-content sm:text-base sm:leading-9">
          <p className="text-content">{children}</p>
        </blockquote>
        <figcaption className="mt-8">
          {photo}
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-content">
              <a href={profile} className="text-content">
                {name}
              </a>
            </div>
            <svg
              width={3}
              height={3}
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="fill-content-1"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <div className="text-content">
              {company.role} at {company.entity.name}
            </div>
          </div>
          <div className="mt-2 text-center text-content">
            ({location.city}, {location.country})
          </div>
        </figcaption>
      </figure>
    </div>
  </article>
);
