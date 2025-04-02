import * as React from "react";
import { cn } from "@/util/cn";

type TextareaBaseElement = HTMLElementTagNameMap["textarea"];

export const Textarea = React.forwardRef<
	TextareaBaseElement,
	React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"min-h-[60px] flex w-full rounded border border-neutral-200 bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-blue-600 hover:border-blue-600 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";
