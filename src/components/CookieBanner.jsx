"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Example() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (!Cookies.get("cookies-accepted")) {
      setHide(false);
    }
  }, []);

  const accept = () => {
    Cookies.set("cookies-accepted", "true", { expires: 365 });
    setHide(true);
  };

  const reject = () => {
    Cookies.set("cookies-accepted", "false", { expires: 365 });
    setHide(true);
  };

  return (
    <div
      className={`${hide ? "hidden" : ""} fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8`}
    >
      <p className="max-w-4xl text-sm/6 text-gray-900">
        Hey you👋 Rock the JVM uses cookies to help us compensate affiliates
        (=awesome people who help promote our courses). Nothing else. You aren't
        being tracked in any way. I don't know who you are, but if you click
        “accept”, you rock 🤘. For more information see our{" "}
        <a
          href="/legal/cookies"
          target="_blank"
          className="font-semibold text-indigo-600"
        >
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={reject}
          className="text-sm/6 font-semibold text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}
