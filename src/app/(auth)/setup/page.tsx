import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Setup } from "@/components/setup";

export const metadata: Metadata = {
	title: "setup",
};

export default function SetupPage() {
	return (
		<>
			<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
				<Header />
				<Setup />
			</div>
		</>
	);
}

function Header() {
	return (
		<div className="flex items-center justify-center font-medium mb-4">
			<Link href="/" className="underline-offset-4 underline text-blue-600">
				back to homepage
			</Link>
		</div>
	);
}
