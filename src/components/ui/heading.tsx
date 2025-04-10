import * as React from "react";
import { cn } from "@/util/cn";

type HeadingBaseComponent = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = {
	h1: ({ className, ...props }: HeadingBaseComponent) => {
		return (
			<h1
				className={cn("text-4xl font-bold tracking-tight", className)}
				{...props}
			/>
		);
	},
	h2: ({ className, ...props }: HeadingBaseComponent) => {
		return (
			<h2
				className={cn("text-3xl font-semibold tracking-tight", className)}
				{...props}
			/>
		);
	},
	h3: ({ className, ...props }: HeadingBaseComponent) => {
		return (
			<h3
				className={cn("text-2xl font-semibold tracking-tight", className)}
				{...props}
			/>
		);
	},
	h4: ({ className, ...props }: HeadingBaseComponent) => {
		return (
			<h4
				className={cn("text-xl font-semibold tracking-tight", className)}
				{...props}
			/>
		);
	},
};
