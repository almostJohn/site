type Link = {
	title: string;
	href: string;
};

type LinksProps = {
	items: Link[];
};

export function Links({ items }: LinksProps) {
	return (
		<div className="flex flex-wrap gap-4">
			{items.map((item, index) => (
				<a
					key={index}
					href={item.href}
					rel="noreferrer"
					target="_blank"
					className="font-bold underline-offset-4 underline text-blue-700"
				>
					{item.title}
				</a>
			))}
		</div>
	);
}
