import * as React from "react";
import { cn } from "@/util/cn";
import { domine } from "@/util/fonts";

type SectionListProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export function SectionList({
	title,
	className,
	children,
	...props
}: SectionListProps) {
	return (
		<section className={cn("flex flex-col gap-3 mt-6", className)} {...props}>
			<h2
				className={cn(
					"text-xl font-semibold tracking-tight sm:text-2xl/8",
					domine.className,
				)}
			>
				{title}
			</h2>
			<div className="ml-2">{children}</div>
		</section>
	);
}
