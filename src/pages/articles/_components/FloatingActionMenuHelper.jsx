"use client";

import { useState } from "react";

export default function Example(props) {
  const [shareVisible, setShareVisible] = useState(false);
  const [tocVisible, setTocVisible] = useState(false);

  const handleTocToggle = (e) => {
    setShareVisible(false);
    if (tocVisible) {
      setTocVisible(false);
    } else {
      setTocVisible(true);
    }
  };

  const handleShareToggle = (e) => {
    setTocVisible(false);
    if (shareVisible) {
      setShareVisible(false);
    } else {
      setShareVisible(true);
    }
  };

  return (
    <div
      className={`fixed bottom-0 w-full bg-secondary text-content md:hidden ${shareVisible ? "h-36" : tocVisible ? "h-96" : "h-20"} z-20 rounded-t-3xl`}
    >
      {tocVisible && (
        <div className="no-scrollbar mx-4 mt-2 h-72 overflow-scroll">
          {props.toc}
        </div>
      )}
      {shareVisible && (
        <div className="mb-8 flex justify-center text-center">
          {props.share}
        </div>
      )}
      <div className="absolute bottom-5 mt-2 grid w-full grid-cols-2 gap-x-4">
        <button
          onClick={handleTocToggle}
          className="col-span-1 ml-4 h-10 rounded-md border border-content px-3.5 py-2.5 text-center text-sm font-semibold text-content shadow-sm hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Table of Contents
        </button>
        <button
          onClick={handleShareToggle}
          className="col-span-1 mr-4 h-10 rounded-md border border-content px-3.5 py-2.5 text-center text-sm font-semibold text-content shadow-sm hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Share
        </button>
      </div>
    </div>
  );
}
