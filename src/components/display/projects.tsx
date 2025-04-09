"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		name: "@almostjohn/scaffold.js",
		href: "https://github.com/almostJohn/scaffold.js",
		description:
			"scaffold.js is a lightweight framework built on top of discord.js, designed to simplify and speed up Discord bot development. It provides structure, utilities, and sensible defaults—so you can focus on building features, not boilerplate.",
		job: "creator and maintainer",
		tech: ["node.js", "typescript", "discord.js", "restful api"],
	},
	{
		name: "tsconfig-site",
		href: "https://github.com/almostJohn/tsconfig-site",
		description:
			"tsconfig is a simple site for easily copying and pasting TypeScript configuration file. No setup, no fuss—just grab the tsconfig.json you need and get coding.",
		job: "creator and maintainer",
		tech: ["next.js", "tailwind css", "react", "typescript"],
	},
	{
		name: "simplynote-site",
		href: "https://github.com/almostJohn/simplynote-site",
		description:
			"SimplyNote is a minimalist online notepad that lets you write, style, and organize your notes using Markdown. From bold text to checklists and code blocks, it’s perfect for jotting down ideas or creating clean, structured content—quickly and distraction-free.",
		job: "creator and maintainer",
		tech: ["next.js", "tailwind css", "react", "typescript"],
	},
	{
		name: "pochita",
		href: "https://github.com/almostJohn/pochita",
		description: "Pochita a private discord bot application.",
		job: "creator and maintainer",
		tech: ["next.js", "tailwind css", "react", "typescript"],
	},
	{
		name: "site",
		href: "https://github.com/almostJohn/site",
		description: "My own portfolio website built with Next.js and Tailwind CSS",
		job: "creator and maintainer",
		tech: ["next.js", "tailwind css", "react", "typescript"],
	},
];

export function Projects({ path = "/projects" }: { path?: string }) {
	const pathname = usePathname();

	return (
		<>
			{pathname === path ? (
				<div className="flex flex-col space-y-6">
					{projects.map((item) => (
						<a
							key={item.href}
							href={item.href}
							rel="noreferrer"
							target="_blank"
							className="block relative p-4 group border border-neutral-700 transition-colors hover:border-sky-500"
						>
							<div className="flex flex-col gap-6">
								<ArrowUpRight className="size-5 group-hover:text-sky-500 absolute top-4 right-4" />
								<div className="flex flex-col space-y-3">
									<h1 className="text-xl font-bold transition-colors group-hover:text-sky-500">
										{item.name}
									</h1>
									<span className="text-neutral-400 text-sm">{item.job}</span>
									<p>{item.description.toLowerCase()}</p>
								</div>
								<div className="flex flex-col space-y-3">
									<h1 className="font-bold">technologies</h1>
									<div className="flex items-center flex-wrap gap-4">
										{item.tech.map((name, i) => (
											<div
												key={i}
												className="inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-semibold bg-neutral-700"
											>
												{name}
											</div>
										))}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			) : (
				<div className="flex flex-col space-y-6">
					<h1 className="text-2xl font-bold leading-snug">
						<span className="text-sky-500">*</span> projects
					</h1>
					{projects.slice(0, 2).map((item) => (
						<a
							key={item.href}
							href={item.href}
							rel="noreferrer"
							target="_blank"
							className="block group"
						>
							<div className="flex flex-col space-y-2">
								<h1 className="text-lg font-bold transition-colors group-hover:text-sky-500">
									{item.name}
								</h1>
								<span className="text-sm text-neutral-400">{item.job}</span>
								<p className="pt-1">{item.description.toLowerCase()}</p>
							</div>
						</a>
					))}
					<Link
						href={path}
						className="inline-flex gap-1 items-center text-sky-500 hover:underline group"
					>
						all projects
						<ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
					</Link>
				</div>
			)}
		</>
	);
}
