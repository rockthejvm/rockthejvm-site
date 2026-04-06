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
  isCourse: boolean;
  membershipHours: number;
  membershipLinesOfCode: number;
  monthlyMembership: {
    pricingPlanId: number;
  };
  monthlyPriceInCents: number;
  yearlyMembership: {
    pricingPlanId: number;
  };
  yearlyPriceInCents: number;
  pricingPlanId: CourseFrontmatter["pricingPlanId"];
  priceInCents: number;
  showMembership: boolean;
  title: CourseFrontmatter["title"];
}

export default function PricingPanels(props: Props) {
  const [membership, setMembership] = useState(membershipTypes[0]);
  const {
    categories,
    currency,
    hours,
    linesOfCode,
    isCourse,
    membershipHours,
    membershipLinesOfCode,
    monthlyMembership,
    monthlyPriceInCents,
    yearlyMembership,
    yearlyPriceInCents,
    pricingPlanId,
    priceInCents,
    showMembership,
    title,
  } = props;

  const membershipPriceInCents =
    membership.value === "Monthly" ? monthlyPriceInCents : yearlyPriceInCents;

  // Estimate how many months until membership pays off vs buying this course
  const monthsToBreakeven =
    monthlyPriceInCents > 0
      ? Math.ceil(priceInCents / monthlyPriceInCents)
      : null;

  return (
    <>
      <div
        className={`mx-auto mt-16 sm:mt-20 ${
          showMembership
            ? "grid max-w-lg gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
            : "max-w-lg"
        }`}
      >
        {/* Single course card */}
        <div
          className={`card-shadow card-shadow-color rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:p-10 lg:mx-0 ${
            showMembership ? "lg:rounded-r-none" : ""
          }`}
        >
          <h3
            id="tier-hobby"
            className="text-base font-semibold leading-7 text-accent-1"
          >
            {title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
            Lifetime License
          </p>
          <CoursePrice
            currency={currency}
            priceInCents={priceInCents}
            recurring="nonrecurring"
          >
            <div
              className="mt-4 flex items-baseline gap-x-2 text-5xl font-bold tracking-tight text-content"
              slot="fallback"
            >
              Loading...
            </div>
          </CoursePrice>
          <p className="mt-6 text-sm leading-7 text-content-1">
            {isCourse
              ? "Just this course"
              : "All courses in this bundle"}{" "}
            with a one-time payment
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
            {[
              `${hours} hours of 4K content`,
              `${linesOfCode.toLocaleString()} lines of code written`,
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
            className="mt-8 block rounded-md bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-gray-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
          >
            Enroll Now
          </PurchaseLink>
        </div>

        {/* Membership card */}
        {showMembership && (
          <div className="card-shadow card-shadow-color relative rounded-3xl bg-secondary p-8 shadow-2xl ring-2 ring-cta sm:p-10 lg:rounded-l-none">
            {/* Best Value badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-cta px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ctatext shadow-sm">
                Best Value
              </span>
            </div>

            <div className="mb-5 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <RadioGroup
                  value={membership}
                  onChange={setMembership}
                  className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-content/20"
                >
                  <Radio
                    key={membershipTypes[0]!.value}
                    value={membershipTypes[0]}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-content-1 data-[checked]:bg-cta data-[checked]:text-ctatext"
                  >
                    {membershipTypes[0]!.label}
                  </Radio>
                  <Radio
                    key={membershipTypes[1]!.value}
                    value={membershipTypes[1]}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-content-1 data-[checked]:bg-cta data-[checked]:text-ctatext"
                  >
                    {membershipTypes[1]!.label}
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
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
              Every Rock the JVM course
            </p>
            <div className="mt-4 flex items-baseline gap-x-2">
              <CoursePrice
                priceInCents={membershipPriceInCents}
                currency={currency}
                recurring={
                  membership.value === "Monthly" ? "monthly" : "yearly"
                }
              >
                <div
                  className="mt-4 flex items-baseline gap-x-2 text-5xl font-bold tracking-tight text-content"
                  slot="fallback"
                >
                  Loading...
                </div>
              </CoursePrice>
            </div>
            {monthsToBreakeven !== null && membership.value === "Monthly" && (
              <p className="mt-2 text-xs text-accent-2">
                Access all courses for less than the price of {monthsToBreakeven}{" "}
                month{monthsToBreakeven !== 1 ? "s" : ""} of membership
              </p>
            )}
            <p className="mt-4 text-sm leading-7 text-content-1">
              Unlimited access to all Rock the JVM courses
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
              {[
                `${membershipHours} hours of 4K content`,
                `${membershipLinesOfCode.toLocaleString()} lines of code written`,
                ...categories.map(
                  ({ data }: { data: { name: string } }) =>
                    `All ${data.name} courses`,
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
              className="mt-8 block rounded-md bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-gray-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
            >
              Join Now
            </PurchaseLink>
          </div>
        )}
      </div>
    </>
  );
}
