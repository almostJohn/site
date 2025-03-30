import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/util/site";

export default function IndexPage() {
	return (
		<div className="flex flex-col mt-8 gap-8 pb-10">
			<p>
				{
					"I'm a 24 y/o software developer. I love building things, shuffling cards and solving problems. I enjoy language design and web development."
				}{" "}
				I mostly use{" "}
				<Link
					href="https://nextjs.org"
					className="font-medium text-blue-600 underline underline-offset-4"
				>
					next.js
				</Link>
				, a framework built on top{" "}
				<Link
					href="https://react.dev"
					className="font-medium text-blue-600 underline underline-offset-4"
				>
					react
				</Link>
				.{" "}
				{
					"If I'm not coding I'm probably watching anime, working out or playing my guitar."
				}
			</p>
			<div className="flex flex-col space-y-4">
				<h3 className="text-2xl font-semibold">
					<span className="text-blue-600">*</span> projects
				</h3>
				{siteConfig.projects.map((project, i) => (
					<a key={i} href={project.href} className="flex flex-col space-y-2">
						<h1 className="font-medium underline underline-offset-4 text-blue-600">
							{project.title}
						</h1>
						<p>{project.description}</p>
					</a>
				))}
				<a
					href={siteConfig.social.projects}
					rel="noreferrer"
					target="_blank"
					className="inline-flex group items-center gap-2 underline underline-offset-4 font-medium text-blue-600"
				>
					all projects
					<ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</a>
			</div>
		</div>
	);
}
