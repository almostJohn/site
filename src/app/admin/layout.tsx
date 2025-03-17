import * as React from "react";
import { AdminNav } from "@/components/admin-nav";

export default async function AdminLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="container max-w-2xl flex flex-col items-center justify-center">
			<AdminNav />
			{children}
		</div>
	);
}
