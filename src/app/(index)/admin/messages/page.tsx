import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { checkAdminAuth } from "@/util/check-admin-auth";
import { getMessages } from "@/app/(index)/send-message/actions";
import { Messages } from "@/components/messages";

export const metadata: Metadata = {
	title: "messages",
};

export default async function Page() {
	const isAuthenticated = await checkAdminAuth();

	if (!isAuthenticated) {
		redirect("/login");
	}

	const messages = await getMessages();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Header />
			<div className="flex flex-col gap-2 text-center">
				<p className="font-medium">
					You have{" "}
					<span className="underline underline-offset-4 text-blue-600">
						{messages.length}
					</span>{" "}
					message{messages.length !== 1 ? "s" : ""}.
				</p>
				<p className="font-medium">
					You have{" "}
					<span className="underline underline-offset-4 text-blue-600">
						{messages.filter((m) => !m.read).length}
					</span>{" "}
					unread message
					{messages.filter((m) => !m.read).length !== 1 ? "s" : ""}.
				</p>
			</div>
			<Messages messages={messages} />
		</div>
	);
}

function Header() {
	return (
		<div className="flex items-center justify-center font-medium mb-4">
			<Link
				href="/admin"
				className="underline-offset-4 underline text-blue-600"
			>
				back to admin dashboard
			</Link>
		</div>
	);
}
