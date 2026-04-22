import PurchaseLink from "@/components/PurchaseLink";
import centsToPrice, { splitPrice } from "@/utils/centsToPrice";
import { membershipTypes } from "@/pages/memberships/_sections/MembershipPricingSectionHelper";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface HeroCopy {
  cardSupportText: string;
  monthlyCtaLabel: string;
  monthlyFallbackLabel: string;
  yearlyCtaLabel: string;
  yearlyFallbackLabel: string;
}

interface Props {
  currency?: string;
  hero: HeroCopy;
  monthlyPriceInCents?: number;
  monthlyPricingPlanId?: number;
  yearlyPriceInCents?: number;
  yearlyPricingPlanId?: number;
}

function SavingsBadge({ percent }: { percent: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/25 [[data-theme=light]_&]:bg-emerald-500/20 [[data-theme=light]_&]:text-emerald-700 [[data-theme=light]_&]:ring-emerald-600/35">
      Save {percent}%
    </span>
  );
}

export default function MembershipHeroPricingCard({
  currency,
  hero,
  monthlyPriceInCents,
  monthlyPricingPlanId,
  yearlyPriceInCents,
  yearlyPricingPlanId,
}: Props) {
  // Default to yearly — better value for the user
  const [membership, setMembership] = useState(membershipTypes[1]!);
  const isYearly = membership.value === "Yearly";

  const yearlySavingsPct =
    monthlyPriceInCents !== undefined &&
    yearlyPriceInCents !== undefined &&
    monthlyPriceInCents > 0
      ? Math.round((1 - yearlyPriceInCents / (12 * monthlyPriceInCents)) * 100)
      : null;

  const displayCents =
    currency !== undefined
      ? isYearly && yearlyPriceInCents !== undefined
        ? Math.round(yearlyPriceInCents / 12)
        : monthlyPriceInCents
      : undefined;

  const formattedDisplay =
    currency !== undefined && displayCents !== undefined
      ? centsToPrice(displayCents, currency, 2)
      : undefined;

  const { whole: wholePart, frac: fracPart } = formattedDisplay
    ? splitPrice(formattedDisplay)
    : { whole: formattedDisplay, frac: "" };

  const yearlyFormatted =
    currency !== undefined && yearlyPriceInCents !== undefined
      ? centsToPrice(yearlyPriceInCents, currency)
      : undefined;

  const activePlanId = isYearly ? yearlyPricingPlanId : monthlyPricingPlanId;
  const activeFallback = isYearly
    ? hero.yearlyFallbackLabel
    : hero.monthlyFallbackLabel;
  const activeCtaLabel = isYearly ? hero.yearlyCtaLabel : hero.monthlyCtaLabel;

  return (
    <div className="rounded-2xl bg-content/5 px-6 py-5 ring-1 ring-content/10 backdrop-blur-sm">
      <h3 className="text-center text-sm font-semibold text-accent-1">
        All-Access Membership
      </h3>

      {/* Monthly / Yearly toggle */}
      <div className="mt-4 flex justify-center">
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

      {/* Price display */}
      {formattedDisplay && (
        <div className="mt-5 text-center">
          <div className="flex items-baseline justify-center gap-x-2">
            <span className="flex items-start leading-none">
              <span className="text-4xl font-bold tracking-tight text-content">
                {wholePart}
              </span>
              {fracPart && (
                <span className="mt-1 text-lg font-bold text-content/70">
                  {fracPart}
                </span>
              )}
            </span>
            <span className="text-sm text-content-1">/month</span>
          </div>
          {isYearly ? (
            <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-content-1/60">
              {yearlyFormatted} billed yearly
              {yearlySavingsPct !== null && (
                <>
                  {" — "}
                  <SavingsBadge percent={yearlySavingsPct} />
                </>
              )}
            </p>
          ) : (
            yearlySavingsPct !== null && (
              <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-content-1/60">
                Switch to yearly and <SavingsBadge percent={yearlySavingsPct} />
              </p>
            )
          )}
        </div>
      )}

      {/* Supporting text */}
      <p className="mt-4 text-center text-xs text-content-1/60">
        {hero.cardSupportText}
      </p>

      {/* CTA */}
      <div className="mt-4">
        {activePlanId !== undefined ? (
          <PurchaseLink
            pricingPlanId={activePlanId}
            className={`block rounded-md px-6 py-3 text-center text-sm font-semibold shadow-sm hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isYearly
                ? "bg-cta text-ctatext hover:bg-accent-1 hover:text-ctatext focus-visible:outline-cta"
                : "bg-content/10 text-content-1 ring-1 ring-inset ring-content/20 hover:bg-content/20 focus-visible:outline-content/50"
            }`}
          >
            {activeCtaLabel}
          </PurchaseLink>
        ) : (
          <a
            href="#pricing"
            className={`block rounded-md px-6 py-3 text-center text-sm font-semibold shadow-sm hover:no-underline ${
              isYearly
                ? "bg-cta text-ctatext hover:bg-accent-1 hover:text-ctatext"
                : "bg-content/10 text-content-1 ring-1 ring-inset ring-content/20 hover:bg-content/20"
            }`}
          >
            {activeFallback}
          </a>
        )}
      </div>
    </div>
  );
}
