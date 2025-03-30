import * as React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { checkAdminAuth } from "@/util/check-admin-auth";
import { getMessages } from "@/app/(index)/admin/actions";
import { Messages } from "@/components/messages";
import { LogoutButton } from "@/components/logout-button";

export const metadata: Metadata = {
	title: "dashboard",
};

export default async function Page() {
	const isAuthenticated = await checkAdminAuth();

	if (!isAuthenticated) {
		redirect("/login");
	}

	const messages = await getMessages();

	return (
		<div className="flex flex-col gap-8 mt-8 pb-10">
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-semibold">
					<span className="text-blue-600">*</span> my dashboard
				</h1>
				<p className="text-neutral-500">
					this is where your private messages belong, only you can access this.
				</p>
			</div>
			<div className="flex flex-col space-y-4">
				<div className="flex flex-col gap-2 pb-4">
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
				<div className="py-8 border-t border-neutral-300 border-dashed">
					<div className="flex flex-col gap-4 md:flex-row md:w-full md:items-center md:justify-between">
						<div className="flex items-center justify-center md:justify-start">
							<p className="font-medium text-center">
								Do you want to logout your account?
							</p>
						</div>
						<div className="flex items-center">
							<LogoutButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
