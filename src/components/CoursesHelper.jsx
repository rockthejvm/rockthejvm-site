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
          <DisclosureButton className="card-shadow card-shadow-color group flex w-full items-center justify-between rounded-2xl bg-secondary p-8 min-h-32 text-left text-content">
            <div className="flex items-center flex-1">
              <img className="h-full w-4 md:w-10 lg:w-20 mr-8" src={props.category.data.logo}>
              </img>
              <span className="text-base font-semibold leading-7 flex-1">
                <h3>{props.category.data.name}</h3>
              </span>
            </div>
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
        <DisclosurePanel as="dd" className="mt-2">
          <p className="text-base leading-7 text-content">{props.entries}</p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  );
}
