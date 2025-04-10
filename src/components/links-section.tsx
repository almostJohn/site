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
		name: "fb.com",
		href: "https://facebook.com/alsojohn01",
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/almostjohn/",
	},
];

export function LinksSection() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl font-bold tracking-tight mb-2">
				<span className="text-sky-500">*</span> links
			</h2>
			<nav className="flex items-center gap-4 text-sm">
				{links.map((item) => (
					<a
						key={item.href}
						href={item.href}
						rel="noreferrer"
						target="_blank"
						className="text-neutral-400 transition-colors hover:text-sky-500"
					>
						{item.name}
					</a>
				))}
			</nav>
		</div>
	);
}
