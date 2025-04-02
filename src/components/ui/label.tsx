import * as React from "react";
import { cn } from "@/util/cn";

type LabelBaseElement = HTMLElementTagNameMap["label"];

export const Label = React.forwardRef<
	LabelBaseElement,
	React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => {
	return (
		<label
			className={cn(
				"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Label.displayName = "Label";
