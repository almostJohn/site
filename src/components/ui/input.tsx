import * as React from "react";
import { cn } from "@/util/cn";

type InputBaseElement = HTMLElementTagNameMap["input"];

export const Input = React.forwardRef<
	InputBaseElement,
	React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-10 w-full rounded px-3 py-1 border border-neutral-200 bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-500 placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-blue-600 hover:border-blue-600 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";
