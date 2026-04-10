import PurchaseLink from "@/components/PurchaseLink";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

export const membershipTypes = [
  { value: "Monthly", label: "Monthly" },
  { value: "Yearly", label: "Yearly" },
];

function SavingsBadge({ percent }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
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

export default function MembershipPricingSectionHelper({
  currency,
  monthlyPricingPlanId,
  yearlyPricingPlanId,
  monthlyPriceInCents,
  yearlyPriceInCents,
  membershipHours,
  membershipLinesOfCode,
  categories,
}) {
  const [membership, setMembership] = useState(membershipTypes[1]);

  const isYearly = membership.value === "Yearly";
  const yearlySavingsPct =
    monthlyPriceInCents > 0
      ? Math.round((1 - yearlyPriceInCents / (12 * monthlyPriceInCents)) * 100)
      : null;

  const features = [
    `${membershipHours} hours of 4K content`,
    `${membershipLinesOfCode.toLocaleString()} lines of code written`,
    ...categories.map(({ data }) => `All ${data.name} courses`),
    "Access to the private Rock the JVM community",
    "New courses included automatically",
  ];

  return (
    <div className="mx-auto mt-16 sm:mt-20 grid max-w-4xl gap-8 lg:grid-cols-2">
      {/* Personal Membership */}
      <div className="card-shadow card-shadow-color relative rounded-3xl bg-secondary p-8 shadow-2xl ring-2 ring-cta sm:p-10">
        {/* Best Value badge */}

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
                {membershipTypes[0].label}
              </Radio>
              <Radio
                value={membershipTypes[1]}
                className="cursor-pointer rounded-full px-2.5 py-1 text-content-1 data-[checked]:bg-cta data-[checked]:text-ctatext"
              >
                {membershipTypes[1].label}
              </Radio>
            </RadioGroup>
          </fieldset>
        </div>

        <h3
          id="tier-membership"
          className="text-xl font-semibold leading-7 text-accent-1"
        >
          All-Access Membership
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
          Everything, always up to date
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
          {features.map((line, idx) => (
            <li className="flex gap-x-3" key={idx}>
              <CheckIcon />
              {line}
            </li>
          ))}
        </ul>
        <PurchaseLink
          pricingPlanId={isYearly ? yearlyPricingPlanId : monthlyPricingPlanId}
          ariaDescribedBy="tier-membership"
          className="mt-8 block rounded-md bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-gray-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
        >
          Start Membership
        </PurchaseLink>
        <small className="mt-6 block text-xs text-content-1/60">
          <i>
            Subscription billed {isYearly ? "yearly" : "monthly"} — cancel
            anytime.
          </i>
        </small>
      </div>

      {/* Team Pack */}
      <div className="card-shadow card-shadow-color rounded-3xl bg-secondary p-8 shadow-2xl ring-2 ring-cta sm:p-10">
        <h3
          id="tier-team"
          className="flex items-center gap-2 text-xl font-semibold leading-7 text-accent-1"
        >
          <svg
            className="h-6 w-6 flex-none"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          Team Pack
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-content-1/60">
          For your whole team
        </p>
        <div className="mt-6 text-sm leading-7 text-content">
          <p>A single yearly membership for your entire team.</p>
          <p className="mt-4">
            Easier bookkeeping for your company. This single purchase gives your
            team access to everything on the site.
          </p>
        </div>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
          {[
            "Single invoice for your company",
            "Full access to all courses for the team",
            "Instant enrollment via email",
            "Yearly team subscription",
          ].map((line, idx) => (
            <li className="flex gap-x-3" key={idx}>
              <CheckIcon />
              {line}
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          aria-describedby="tier-team"
          className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cta ring-1 ring-inset ring-cta hover:bg-cta hover:text-ctatext hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
        >
          Contact Me
        </a>
        <small className="mt-6 block text-xs text-content-1/60">
          <i>
            Send your team's names and emails and I'll enroll them instantly.
          </i>
        </small>
      </div>
    </div>
  );
}
