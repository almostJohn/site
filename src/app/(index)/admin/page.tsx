import * as React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { checkAdminAuth } from "@/util/check-admin-auth";
import { getMessages } from "@/app/(index)/admin/actions";
import { DisplayMessages } from "@/components/display/display-messages";
import { LogoutButton } from "@/components/auth/logout-button";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";

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
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> dashboard
				</PageHeaderHeading>
				<PageHeaderDescription>
					my dashboard, messages and more...
				</PageHeaderDescription>
				<div className="py-6">
					<DisplayMessages messages={messages} />
				</div>
				<div className="py-8 border-t border-dashed border-neutral-200">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:w-full">
						<div className="flex items-center justify-center">
							<h2 className="font-medium">
								Do you want to logout your account?
							</h2>
						</div>
						<div className="flex items-center">
							<LogoutButton />
						</div>
					</div>
				</div>
			</PageHeaderBody>
		</PageHeader>
	);
}
