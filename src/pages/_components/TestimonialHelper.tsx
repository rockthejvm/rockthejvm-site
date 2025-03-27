import type { CollectionEntry } from "astro:content";
import type React from "react";

interface Props {
  children: React.ReactNode;
  companyLogo?: JSX.Element; // Not actually optional; passed in as named slot
  photo?: JSX.Element; // Not actually optional; passed in as named slot
  testimonial: Omit<CollectionEntry<"testimonials">, "data"> & {
    data: Omit<CollectionEntry<"testimonials">["data"], "company"> & {
      company: Omit<
        CollectionEntry<"testimonials">["data"]["company"],
        "entity"
      > & {
        entity: CollectionEntry<"companies">["data"];
      };
    };
  };
}

export default ({
  children,
  companyLogo,
  photo,
  testimonial: {
    data: { company, location, name, profile },
  },
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
