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
		title: "contact",
		href: "/contact",
	},
];

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="mt-12 w-full">
			<nav className="flex items-center gap-4 font-medium">
				{navLinks.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={`relative transition hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
							pathname === item.href
								? "text-blue-600 after:w-full"
								: "after:w-0 hover:after:w-full"
						}`}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</header>
	);
}
