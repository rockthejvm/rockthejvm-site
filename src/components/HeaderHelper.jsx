"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import site from "../data/site.json";

const navigation = [
  { name: "Articles", href: "/articles/1" },
  { name: "Courses", href: "/courses" },
  { name: "Videos", href: "https://www.youtube.com/rockthejvm" },
  { name: "About", href: "/about" },
];

export default function Example(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black/5 shadow-slate-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">{site.name}</span>
          {props.logo}
        </a>
        <div className="flex items-center gap-x-4 lg:gap-x-12">
          <div className="hidden items-center lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6`}
              >
                <span
                  className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                >
                  {item.name}
                </span>
              </a>
            ))}
            <a
              href="https://sso.teachable.com/secure/256201/identity/login/password"
              className={`text-sm font-semibold leading-6`}
            >
              <span
                className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </div>
          {props.search}
          {props.themeToggle}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
            >
              <span
                className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </span>
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bkg p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{site.name}</span>
              {props.logo}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-content-1"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-secondary`}
                  >
                    <span
                      className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                    >
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://sso.teachable.com/secure/256201/identity/login/password"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-secondary`}
                >
                  <span
                    className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                  >
                    Log in
                  </span>
                </a>
              </div>
              {/* {props.themeToggle} */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
