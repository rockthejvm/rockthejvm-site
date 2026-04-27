import site from "@/data/site.json";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Courses", href: "/courses" },
  { name: "Articles", href: "/articles/1" },
  { name: "Podcast", href: "/podcast" },
  { name: "Videos", href: site.socials.youtube.url },
];

export default function Example(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black/5 shadow-slate-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a
          href="/"
          className="-m-1.5 flex items-center gap-x-3 p-1.5 hover:no-underline"
        >
          <span className="sr-only">{site.name}</span>
          {props.logo}
          <div
            className={`flex flex-col text-xs font-bold uppercase leading-tight tracking-wider ${props.holiday ? "text-holiday-content-1 hover:text-holiday-content-1" : "text-content hover:text-content"}`}
          >
            <span>ROCK</span>
            <span>THE</span>
            <span>JVM</span>
          </div>
        </a>
        <div className="flex items-center gap-x-3 lg:gap-x-4">
          <div className="hidden items-center lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6"
              >
                <span
                  className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-link-hover"}`}
                >
                  {item.name}
                </span>
              </a>
            ))}
            <a
              href="https://sso.teachable.com/secure/256201/identity/login/password"
              className={`rounded-md px-3.5 py-2 text-sm font-semibold ring-1 ring-inset transition-colors hover:no-underline ${props.holiday ? "text-holiday-content-1 ring-holiday-content-1/30 hover:ring-holiday-content-1/60" : "text-content ring-content/30 hover:ring-content/60"}`}
            >
              Sign In
            </a>
            <a
              href="/memberships"
              className="rounded-md bg-cta px-3.5 py-2 text-sm font-semibold text-ctatext shadow-sm transition-colors hover:bg-accent-1 hover:text-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1"
            >
              Join Rock the JVM
            </a>
          </div>
          {props.search}
          {props.themeToggle}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span
                className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-link-hover"}`}
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bkg p-6 sm:max-w-sm sm:ring-1 sm:ring-content/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="-m-1.5 flex items-center gap-x-3 p-1.5 hover:no-underline"
            >
              <span className="sr-only">{site.name}</span>
              {props.logo}
              <div
                className={`flex flex-col text-xs font-bold uppercase leading-tight tracking-wider ${props.holiday ? "text-holiday-content-1 hover:text-holiday-content-1" : "text-content hover:text-content"}`}
              >
                <span>ROCK</span>
                <span>THE</span>
                <span>JVM</span>
              </div>
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
            <div className="-my-6 divide-y divide-content/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-secondary"
                  >
                    <span
                      className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-link-hover"}`}
                    >
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
              <div className="space-y-2 py-6">
                <a
                  href="https://sso.teachable.com/secure/256201/identity/login/password"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-secondary"
                >
                  <span
                    className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-link-hover"}`}
                  >
                    Sign In
                  </span>
                </a>
                <a
                  href="/memberships"
                  className="-mx-3 block rounded-lg bg-cta px-3 py-2.5 text-center text-base font-semibold leading-7 text-ctatext hover:opacity-90"
                >
                  Join Rock the JVM
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
