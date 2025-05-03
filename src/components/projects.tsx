type Project = {
	title: string;
	href: string;
};

type ProjectsProps = {
	items: Project[];
};

export function Projects({ items }: ProjectsProps) {
	return (
		<ul className="space-y-1.5">
			{items.map((item, index) => (
				<li key={index} className="list-inside list-item list-disc">
					<a
						href={item.href}
						rel="noreferrer"
						target="_blank"
						className="font-bold underline-offset-4 underline text-blue-700"
					>
						{item.title}
					</a>
				</li>
			))}
		</ul>
	);
}
