import * as React from "react";
import { cn } from "@/util/cn";

type ParagraphBaseComponent = React.HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ className, ...props }: ParagraphBaseComponent) {
	return <p className={cn("pt-4", className)} {...props} />;
}
