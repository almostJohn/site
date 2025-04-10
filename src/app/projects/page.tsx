import * as React from "react";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
	title: "projects",
};

const projects = [
	{
		title: "scaffold.js",
		description:
			"scaffold.js is a lightweight layer over discord.js that streamlines bot development with structure, utilities, and smart defaults—letting you focus on features, not boilerplate.",
		href: "https://github.com/almostJohn/scaffold.js",
		role: "creator and maintainer",
		technologies: ["node.js", "typescript", "discord.js", "restful api"],
	},
	{
		title: "tsconfig-site",
		description:
			"tsconfig is a simple site for easily copying and pasting TypeScript configuration file. No setup, no fuss—just grab the tsconfig.json you need and get coding.",
		href: "https://tsconfig-site",
		role: "creator and maintainer",
		technologies: ["next.js", "typescript", "tailwind css"],
	},
	{
		title: "simplynote-site",
		description:
			"SimplyNote is a minimalist online notepad that lets you write, style, and organize your notes using Markdown. From bold text to checklists and code blocks, it’s perfect for jotting down ideas or creating clean, structured content—quickly and distraction-free.",
		href: "https://simplynote-site.vercel.app",
		role: "creator and maintainer",
		technologies: ["next.js", "typescript", "tailwind css"],
	},
	{
		title: "pochita",
		description: "pochita a private discord bot application.",
		href: "https://github.com/almostJohn/pochita",
		role: "creator and maintainer",
		technologies: ["node.js", "javascript", "discord.js"],
	},
];

export default function ProjectsPage() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2 pb-6">
				<h1 className="text-4xl font-bold tracking-tight">
					<span className="text-sky-500">*</span> projects
				</h1>
				<p className="text-neutral-300">
					here are some of the projects, i&apos;ve worked on.
				</p>
			</div>
			<div className="flex flex-col gap-8">
				{projects.map((item) => (
					<ProjectCard
						key={item.href}
						title={item.title}
						description={item.description}
						href={item.href}
						role={item.role}
						technologies={item.technologies}
					/>
				))}
			</div>
		</div>
	);
}
