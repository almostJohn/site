import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";

export function SiteHeader() {
	return (
		<header className="top-0 w-full mt-12">
			<div className="flex items-center gap-4">
				{siteConfig.navLinks.map((item, i) => (
					<Link
						key={i}
						href={item.href}
						className="text-sm transition-colors hover:text-teal-500"
					>
						{item.title}
					</Link>
				))}
			</div>
		</header>
	);
}
