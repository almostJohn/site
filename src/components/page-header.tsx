import * as React from "react";

export function PageHeader({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<>
			<h1 className="text-4xl font-bold tracking-tight">
				<span className="text-sky-500">*</span> {title}
			</h1>
			<p className="leading-snug text-neutral-300">{description}</p>
		</>
	);
}
