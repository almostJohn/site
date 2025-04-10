import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "blog",
};

export default async function BlogPage() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl font-bold tracking-tight">
					<span className="text-sky-500">*</span> blog
				</h1>
			</div>
			<p className="text-neutral-300">read my blogs.</p>
		</div>
	);
}
