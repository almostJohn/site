import * as React from "react";
import { cn } from "@/util/cn";
import { cva, type VariantProps } from "class-variance-authority";

type BadgeBaseElement = HTMLElementTagNameMap["div"];

export const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors cursor-pointer",
	{
		variants: {
			variant: {
				default: "bg-blue-600 text-white hover:bg-blue-600/90",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type BadgeProps = React.HTMLAttributes<BadgeBaseElement> &
	VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant, className }))} {...props} />
	);
}
