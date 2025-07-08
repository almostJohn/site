import { ProjectList } from "./project-list";

type Project = {
	title: string;
	href: string;
};

type ProjectsProps = {
	projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
	return <ProjectList projects={projects} />;
}
