import * as React from "react";
import type { Metadata } from "next";
import { Setup } from "@/components/setup";

export const metadata: Metadata = {
	title: "Admin setup",
};

export default function SetupPage() {
	return (
		<>
			<div className="pt-8 px-4 pb-12 md:px-8 md:pb-24 lg:pb-32">
				<Setup />
			</div>
		</>
	);
}
