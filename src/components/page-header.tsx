import * as React from "react";
import { cn } from "@/util/cn";

export function PageHeader({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("flex flex-col gap-8 mt-8 pb-10", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderBody({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("flex flex-col space-y-4", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderHeading({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn("text-2xl font-bold tracking-tighter", className)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={cn("max-w-5xl", className)} {...props} />;
}
