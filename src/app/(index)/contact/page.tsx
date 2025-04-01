import * as React from "react";
import type { Metadata } from "next";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { MessageForm } from "@/components/forms/message-form";
import { DisplaySocials } from "@/components/display/display-socials";

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
					want to discuss a project, an idea, or an opportunity? send me a
					message by filling up the form below or follow me on any of my social
					media.
				</PageHeaderDescription>
				<MessageForm />
				<p className="py-3 flex items-center gap-x-3 text-sm text-neutral-500 before:h-px before:flex-1 before:border before:border-dashed before:border-neutral-300 after:h-px after:flex-1 after:border after:border-dashed after:border-neutral-300">
					or
				</p>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> socials
				</PageHeaderHeading>
				<DisplaySocials />
			</PageHeaderBody>
		</PageHeader>
	);
}
