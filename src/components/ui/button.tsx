import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90",
				destructive: "bg-red-600 text-white hover:bg-red-600/90",
				outline:
					"border border-neutral-800 bg-transparent hover:bg-neutral-800",
				ghost: "bg-transparent hover:bg-neutral-800",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonBaseComponent = HTMLElementTagNameMap["button"];

export type ButtonProps = React.ButtonHTMLAttributes<ButtonBaseComponent> &
	VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<ButtonBaseComponent, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";
