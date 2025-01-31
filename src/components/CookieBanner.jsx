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

    const affCode = getURLParameter("affcode");

    if (affCode) {
      Cookies.set("teachable-affiliate", affCode, { expires: 30 });
    }
  };

  const reject = () => {
    Cookies.set("cookies-accepted", "false", { expires: 365 });
    setHide(true);
  };

  function getURLParameter(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
  }

  return (
    <div
      className={`${hide ? "hidden" : ""} fixed inset-x-0 bottom-0 z-50 flex flex-col justify-between gap-x-8 gap-y-4 bg-secondary p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8`}
    >
      <p className="max-w-4xl text-sm/6 text-content-1">
        This site uses cookies. Check our cookie policy (TLDR: no personal
        information is stored). For more information see our{" "}
        <a
          href="/legal/cookies"
          target="_blank"
          className="font-semibold text-accent-1"
          rel="noreferrer"
        >
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-cta px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={reject}
          className="text-sm/6 font-semibold text-content-1"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}
