import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "dashboard",
};

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Header />
			<p className="font-medium text-center">
				Nothing much here to see, this is just an admin dashboard.
			</p>
			<p className="font-medium text-center">
				I want to see my{" "}
				<Link
					href="/admin/messages"
					className="underline-offset-4 underline text-blue-600"
				>
					messages
				</Link>
				.{" "}
				<Link
					href="/admin/settings"
					className="underline-offset-4 underline text-blue-600"
				>
					Log out my account
				</Link>{" "}
				instead.
			</p>
		</div>
	);
}

function Header() {
	return (
		<div className="flex items-center justify-center gap-2 font-medium mb-4">
			<Link href="/" className="underline-offset-4 underline text-blue-600">
				back to homepage
			</Link>
			/
			<Link
				href="/admin/messages"
				className="underline-offset-4 underline text-blue-600"
			>
				messages
			</Link>
			/
			<Link
				href="/admin/settings"
				className="underline-offset-4 underline text-blue-600"
			>
				settings
			</Link>
		</div>
	);
}
