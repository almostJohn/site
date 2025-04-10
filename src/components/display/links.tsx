import * as React from "react";
import { Heading } from "../ui/heading";

const links = [
	{
		name: "email",
		href: "mailto:garcia.johngale@gmail.com",
	},
	{
		name: "github",
		href: "https://github.com/almostJohn",
	},
	{
		name: "x.com",
		href: "https://x.com/almostJohn1",
	},
	{
		name: "fb.com",
		href: "https://facebook.com/alsojohn01",
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/almostjohn/",
	},
];

export function Links() {
	return (
		<div className="flex flex-col space-y-6">
			<Heading.h2 className="mb-2">
				<span className="text-sky-600">*</span> links
			</Heading.h2>
			<div className="flex items-center flex-wrap space-x-4">
				{links.map((item) => (
					<a
						key={item.href}
						href={item.href}
						rel="noreferrer"
						target="_blank"
						className="text-neutral-400 transition-colors text-sm font-medium hover:text-sky-500"
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	);
}
