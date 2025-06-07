import PurchaseLink from "@/components/PurchaseLink";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

export const membershipTypes = [
  { value: "Monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "Yearly", label: "Yearly", priceSuffix: "/year" },
];

export default function Example(props) {
  const [membership, setMembership] = useState(membershipTypes[0]);

  return (
    <>
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
      <div className={`${membership.value === "Monthly" ? "" : "hidden"}`}>
        <h3
          id="tier-hobby"
          className="text-base font-semibold leading-7 text-accent-1"
        >
          All-Access Monthly Membership
        </h3>
        <div className="mt-4 flex items-baseline gap-x-2">
          {props.monthlyPrice}
        </div>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            <p className="text-left">
              A single Netflix-style monthly subscription for everything in the
              Scala ecosystem
            </p>
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Scala & FP
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Cats + Cats Effect
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            ZIO
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Akka
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Apache Spark
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Apache Flink
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            <p className="text-left">
              A whopping {props.membershipHours}+ hours of video and{" "}
              {props.membershipLinesOfCode}+ lines of code from scratch!
            </p>
          </li>
        </ul>
        <PurchaseLink
          pricingPlanId={props.monthlyMembership.pricingPlanId}
          ariaDescribedBy="tier-hobby"
          className="mt-8 block rounded-xl bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-content-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
          client:load
        >
          Join Now
        </PurchaseLink>
        <small className="mt-16 text-sm text-content-1">
          <i className="mt-8">
            This is a subscription product billed on a monthly basis until you
            cancel. Cancel anytime from the account management page.
          </i>
        </small>
      </div>
      <div className={`${membership.value === "Yearly" ? "" : "hidden"}`}>
        <h3
          id="tier-enterprise"
          className="text-base font-semibold leading-7 text-accent-1"
        >
          All-Access Yearly Membership
        </h3>
        <div className="mt-4 flex items-baseline gap-x-2">
          {props.yearlyPrice}
        </div>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10">
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            <p className="text-left">
              A single Netflix-style yearly subscription for everything in the
              Scala ecosystem
            </p>
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Scala & FP
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Cats + Cats Effect
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            ZIO
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Akka
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Apache Spark
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            Apache Flink
          </li>
          <li className="flex gap-x-3">
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
              ></path>
            </svg>
            <p className="text-left">
              A whopping {props.membershipHours}+ hours of video and{" "}
              {props.membershipLinesOfCode}+ lines of code from scratch!
            </p>
          </li>
        </ul>
        <PurchaseLink
          pricingPlanId={props.yearlyMembership.pricingPlanId}
          ariaDescribedBy="tier-enterprise"
          className="mt-8 block rounded-xl bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-ctatext focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
          client:load
        >
          Join Now
        </PurchaseLink>
        <small className="mt-16 text-sm text-content-1">
          <i className="mt-8">
            This is a subscription product billed on a yearly basis until you
            cancel. Cancel anytime from the account management page.
          </i>
        </small>
      </div>
    </>
  );
}
