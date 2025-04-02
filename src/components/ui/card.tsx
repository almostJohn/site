import * as React from "react";
import { cn } from "@/util/cn";

type CardBaseElement = HTMLElementTagNameMap["div"];

export const Card = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn("rounded-md border bg-neutral-200/20 shadow-md", className)}
			{...props}
		/>
	);
});
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			{...props}
		/>
	);
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn("font-semibold leading-none tracking-tight", className)}
			{...props}
		/>
	);
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn("text-sm text-neutral-500", className)}
			{...props}
		/>
	);
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
	CardBaseElement,
	React.HTMLAttributes<CardBaseElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn("flex items-center p-6 pt-0", className)}
			{...props}
		/>
	);
});
CardFooter.displayName = "CardFooter";
