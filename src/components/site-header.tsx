"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "blog",
		href: "/blog",
	},
	{
		title: "projects",
		href: "/projects",
	},
];

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="mt-12 w-full px-4 md:px-6">
			<nav className="flex items-center gap-4 font-medium">
				{navLinks.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={`font-medium text-sm transition duration-300 ${
							pathname === item.href ? "text-sky-500" : "hover:text-sky-500"
						}`}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</header>
	);
}
