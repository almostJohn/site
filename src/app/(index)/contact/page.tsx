import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/util/site";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { MessageForm } from "@/components/forms/message-form";

export const metadata: Metadata = {
	title: "contact",
};

export default function Page() {
	return (
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> contact
				</PageHeaderHeading>
				<PageHeaderDescription>
					want to discuss a project, an idea, or an opportunity? Send me a
					message by filling up the form below or write me an{" "}
					<a
						href={siteConfig.email}
						rel="noreferrer"
						target="_blank"
						className="font-medium text-blue-600 underline underline-offset-4"
					>
						email
					</a>{" "}
					instead.
				</PageHeaderDescription>
				<MessageForm />
			</PageHeaderBody>
		</PageHeader>
	);
}
