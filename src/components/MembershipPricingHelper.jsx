"use client";

import PurchaseLink from "@components/PurchaseLink";
import { Radio, RadioGroup } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";

// const membershipTypes = [
//   { value: "Individual", label: "Individual", priceSuffix: "/month" },
//   { value: "Team", label: "Team Pack", priceSuffix: "/year" },
// ];

const membershipTypes = [
  { value: "Monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "Yearly", label: "Yearly", priceSuffix: "/year" },
];

const monthlyMembershipPricingPlanId = 4131055;
const yearlyMembershipPricingPlanId = 4131056;

// const plans = [
//   {
//     id: "5",
//     name: "5-Team",
//     price: 900,
//     url: "https://courses.rockthejvm.com/purchase?product_id=4476809",
//   },
//   {
//     id: "10",
//     name: "10-Team",
//     price: 1800,
//     url: "https://courses.rockthejvm.com/purchase?product_id=4476810",
//   },
//   {
//     id: "15",
//     name: "15-Team",
//     price: 2700,
//     url: "https://courses.rockthejvm.com/purchase?product_id=3514316",
//   },
// ];

export default function Example(props) {
  const [membership, setMembership] = useState(membershipTypes[0]);
  const [monthlyPrice, setMonthlyPrice] = useState("Free");
  const [yearlyPrice, setYearlyPrice] = useState("Free");
  const [monthlyLoading, setMonthlyLoading] = useState(true);
  const [monthlyError, setMonthlyError] = useState(null);
  const [yearlyLoading, setYearlyLoading] = useState(true);
  const [yearlyError, setYearlyError] = useState(null);

  const getCoursePrice = useCallback(async (args) => {
    // setLoading(true);
    // setError(null);
    try {
      // const options = {
      //   method: "GET",
      //   headers: {
      //     accept: "application/json",
      //     apiKey: import.meta.env.PUBLIC_REACT_APP_API_KEY || "",
      //   },
      // };

      // const response = await fetch(
      //   `https://developers.teachable.com/v1/pricing_plans/${args.pricingPlanId}`,
      //   options,
      // );

      const response = await fetch(`/api/purchase/${args.pricingPlanId}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const course = await response.json();

      if (course.price <= 0) {
        args.func("Free");
      } else {
        args.func(`$${(course.price / 100).toFixed(2)}`);
      }
    } catch (error) {
      // setError(
      //   `Failed to fetch course price: ${error instanceof Error ? error.message : "Unknown error"}`,
      // );
      args.errorFunc(
        `Failed to fetch course price: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      console.error("Failed to fetch course price:", error);
    } finally {
      args.loadingFunc(false);
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCoursePrice({
      pricingPlanId: props.monthlyPriceId,
      func: setMonthlyPrice,
      errorFunc: setMonthlyError,
      loadingFunc: setMonthlyLoading,
    });
    getCoursePrice({
      pricingPlanId: props.yearlyPriceId,
      func: setYearlyPrice,
      errorFunc: setYearlyError,
      loadingFunc: setYearlyLoading,
    });
  }, [
    props.monthlyPriceId,
    props.yearlyPriceId,
    setMonthlyError,
    setMonthlyLoading,
    setYearlyError,
    setYearlyLoading,
    getCoursePrice,
  ]);

  return (
    <div className="relative isolate px-6 py-1 sm:py-2 lg:px-8">
      <div
        className={`isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2`}
      >
        <div className="card-shadow card-shadow-color rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 xl:p-10">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            {props.personalImage}
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
            <div
              className={`${membership.value === "Monthly" ? "" : "hidden"}`}
            >
              <h3
                id="tier-hobby"
                className="text-base font-semibold leading-7 text-accent-1"
              >
                {props.monthlyTitle}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                {monthlyError && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    ${props.monthlyError}
                  </span>
                )}
                {!monthlyError && !monthlyLoading && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    {monthlyPrice}
                  </span>
                )}
                {!monthlyError && monthlyLoading && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    Loading
                  </span>
                )}
                <span className="text-base text-content">/month</span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10"
              >
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
                    A single Netflix-style monthly subscription for everything
                    in the Scala ecosystem
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
                pricingPlanId={monthlyMembershipPricingPlanId}
                ariaDescribedBy="tier-hobby"
                className="mt-8 block rounded-xl bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-ctatext shadow-sm hover:bg-accent-1 hover:text-content-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
                client:load
              >
                Join Now
              </PurchaseLink>
              <small className="mt-16 text-sm text-content-1">
                <i className="mt-8">
                  This is a subscription product billed on a monthly basis until
                  you cancel. Cancel anytime from the account management page.
                </i>
              </small>
            </div>
            <div className={`${membership.value === "Yearly" ? "" : "hidden"}`}>
              <h3
                id="tier-enterprise"
                className="text-base font-semibold leading-7 text-accent-1"
              >
                {props.yearlyTitle}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                {yearlyError && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    ${props.yearlyError}
                  </span>
                )}
                {!yearlyError && !yearlyLoading && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    {yearlyPrice}
                  </span>
                )}
                {!yearlyError && yearlyLoading && (
                  <span className="text-5xl font-bold tracking-tight text-content">
                    Loading
                  </span>
                )}
                <span className="text-base text-content">/year</span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10"
              >
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
                    A single Netflix-style yearly subscription for everything in
                    the Scala ecosystem
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
                pricingPlanId={yearlyMembershipPricingPlanId}
                ariaDescribedBy="tier-enterprise"
                className="mt-8 block rounded-xl bg-cta px-3.5 py-2.5 text-center text-sm font-semibold text-content-1 shadow-sm hover:bg-accent-1 hover:text-content-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
                client:load
              >
                Join Now
              </PurchaseLink>
              <small className="mt-16 text-sm text-content-1">
                <i className="mt-8">
                  This is a subscription product billed on a yearly basis until
                  you cancel. Cancel anytime from the account management page.
                </i>
              </small>
            </div>
          </div>
        </div>
        <div>
          <div className="card-shadow card-shadow-color rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 xl:p-10">
            {props.teamImage}
            <h3 className="text-5xl font-bold tracking-tight text-content">
              Team Pack
            </h3>
            {/* <h3
              id="tier-hobby"
              className="text-base font-semibold leading-7 text-accent-1"
            >
              Team Pack
            </h3>*/}
            {/* <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-content">
              ${395}
            </span>
            <span className="text-base text-content">/year</span>
          </p> */}
            <p className="mt-6 text-base leading-7 text-content">
              A single yearly membership for a team.
            </p>
            <p className="mt-6 text-base leading-7 text-content">
              Easier bookkeeping for your company.
            </p>
            <p className="mt-6 text-base leading-7 text-content">
              This single purchase gives you access to everything on the site
              for your team.{" "}
              <a href="/contact">
                Send their names and emails to me and I will enroll your team
                instantly.
              </a>
            </p>
            <p className="mt-8 text-sm text-content-1">
              This is a subscription product billed on a yearly basis until you
              cancel. Cancel anytime from the account management page.
            </p>
            <a
              href="/contact"
              aria-describedby="tier-hobby"
              className="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-cta hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:mt-10"
            >
              Contact Me
            </a>
            <small className="mt-16 text-sm text-content-1">
              <i className="mt-8">
                This is a subscription product billed on a yearly basis until
                you cancel. Cancel anytime from the account management page.
              </i>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
