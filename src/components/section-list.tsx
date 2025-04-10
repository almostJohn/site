import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Item = {
	title: string;
	description: string;
	href: string;
	role: string;
	period?: string;
};

type SectionListProps = {
	title: string;
	items: Item[];
	viewAllHref?: string;
	viewAllText?: string;
};

export function SectionList({
	title,
	items,
	viewAllHref,
	viewAllText,
}: SectionListProps) {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl font-bold tracking-tight">
				<span className="text-sky-500">*</span> {title}
			</h2>
			<div className="flex flex-col gap-8">
				{items.map((item) => (
					<a
						key={item.title}
						href={item.href}
						rel="noreferrer"
						target="_blank"
						className="block group"
					>
						<div className="flex flex-col space-y-3">
							<h1 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-sky-500">
								{item.title}
							</h1>
							<p className="text-sm text-neutral-500">
								{item.role} {item.period && `(${item.period})`}
							</p>
							<p className="text-neutral-300">
								{item.description.toLowerCase()}
							</p>
						</div>
					</a>
				))}
			</div>
			{viewAllHref && (
				<Link
					href={viewAllHref}
					className="inline-flex items-center gap-1 text-sky-500 hover:underline group"
				>
					{viewAllText}
					<ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</Link>
			)}
		</div>
	);
}
