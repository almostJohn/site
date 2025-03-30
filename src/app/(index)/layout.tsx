import { SiteHeader } from "@/components/site-header";
import * as React from "react";

export default function IndexLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<div>
				<SiteHeader />
				{children}
			</div>
		</>
	);
}
