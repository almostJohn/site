import * as React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";

export const linkButtonVariants = cva("font-medium transition-colors", {
	variants: {
		variant: {
			default: "underline underline-offset-4 text-blue-600",
			primary:
				"inline-flex items-center justify-center px-4 py-2 gap-2 h-10 rounded border border-neutral-200 bg-transparent font-medium underline-offset-4 hover:underline hover:bg-blue-600 hover:text-white",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type LinkButtonBaseComponent = HTMLElementTagNameMap["a"];

type LinkButtonProps = Omit<
	React.AnchorHTMLAttributes<LinkButtonBaseComponent>,
	keyof LinkProps
> &
	LinkProps &
	VariantProps<typeof linkButtonVariants>;

export const LinkButton = React.forwardRef<
	LinkButtonBaseComponent,
	LinkButtonProps
>(({ className, variant, href, ...props }, ref) => {
	return (
		<Link
			href={href}
			className={cn(linkButtonVariants({ variant, className }))}
			ref={ref}
			{...props}
		/>
	);
});
LinkButton.displayName = "LinkButton";
