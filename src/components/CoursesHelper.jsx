import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Example(props) {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-gray-900/10">
      <Disclosure key={props.category.data.name} as="div" className="pt-6">
        <dt>
          <DisclosureButton className="card-shadow card-shadow-color group flex w-full items-start justify-between rounded-2xl bg-secondary p-8 text-left text-content">
            <span className="text-base font-semibold leading-7">
              <h3>{props.category.data.name}</h3>
            </span>
            <span className="ml-6 flex h-7 items-center">
              <PlusSmallIcon
                aria-hidden="true"
                className="size-6 group-data-[open]:hidden"
              />
              <MinusSmallIcon
                aria-hidden="true"
                className="size-6 [.group:not([data-open])_&]:hidden"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" className="mt-2 pr-12">
          <p className="text-base leading-7 text-content">{props.entries}</p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  );
}
