import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import type { CollectionEntry } from "astro:content";

interface Props {
  faqs: CollectionEntry<"courses">["data"]["faqs"];
}

export default function Example({ faqs }: Props) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-1 sm:py-2 lg:px-8 lg:py-3">
        {/* <div className="mx-auto max-w-4xl divide-y divide-gray-900/10"> */}
        {/* <h2 className="text-2xl font-bold leading-10 tracking-tight text-content-1">
            Frequently asked questions
          </h2> */}
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-content-1">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="h-6 w-6 group-data-[open]:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-content-2">
                  {faq.answer}
                </p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
        {/* </div> */}
      </div>
    </div>
  );
}
