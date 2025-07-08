import { ProjectItem } from "./project-item";

type Project = {
	title: string;
	href: string;
};

type ProjectListProps = {
	projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
	return (
		<div className="flex flex-col gap-2">
			{projects.map((project) => (
				<ProjectItem key={project.title} project={project} />
			))}
		</div>
	);
}
