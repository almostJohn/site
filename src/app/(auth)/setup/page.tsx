import * as React from "react";
import type { Metadata } from "next";
import { Setup } from "@/components/setup";

export const metadata: Metadata = {
	title: "Admin setup",
};

export default function SetupPage() {
	return (
		<>
			<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
				<Setup />
			</div>
		</>
	);
}
