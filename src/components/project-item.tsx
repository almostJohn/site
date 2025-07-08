import { ArrowUpRight } from "lucide-react";

type Project = {
	title: string;
	href: string;
};

type ProjectItemProps = {
	project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<a
			href={project.href}
			rel="noreferrer"
			target="_blank"
			className="flex items-center justify-between py-0.5 text-neutral-500 transition-all hover:bg-neutral-200 hover:text-neutral-800"
		>
			<div className="flex items-center">
				<h3 className="font-medium">{project.title}</h3>
			</div>
			<div className="flex items-center">
				<ArrowUpRight className="size-4 shrink-0" />
			</div>
		</a>
	);
}
