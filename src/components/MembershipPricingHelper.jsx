"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const benefits = ["TODO", "TODO", "TODO", "TODO", "TODO", "TODO"];

const membershipTypes = [
  { value: "Individual", label: "Individual", priceSuffix: "/month" },
  { value: "Team", label: "Team Pack", priceSuffix: "/year" },
];

const plans = [
  {
    id: "5",
    name: "5-Team",
    price: 900,
    url: "https://rockthejvm.com/purchase?product_id=4476809",
  },
  {
    id: "10",
    name: "10-Team",
    price: 1800,
    url: "https://rockthejvm.com/purchase?product_id=4476810",
  },
  {
    id: "15",
    name: "15-Team",
    price: 2700,
    url: "https://rockthejvm.com/purchase?product_id=3514316",
  },
];

export default function Example(props) {
  const [membership, setMembership] = useState(membershipTypes[0]);
  const [teamPack, setTeamPack] = useState(plans[0]);

  const handleHandleTeamPackChange = (event) => {
    console.log(event.target.value);
    setTeamPack(event.target.value);
  };

  return (
    <div className="relative isolate px-6 py-1 sm:py-2 lg:px-8">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={membership}
              onChange={setMembership}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
              {membershipTypes.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
      </div>
      <div className={`${membership.value === "Individual" ? "" : "hidden"}`}>
        <div
          className={`mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2`}
        >
          <div className="rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <h3
              id="tier-hobby"
              className="text-base font-semibold leading-7 text-accent-1"
            >
              {props.monthlyTitle}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-content">
                ${props.monthlyPrice}
              </span>
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
                A single Netflix-style monthly subscription for everything in
                the Scala ecosystem
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-accent-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                A whopping {props.membershipHours}+ hours of video and{" "}
                {props.membershipLinesOfCode}+ lines of code from scratch!
              </li>
            </ul>
            <a
              href="https://rockthejvm.com/purchase?product_id=4131055"
              aria-describedby="tier-hobby"
              className="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Get Now
            </a>
            <small className="mt-16 text-sm text-content-1">
              <i class="mt-8">
                This is a subscription product billed on a monthly basis until
                you cancel. Cancel anytime from the account management page.
              </i>
            </small>
          </div>
          <div className="relative rounded-3xl bg-secondary p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <h3
              id="tier-enterprise"
              className="text-base font-semibold leading-7 text-accent-1"
            >
              {props.yearlyTitle}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-content">
                ${props.yearlyPrice}
              </span>
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                A single Netflix-style monthly subscription for everything in
                the Scala ecosystem
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-accent-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                A whopping {props.membershipHours}+ hours of video and{" "}
                {props.membershipLinesOfCode}+ lines of code from scratch!
              </li>
            </ul>
            <a
              href="https://rockthejvm.com/purchase?product_id=4131056"
              aria-describedby="tier-enterprise"
              className="mt-8 block rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-content-1 shadow-sm hover:bg-accent-1 hover:text-content-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Join Now
            </a>
            <small className="mt-16 text-sm text-content-1">
              <i class="mt-8">
                This is a subscription product billed on a yearly basis until
                you cancel. Cancel anytime from the account management page.
              </i>
            </small>
          </div>
        </div>
      </div>
      <div className={`${membership.value === "Team" ? "" : "hidden"}`}>
        <div
          className={`mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2`}
        >
          <div className="rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <h3
              id="tier-hobby"
              className="text-base font-semibold leading-7 text-accent-1"
            >
              3-Team Pack
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-content">
                ${395}
              </span>
              <span className="text-base text-content">/year</span>
            </p>
            <p className="mt-6 text-base leading-7 text-content">
              A single yearly membership for up to 3 people
            </p>
            <p className="mt-6 text-base leading-7 text-content">
              Easier bookkeeping for your company.
            </p>
            <p className="mt-6 text-base leading-7 text-content">
              This single purchase gives you access to everything on the site
              for up to 3 people in your team. Send their names and emails to me
              at{" "}
              <a href="rockthejvm.com/contact">
                and I will enroll your team instantly.
              </a>
            </p>
            <p className="mt-8 text-sm text-content-1">
              This is a subscription product billed on a yearly basis until you
              cancel. Cancel anytime from the account management page.
            </p>
            <a
              href="https://rockthejvm.com/purchase?product_id=4660874"
              aria-describedby="tier-hobby"
              className="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Get Now
            </a>
            <small className="mt-16 text-sm text-content-1">
              <i class="mt-8">
                This is a subscription product billed on a yearly basis until
                you cancel. Cancel anytime from the account management page.
              </i>
            </small>
          </div>
          <div className="rounded-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <RadioGroup
              value={teamPack}
              onChange={setTeamPack}
              className="mb-8"
            >
              <div className="space-y-5">
                {plans.map((plan) => (
                  <div key={plan.id} className="relative flex items-start">
                    <div className="my-auto flex h-6 items-center">
                      <Radio
                        key={plan.name}
                        value={plan}
                        aria-label={plan.name}
                        aria-describedby={`${plan.id}-description`}
                        className="group size-6 data-[checked]:border-accent-1"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex size-6 items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:bg-accent-1 ${teamPack.name === plan.name ? "bg-accent-1" : ""}`}
                        >
                          <span className="size-1.5 rounded-full bg-white" />
                        </span>
                      </Radio>
                    </div>
                    <div className="ml-8 mt-8 text-sm leading-6">
                      <h3
                        id="tier-hobby"
                        className="text-base font-semibold leading-7 text-accent-1"
                      >
                        {plan.name} Pack
                      </h3>
                      <p className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-content">
                          ${plan.price}
                        </span>
                        <span className="text-base text-content">/year</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
            <div className="mt-4">
              Selected option: <strong>{teamPack.name}</strong>
            </div>
            <a
              href={teamPack.url}
              aria-describedby="tier-hobby"
              className="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-4"
            >
              Get Now
            </a>
            <small className="mt-16 text-sm text-content-1">
              <i class="mt-8">
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
