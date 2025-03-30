import * as React from "react";
import type { Metadata } from "next";
import { Setup } from "@/components/setup";

export const metadata: Metadata = {
	title: "setup",
};

export default function SetupPage() {
	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				<Setup />
			</div>
		</>
	);
}
