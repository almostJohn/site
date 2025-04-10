import * as React from "react";
import { cn } from "@/util/cn";

export function Container({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("w-full py-14 px-4 md:px-6", className)} {...props}>
			{children}
		</div>
	);
}
