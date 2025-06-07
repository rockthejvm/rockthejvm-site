import PurchaseLink from "@/components/PurchaseLink";
import { membershipTypes } from "@/pages/memberships/_sections/MembershipPricingSectionHelper";
import { Radio, RadioGroup } from "@headlessui/react";
import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import CoursePrice from "./CoursePrice";

type CourseFrontmatter = CollectionEntry<"courses">["data"];

interface Props {
  categories: CollectionEntry<"courseCategories">[];
  currency: string;
  hours: number;
  linesOfCode: number;
  includedInMembership: CourseFrontmatter["includedInMembership"];
  isCourse: boolean;
  membershipHours: number;
  membershipLinesOfCode: number;
  monthlyMembership: {
    pricingPlanId: number;
  };
  monthlyPriceInCents: number;
  pricingPlanId: CourseFrontmatter["pricingPlanId"];
  priceInCents: number;
  title: CourseFrontmatter["title"];
}

// const {
//     categories,
//     currency,
//     hours,
//     linesOfCode,
//     includedInMembership,
//     isCourse,
//     membershipHours,
//     membershipLinesOfCode,
//     monthlyMembership,
//     monthlyPriceInCents,
//     pricingPlanId,
//     priceInCents,
//     title,
//   } = Astro.props,

export default function PricingPanels(props) {
  const [membership, setMembership] = useState(membershipTypes[0]);
  const {
      categories,
      currency,
      hours,
      linesOfCode,
      includedInMembership,
      isCourse,
      membershipHours,
      membershipLinesOfCode,
      monthlyMembership,
      monthlyPriceInCents,
      yearlyMembership,
      yearlyPriceInCents,
      pricingPlanId,
      priceInCents,
      title,
    } = props,
    // remove this when including the RoP courses in the membership
    membershipIncludedClassNames = includedInMembership && "grid grid-cols-1",
    membershipIncludedCardClassNames =
      includedInMembership && "sm:rounded-b-none lg:rounded-tr-none";
  return (
    <>
      <div
        className={`mx-auto mt-16 max-w-lg items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 ${membershipIncludedClassNames}`}
      >
        <div
          className={`card-shadow card-shadow-color rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:p-10 lg:mx-0 lg:rounded-bl-3xl ${membershipIncludedCardClassNames}`}
        >
          <h3
            id="tier-hobby"
            className="text-base font-semibold leading-7 text-accent-1"
          >
            {title} - Lifetime License
          </h3>
          <CoursePrice currency={currency} priceInCents={priceInCents}>
            <div
              className="mt-4 flex items-baseline gap-x-2 text-5xl font-bold tracking-tight text-content"
              slot="fallback"
            >
              Loading...
            </div>
          </CoursePrice>
          <p className="mt-6 text-base leading-7 text-content">
            {isCourse ? "Just the course" : `All of the courses in this bundle`}{" "}
            with a one-time payment
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
            {[
              `${hours} hours of 4K content`,
              `${linesOfCode} lines of code written`,
              "All PDF slides",
              "Access to the private Rock the JVM community",
              "Free updates",
              "Lifetime access",
            ].map((line, idx) => (
              <li className="flex gap-x-3" key={idx}>
                <svg
                  className="h-6 w-5 flex-none text-accent-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {line}
              </li>
            ))}
          </ul>
          <PurchaseLink
            pricingPlanId={pricingPlanId}
            ariaDescribedBy="tier-hobby"
            className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-cta hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
            client:visible={{ rootMargin: "2160px" }}
          >
            Get Now
          </PurchaseLink>
        </div>
        {includedInMembership && (
          <div className="card-shadow card-shadow-color relative rounded-3xl bg-secondary p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <div className="mb-4 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <RadioGroup
                  value={membership}
                  onChange={setMembership}
                  className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                >
                  <Radio
                    key={membershipTypes[0].value}
                    value={membershipTypes[0]}
                    defaultChecked={true}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                  >
                    {membershipTypes[0].label}
                  </Radio>
                  <Radio
                    key={membershipTypes[1].value}
                    value={membershipTypes[1]}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                  >
                    {membershipTypes[1].label}
                  </Radio>
                </RadioGroup>
              </fieldset>
            </div>
            <h3
              id="tier-enterprise"
              className="text-base font-semibold leading-7 text-accent-1"
            >
              All-Access Membership
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <CoursePrice
                priceInCents={
                  membership.value === "Monthly"
                    ? monthlyPriceInCents
                    : yearlyPriceInCents
                }
                currency={currency}
                recurring={membership.value.toLowerCase()}
              >
                <div
                  className="mt-4 flex items-baseline gap-x-2 text-5xl font-bold tracking-tight text-content"
                  slot="fallback"
                >
                  Loading...
                </div>
              </CoursePrice>
            </div>
            <p className="mt-6 text-base leading-7 text-content">
              All of the Rock the JVM courses
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
              {[
                `${membershipHours} hours of 4K content`,
                `${membershipLinesOfCode} lines of code written`,
                ...categories.map(
                  ({ data: { name } }) => `All ${name} courses`,
                ),
              ].map((line, idx) => (
                <li className="flex gap-x-3" key={idx}>
                  <svg
                    className="h-6 w-5 flex-none text-accent-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
            <PurchaseLink
              pricingPlanId={
                membership.value === "Monthly"
                  ? monthlyMembership.pricingPlanId
                  : yearlyMembership.pricingPlanId
              }
              ariaDescribedBy="tier-enterprise"
              className="mt-8 block rounded-md bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-content-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
              client:visible={{ rootMargin: "2160px" }}
            >
              Join Now
            </PurchaseLink>
          </div>
        )}
      </div>
    </>
  );
}
