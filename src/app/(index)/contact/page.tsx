import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/util/site";
import { MessageForm } from "@/components/message-form";

export const metadata: Metadata = {
	title: "contact",
};

export default function Page() {
	return (
		<div className="flex flex-col gap-8 mt-8 pb-10">
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-semibold">
					<span className="text-blue-600">*</span> contact
				</h1>
				<p className="text-neutral-500">
					want to discuss a project, an idea, or an opportunity? Send me a
					message by filling up the form below or write me an{" "}
					<Link
						href={siteConfig.social.email}
						rel="noreferrer"
						target="_blank"
						className="font-medium text-blue-600 underline underline-offset-4"
					>
						email
					</Link>{" "}
					instead.
				</p>
			</div>
			<MessageForm />
		</div>
	);
}
