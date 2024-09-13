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
			className={`fixed bottom-0 bg-secondary text-content md:hidden w-full ${shareVisible ? "h-28" : tocVisible ? "h-96" : "h-20"} z-20 rounded-t-3xl`}
		>
			{tocVisible && (
				<div className="mx-4 mt-2 overflow-scroll no-scrollbar h-72">
					{props.toc}
				</div>
			)}
			{shareVisible && (
				<div className="text-center flex justify-center">{props.share}</div>
			)}
			<div className="mt-2 w-full absolute bottom-5 grid grid-cols-2 gap-x-4">
				<button
					onClick={handleTocToggle}
					className="rounded-md border-content border h-10 ml-4 text-center col-span-1 px-3.5 py-2.5 text-sm font-semibold text-content shadow-sm hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Table of Contents
				</button>
				<button
					onClick={handleShareToggle}
					className="rounded-md border-content border h-10 mr-4 text-center col-span-1 px-3.5 py-2.5 text-sm font-semibold text-content shadow-sm hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Share
				</button>
			</div>
		</div>
	);
}
