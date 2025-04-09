import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-neutral-100 text-neutral-800 hover:bg-neutral-100/90",
				destructive: "bg-red-500 text-neutral-100 hover:bg-red-600",
				primary: "bg-[#5865f2] text-neutral-100 hover:bg-[#5865f2]/90",
				outline: "border border-neutral-700 hover:bg-neutral-700",
				ghost: "hover:bg-neutral-700",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				xs: "h-8 px-2 py-0.5",
				sm: "h-9 px-3 py-1",
				lg: "h-12 px-6 py-3",
				xl: "h-16 px-8 py-4",
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
