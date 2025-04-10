import * as React from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
	title: string;
	description: string;
	technologies: string[];
	href: string;
	role: string;
};

export function ProjectCard({
	title,
	description,
	technologies,
	href,
	role,
}: ProjectCardProps) {
	return (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="block group p-5 border border-neutral-700 transition-colors hover:border-sky-500"
		>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-sky-500">
							{title}
						</h1>
						<ArrowUpRight className="size-5 shrink-0 transition-colors group-hover:text-sky-500" />
					</div>
					<p className="text-sm text-neutral-500">{role}</p>
				</div>
				<p className="text-neutral-300">{description.toLowerCase()}</p>
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold tracking-tight">technologies</h2>
					<div className="flex items-center flex-wrap gap-2">
						{technologies.map((tech, i) => (
							<div
								key={i}
								className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded bg-neutral-700"
							>
								{tech}
							</div>
						))}
					</div>
				</div>
			</div>
		</a>
	);
}
