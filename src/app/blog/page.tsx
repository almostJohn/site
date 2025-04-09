import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Page() {
	return (
		<div className="w-full pt-16 px-4 md:px-6">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col space-y-4">
					<h1 className="text-4xl font-bold">
						<span className="text-sky-500">*</span> blog
					</h1>
					<p className="text-neutral-400">{"read my blogs."}</p>
				</div>
			</div>
		</div>
	);
}
