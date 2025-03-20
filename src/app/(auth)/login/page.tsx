import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Login } from "@/components/login";

export const metadata: Metadata = {
	title: "login",
};

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Header />
			<Login />
		</div>
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
