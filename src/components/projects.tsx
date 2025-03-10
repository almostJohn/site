import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";
import { ArrowUpRight } from "lucide-react";

export function Projects({ limit }: { limit?: number }) {
	const limitedProjects = siteConfig.projects.slice(0, limit);

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold mb-6">
				<span className="text-teal-500">*</span> projects
			</h1>
			<div className="flex flex-col space-y-6">
				{limitedProjects.map((item) => (
					<a key={item.href} href={item.href} className="group block">
						<div className="flex flex-col space-y-1">
							<div className="flex flex-col 0.5">
								<h3 className="text-xl font-semibold transition duration-300 group-hover:text-teal-500">
									{item.title}
								</h3>
								<span className="text-sm text-neutral-500">
									creator and maintainer
								</span>
							</div>
							<p className="text-sm text-neutral-300">{item.description}</p>
						</div>
					</a>
				))}
				<Link
					href="/projects"
					className="group flex items-center gap-2 text-teal-500 transition duration-300 hover:underline"
				>
					<span>all projects</span>
					<ArrowUpRight className="size-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</Link>
			</div>
		</div>
	);
}
