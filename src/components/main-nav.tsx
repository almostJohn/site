"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/util/cn";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Portfolio",
		href: "/portfolio",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

export function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center justify-end gap-8 md:flex">
			{navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"relative text-base font-medium text-neutral-500 transition-colors hover:text-neutral-800 group",
						pathname === item.href ? "text-neutral-800" : "",
					)}
				>
					<>
						{item.title}
						{pathname === item.href ? (
							<>
								<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neutral-800" />
							</>
						) : (
							<>
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-800 transition-all duration-300 ease-out group-hover:w-full" />
							</>
						)}
					</>
				</Link>
			))}
		</nav>
	);
}
