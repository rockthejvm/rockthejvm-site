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
          <DisclosureButton className="card-shadow card-shadow-color group flex min-h-32 w-full items-center justify-between rounded-2xl bg-secondary p-8 text-left text-content">
            <div className="flex flex-1 items-center gap-x-4">
              <div className="flex size-16 justify-center rounded-full bg-white p-3 align-middle ring-1 ring-content-2 md:p-4 lg:size-28 lg:p-5">
                <img
                  className="my-auto w-full"
                  src={props.category.data.logo}
                ></img>
              </div>
              <span className="flex-1 text-base font-semibold leading-7">
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
