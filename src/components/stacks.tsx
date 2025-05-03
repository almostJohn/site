export function Stacks({ items }: { items: string[] }) {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{items.map((item, index) => (
				<span
					key={index}
					className="inline-flex items-center justify-center px-2 py-1 rounded bg-neutral-200 text-xs font-medium"
				>
					{item}
				</span>
			))}
		</div>
	);
}
