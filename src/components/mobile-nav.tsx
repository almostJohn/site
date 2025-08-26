"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/util/cn";
import { ArrowUpRight } from "lucide-react";

export function MobileNav() {
	const pathname = usePathname();

	return (
		<div className="flex flex-col mt-8 gap-3 items-start md:hidden">
			<Link
				href="/"
				className={cn(
					"text-sm font-medium transition-colors duration-200",
					pathname === "/"
						? "text-neutral-100"
						: "text-neutral-400 hover:text-neutral-100",
				)}
			>
				about
			</Link>
			<a
				href="mailto:garcia.johngale@gmail.com"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				email <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://ko-fi.com/almostjohn"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				kofi <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://github.com/almostJohn"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				github <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://discord.com/users/996354867708841984"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				discord <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://x.com/almostJohn1"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				twitter <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://instagram.com/almostjohn1"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				instagram <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://facebook.com/alsojohn01"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
			>
				facebook <ArrowUpRight className="size-4 shrink-0" />
			</a>
		</div>
	);
}
