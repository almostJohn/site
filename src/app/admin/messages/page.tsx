import * as React from "react";
import { redirect } from "next/navigation";
import { checkAdminAuth } from "@/util/check-admin-auth";
import { getMessages } from "@/app/actions";
import { Messages } from "@/components/messages";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Messages",
};

export default async function MessagesPage() {
	const isAuthenticated = await checkAdminAuth();

	if (!isAuthenticated) {
		redirect("/login");
	}

	const messages = await getMessages();

	return (
		<>
			<div className="pt-8 px-4 pb-12 md:px-8 md:pb-24 lg:pb-32">
				<div className="flex flex-col gap-8 w-[24rem] text-center">
					<div className="flex items-center justify-center space-x-2">
						<p className="font-medium">
							You have{" "}
							<span className="underline underline-offset-4 text-blue-600">
								{messages.length}
							</span>{" "}
							message{messages.length !== 1 ? "s" : ""}.
						</p>
						<p className="font-medium">
							<span className="underline underline-offset-4 text-blue-600">
								{messages.filter((m) => !m.read).length}
							</span>{" "}
							unread message
							{messages.filter((m) => !m.read).length !== 1 ? "s" : ""}.
						</p>
					</div>
					<Messages messages={messages} />
				</div>
			</div>
		</>
	);
}
