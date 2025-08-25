"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/util/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden flex-col gap-3 items-end md:flex">
			<Link
				href="/"
				className={cn(
					"text-sm font-medium transition-colors duration-200",
					pathname === "/"
						? "text-neutral-50"
						: "text-neutral-400 hover:text-neutral-50",
				)}
			>
				about
			</Link>
			<a
				href="mailto:garcia.johngale@gmail.com"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				email <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://ko-fi.com/almostjohn"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				kofi <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://github.com/almostJohn"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				github <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://discord.com/users/996354867708841984"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				discord <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://x.com/almostJohn1"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				twitter <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://instagram.com/almostjohn1"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				instagram <ArrowUpRight className="size-4 shrink-0" />
			</a>
			<a
				href="https://facebook.com/alsojohn01"
				rel="noreferrer"
				target="_blank"
				className="inline-flex gap-1 items-center text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
			>
				facebook <ArrowUpRight className="size-4 shrink-0" />
			</a>
		</div>
	);
}
