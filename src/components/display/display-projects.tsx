import * as React from "react";

const projects = [
	{
		title: "next-djs-framework",
		href: "https://djs-fwk.vercel.app",
		description: "a framework for building discord bot the fastest way.",
	},
	{
		title: "next-tsconfig",
		href: "https://tscfg.vercel.app",
		description:
			"a typescript configuration that you can copy and paste into your projects.",
	},
	{
		title: "next-simplynote",
		href: "https://simplynote.vercel.app",
		description: "take notes with ease.",
	},
	{
		title: "pochita",
		href: "https://github.com/almostJohn/pochita",
		description: "pochita the discord bot.",
	},
];

export function DisplayProjects() {
	return (
		<div className="flex flex-col space-y-4">
			{projects.map((item, i) => (
				<a
					key={i}
					href={item.href}
					rel="noreferrer"
					target="_blank"
					className="flex flex-col space-y-1.5 group"
				>
					<h3 className="text-lg font-medium leading-snug transition-colors group-hover:text-blue-600">
						{item.title}
					</h3>
					<p className="text-balance text-neutral-500">{item.description}</p>
				</a>
			))}
		</div>
	);
}
