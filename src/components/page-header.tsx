import * as React from "react";
import { cn } from "@/util/cn";
import { notoSerif } from "@/util/fonts";

export function PageHeader({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col gap-4", className)} {...props}>
			{children}
		</section>
	);
}

export function PageHeaderHeading({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"font-semibold tracking-tight text-3xl md:text-4xl",
				notoSerif.className,
			)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn(
				"text-sm/relaxed text-pretty w-full sm:max-w-xl mt-4",
				className,
			)}
			{...props}
		/>
	);
}
