import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageForm } from "@/components/message-form";

export const metadata: Metadata = {
	title: "Send me a message",
};

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Header />
			<MessageForm />
		</div>
	);
}

function Header() {
	return (
		<div className="flex items-center justify-center font-medium mb-4">
			<Link
				href="/"
				className="underline-offset-4 underline text-blue-600 text-left"
			>
				back to homepage
			</Link>
		</div>
	);
}
