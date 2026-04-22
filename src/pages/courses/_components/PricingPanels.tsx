import PurchaseLink from "@/components/PurchaseLink";
import { membershipTypes } from "@/pages/memberships/_sections/MembershipPricingSectionHelper";
import { Radio, RadioGroup } from "@headlessui/react";
import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import CoursePrice from "./CoursePrice";

type CourseFrontmatter = CollectionEntry<"courses">["data"];

interface BundleData {
  id: string;
  title: string;
  pricingPlanId: number;
  priceInCents: number;
  courseCount: number;
  hours: number;
  savingsPercent?: number;
}

interface Props {
  bundle?: BundleData;
  categories: CollectionEntry<"courseCategories">[];
  currency: string;
  hours: number;
  isCourse: boolean;
  membershipHours: number;
  monthlyMembershipPricingPlanId: number;
  monthlyPriceInCents: number;
  yearlyMembershipPricingPlanId: number;
  yearlyPriceInCents: number;
  pricingPlanId: CourseFrontmatter["pricingPlanId"];
  priceInCents: number;
  showMembership: boolean;
  title: CourseFrontmatter["title"];
}

function SavingsBadge({ percent }: { percent: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-500 ring-1 ring-inset ring-emerald-500/25">
      Save {percent}%
    </span>
  );
}

function MembershipPriceDisplay({
  currency,
  isYearly,
  monthlyPriceInCents,
  yearlyPriceInCents,
  yearlySavingsPct,
}: {
  currency: string;
  isYearly: boolean;
  monthlyPriceInCents: number;
  yearlyPriceInCents: number;
  yearlySavingsPct: number | null;
}) {
  const displayCents = isYearly
    ? Math.round(yearlyPriceInCents / 12)
    : monthlyPriceInCents;

  const formatted = (displayCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const dotIdx = formatted.indexOf(".");
  const wholePart = dotIdx >= 0 ? formatted.slice(0, dotIdx) : formatted;
  const fracPart = dotIdx >= 0 ? formatted.slice(dotIdx) : "";

  const yearlyFormatted = (yearlyPriceInCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return (
    <div className="mt-4">
      <div className="flex items-baseline gap-x-2">
        <span className="flex items-start leading-none">
          <span className="text-5xl font-bold tracking-tight text-content">
            {wholePart}
          </span>
          {fracPart && (
            <span className="mt-1 text-xl font-bold text-content/70">
              {fracPart}
            </span>
          )}
        </span>
        <span className="text-base text-content">/month</span>
      </div>
      {isYearly ? (
        <p className="mt-1 flex items-center gap-1.5 text-xs text-content-1/50">
          {yearlyFormatted} billed yearly &mdash;
          {yearlySavingsPct !== null && (
            <SavingsBadge percent={yearlySavingsPct} />
          )}
        </p>
      ) : (
        yearlySavingsPct !== null && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-content-1/60">
            Switch to yearly and <SavingsBadge percent={yearlySavingsPct} />
          </p>
        )
      )}
    </div>
  );
}

function CheckIcon() {
  return (
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
  );
}

export default function PricingPanels(props: Props) {
  // Default to yearly — better value for the user
  const [membership, setMembership] = useState(membershipTypes[1]!);
  const {
    bundle,
    categories,
    currency,
    hours,
    isCourse,
    membershipHours,
    monthlyMembershipPricingPlanId,
    monthlyPriceInCents,
    yearlyMembershipPricingPlanId,
    yearlyPriceInCents,
    pricingPlanId,
    priceInCents,
    showMembership,
    title,
  } = props;

  const isYearly = membership.value === "Yearly";
  const membershipPriceInCents = isYearly ? yearlyPriceInCents : monthlyPriceInCents;
  const yearlySavingsPct =
    monthlyPriceInCents > 0
      ? Math.round((1 - yearlyPriceInCents / (12 * monthlyPriceInCents)) * 100)
      : null;

  const showBundle = !!bundle;
  const panelCount = (showMembership ? 1 : 0) + (showBundle ? 1 : 0) + 1;

  const containerClass =
    panelCount === 3
      ? "mx-auto mt-16 sm:mt-20 grid max-w-6xl gap-y-6 sm:gap-y-0 lg:grid-cols-3"
      : panelCount === 2
        ? "mx-auto mt-16 sm:mt-20 grid max-w-4xl gap-y-6 sm:gap-y-0 lg:grid-cols-2"
        : "mx-auto mt-16 sm:mt-20 max-w-lg";

  return (
    <div className={containerClass}>
      {/* === MEMBERSHIP PANEL (leftmost, most prominent) === */}
      {showMembership && (
        <div className="card-shadow card-shadow-color relative rounded-3xl bg-secondary p-8 shadow-2xl ring-2 ring-cta sm:p-10 lg:rounded-r-none">
          {/* Best Value badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-cta px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ctatext shadow-sm">
              Best Value
            </span>
          </div>

          {/* Monthly / Yearly toggle */}
          <div className="mb-5 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={membership}
                onChange={setMembership}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-content/20"
              >
                <Radio
                  value={membershipTypes[0]}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-content-1 data-[checked]:bg-cta data-[checked]:text-ctatext"
                >
                  {membershipTypes[0]!.label}
                </Radio>
                <Radio
                  value={membershipTypes[1]}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-content-1 data-[checked]:bg-cta data-[checked]:text-ctatext"
                >
                  {membershipTypes[1]!.label}
                </Radio>
              </RadioGroup>
            </fieldset>
          </div>

          <h3
            id="tier-membership"
            className="text-base font-semibold leading-7 text-accent-1"
          >
            All-Access Membership
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
            Full (and growing) catalog
          </p>
          <MembershipPriceDisplay
            currency={currency}
            isYearly={isYearly}
            monthlyPriceInCents={monthlyPriceInCents}
            yearlyPriceInCents={yearlyPriceInCents}
            yearlySavingsPct={yearlySavingsPct}
          />
          <p className="mt-4 text-sm leading-7 text-content-1">
            Unlimited access to every Rock the JVM course
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
            {[
              `${membershipHours} hours of 4K content`,
              ...categories.map(
                ({ data }: { data: { name: string } }) =>
                  `All ${data.name} courses`,
              ),
              "Access to the private Rock the JVM community",
              "New courses included automatically",
            ].map((line, idx) => (
              <li className="flex gap-x-3" key={idx}>
                <CheckIcon />
                {line}
              </li>
            ))}
          </ul>
          <PurchaseLink
            pricingPlanId={
              isYearly
                ? yearlyMembershipPricingPlanId
                : monthlyMembershipPricingPlanId
            }
            ariaDescribedBy="tier-membership"
            className="mt-8 block rounded-md bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-gray-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
          >
            Start Membership
          </PurchaseLink>
        </div>
      )}

      {/* === BUNDLE PANEL (middle) === */}
      {showBundle && bundle && (
        <div
          className={`card-shadow card-shadow-color rounded-3xl bg-secondary/70 p-8 ring-1 ring-content-2/10 sm:p-10 ${
            showMembership && panelCount === 3
              ? "lg:rounded-none"
              : showMembership
                ? "lg:rounded-l-none"
                : "lg:rounded-r-none"
          }`}
        >
          <h3
            id="tier-bundle"
            className="text-base font-semibold leading-7 text-accent-1"
          >
            {bundle.title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
            {bundle.courseCount} courses, one price
          </p>
          <CoursePrice
            currency={currency}
            priceInCents={bundle.priceInCents}
            recurring="nonrecurring"
          />
          {bundle.savingsPercent !== undefined && bundle.savingsPercent > 0 && (
            <div className="mt-3 flex items-center gap-2">
              <SavingsBadge percent={bundle.savingsPercent} />
              <span className="text-xs text-content-1/60">
                vs buying separately
              </span>
            </div>
          )}
          <p className="mt-4 text-sm leading-7 text-content-1">
            All courses in this bundle with a one-time payment
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
            {[
              `${bundle.courseCount} courses included`,
              `${bundle.hours} hours of 4K content`,
              "All PDF slides",
              "Free updates",
              "Lifetime access",
              "Access to the private Rock the JVM community",
            ].map((line, idx) => (
              <li className="flex gap-x-3" key={idx}>
                <CheckIcon />
                {line}
              </li>
            ))}
          </ul>
          <PurchaseLink
            pricingPlanId={bundle.pricingPlanId}
            ariaDescribedBy="tier-bundle"
            className="mt-8 block rounded-md bg-cta/80 px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-cta hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
          >
            Buy Bundle
          </PurchaseLink>
        </div>
      )}

      {/* === COURSE PANEL (rightmost, de-emphasized) === */}
      <div
        className={`card-shadow card-shadow-color rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:p-10 ${
          panelCount === 1 ? "sm:mx-8" : "lg:rounded-l-none"
        }`}
      >
        <h3
          id="tier-course"
          className="text-base font-semibold leading-7 text-accent-1"
        >
          {title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
          Lifetime license
        </p>
        <CoursePrice
          currency={currency}
          priceInCents={priceInCents}
          recurring="nonrecurring"
        />
        <p className="mt-6 text-sm leading-7 text-content-1">
          {isCourse ? "Just this course" : "All courses in this bundle"}{" "}
          with a one-time payment
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
          {[
            `${hours} hours of 4K content`,
            "All PDF slides",
            "Free updates",
            "Lifetime access",
            "Access to the private Rock the JVM community",
          ].map((line, idx) => (
            <li className="flex gap-x-3" key={idx}>
              <CheckIcon />
              {line}
            </li>
          ))}
        </ul>
        <PurchaseLink
          pricingPlanId={pricingPlanId}
          ariaDescribedBy="tier-course"
          className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cta ring-1 ring-inset ring-cta hover:bg-cta hover:text-ctatext hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
        >
          {isCourse ? "Buy Course" : "Buy Bundle"}
        </PurchaseLink>
      </div>
    </div>
  );
}
