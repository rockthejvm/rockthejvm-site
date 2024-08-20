"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import MembershipPricing from "./MembershipPricing.astro";
import MembershipTeamPricing from "./MembershipTeamPricing.astro";

const benefits = ["TODO", "TODO", "TODO", "TODO", "TODO", "TODO"];

const membershipTypes = [
  { value: "Individual", label: "Individual", priceSuffix: "/month" },
  { value: "Team", label: "Team Pack", priceSuffix: "/year" },
];

export default function Example(props) {
  const [membership, setMembership] = useState(membershipTypes[0]);

  return (
    <div class="relative isolate bg-bkg px-6 py-1 sm:py-2 lg:px-8">
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
      <div class={`${membership.value === "Individual" ? "" : "hidden"}`}>
        <div
          class={`mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2`}
        >
          <div class="rounded-3xl rounded-t-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <h3
              id="tier-hobby"
              class="text-base font-semibold leading-7 text-accent-1"
            >
              {props.monthlyTitle}
            </h3>
            <p class="mt-4 flex items-baseline gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-content">
                ${props.monthlyPrice}
              </span>
              <span class="text-base text-content">/month</span>
            </p>
            <p class="mt-6 text-base leading-7 text-content">You get:</p>
            <ul
              role="list"
              class="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10"
            >
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
            <p class="text-sm mt-8 text-content-1">
              This is a subscription product billed on a monthly basis until you
              cancel. Cancel anytime from the account management page.
            </p>
            <a
              href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
              aria-describedby="tier-hobby"
              class="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Get Now
            </a>
          </div>
          <div class="relative rounded-3xl bg-secondary p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <h3
              id="tier-enterprise"
              class="text-base font-semibold leading-7 text-accent-1"
            >
              {props.yearlyTitle}
            </h3>
            <p class="mt-4 flex items-baseline gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-content">
                ${props.yearlyPrice}
              </span>
              <span class="text-base text-content">/year</span>
            </p>
            <ul
              role="list"
              class="mt-8 space-y-3 text-sm leading-6 text-content sm:mt-10"
            >
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-accent-1"
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
              href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
              aria-describedby="tier-enterprise"
              class="mt-8 block rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm text-content-1 hover:text-content-1 hover:bg-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
      <div class={`${membership.value === "Team" ? "" : "hidden"}`}>
        <div
          class={`mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2`}
        >
          <div class="rounded-3xl rounded-t-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <h3
              id="tier-hobby"
              class="text-base font-semibold leading-7 text-accent-1"
            >
              3-Team Pack
            </h3>
            <p class="mt-4 flex items-baseline gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-content">
                ${395}
              </span>
              <span class="text-base text-content">/year</span>
            </p>
            <p class="mt-6 text-base leading-7 text-content">
              A single yearly membership for up to 3 people
            </p>
            <p class="mt-6 text-base leading-7 text-content">
              Easier bookkeeping for your company.
            </p>
            <p class="mt-6 text-base leading-7 text-content">
              This single purchase gives you access to everything on the site
              for up to 3 people in your team. Send their names and emails to me
              at daniel@rockthejvm.com and I will enroll your team instantly.
            </p>
            <p class="text-sm mt-8 text-content-1">
              This is a subscription product billed on a yearly basis until you
              cancel. Cancel anytime from the account management page.
            </p>
            <a
              href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
              aria-describedby="tier-hobby"
              class="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
            >
              Get Now
            </a>
          </div>
          <div class="rounded-3xl rounded-t-3xl bg-secondary/60 p-8 ring-1 ring-content-2/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
            <div class="mt-8">
              <h3
                id="tier-hobby"
                class="text-base font-semibold leading-7 text-accent-1"
              >
                5-Team Pack
              </h3>
              <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-content">
                  ${900}
                </span>
                <span class="text-base text-content">/year</span>
              </p>
              <a
                href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
                aria-describedby="tier-hobby"
                class="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-4"
              >
                Get Now
              </a>
            </div>
            <div class="mt-8">
              <h3
                id="tier-hobby"
                class="text-base font-semibold leading-7 text-accent-1"
              >
                10-Team Pack
              </h3>
              <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-content">
                  ${1800}
                </span>
                <span class="text-base text-content">/year</span>
              </p>
              <a
                href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
                aria-describedby="tier-hobby"
                class="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-4"
              >
                Get Now
              </a>
            </div>
            <div class="mt-8">
              <h3
                id="tier-hobby"
                class="text-base font-semibold leading-7 text-accent-1"
              >
                15-Team Pack
              </h3>
              <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-content">
                  ${2700}
                </span>
                <span class="text-base text-content">/year</span>
              </p>
              <a
                href="https://sso.teachable.com/secure/256201/checkout/4131056/membership"
                aria-describedby="tier-hobby"
                class="mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-content ring-1 ring-inset ring-primary hover:ring-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-4"
              >
                Get Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
