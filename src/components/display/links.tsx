import * as React from "react";

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
		name: "linkedin",
		href: "https://www.linkedin.com/in/almostjohn/",
	},
];

export function Links() {
	return (
		<div className="flex flex-col space-y-6">
			<h1 className="text-2xl font-bold leading-snug">
				<span className="text-sky-600">*</span> links
			</h1>
			<div className="flex items-center space-x-4">
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
