"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";

const projects = [
	{
		name: "scaffold.js",
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
		description:
			"My own portfolio website built with Next.js and Tailwind CSS.",
		job: "creator and maintainer",
		tech: ["next.js", "tailwind css", "react", "typescript"],
	},
];

function MainProjects({
	name,
	href,
	description,
	job,
	tech,
}: {
	name: string;
	href: string;
	description: string;
	job: string;
	tech: Array<string>;
}) {
	return (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="block p-5 group border border-neutral-700 transition-colors hover:border-sky-500"
		>
			<div className="flex flex-col space-y-5">
				<div className="flex justify-between w-full">
					<div className="flex flex-col space-y-1">
						<Heading.h4 className="transition-colors group-hover:text-sky-500">
							{name}
						</Heading.h4>
						<span className="text-neutral-500 text-sm">{job}</span>
					</div>
					<div className="flex justify-end">
						<ArrowUpRight className="size-5 shrink-0 transition-colors group-hover:text-sky-500" />
					</div>
				</div>
				<Paragraph>{description.toLowerCase()}</Paragraph>
				<div className="flex flex-col space-y-2">
					<Heading.h4>technologies</Heading.h4>
					<div className="flex items-center flex-wrap gap-2">
						{tech.map((item, i) => (
							<div
								key={i}
								className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-neutral-700 text-xs font-bold"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</a>
	);
}

function FeatureProjects({
	name,
	href,
	description,
	job,
}: {
	name: string;
	href: string;
	description: string;
	job: string;
}) {
	return (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="flex flex-col space-y-3 group"
		>
			<div className="flex flex-col space-y-1.5">
				<Heading.h4 className="transition-colors group-hover:text-sky-500">
					{name}
				</Heading.h4>
				<span className="text-neutral-500">{job}</span>
			</div>
			<Paragraph>{description.toLowerCase()}</Paragraph>
		</a>
	);
}

export function Projects({ path = "/projects" }: { path?: string }) {
	const pathname = usePathname();

	return (
		<>
			{pathname === path ? (
				<div className="flex flex-col gap-8">
					{projects.map((item) => (
						<MainProjects
							key={item.href}
							href={item.href}
							name={item.name}
							description={item.description}
							job={item.job}
							tech={item.tech}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col space-y-6">
					<Heading.h2 className="mb-2">
						<span className="text-sky-500">*</span> projects
					</Heading.h2>
					<div className="flex flex-col gap-8">
						{projects.slice(0, 2).map((item) => (
							<FeatureProjects
								key={item.href}
								name={item.name}
								href={item.href}
								description={item.description}
								job={item.job}
							/>
						))}
					</div>
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
