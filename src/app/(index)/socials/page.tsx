import * as React from "react";
import type { Metadata } from "next";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { DisplaySocials } from "@/components/display/display-socials";

export const metadata: Metadata = {
	title: "socials",
};

export default function Page() {
	return (
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> socials
				</PageHeaderHeading>
				<PageHeaderDescription>
					follow me on my social media.
				</PageHeaderDescription>
				<DisplaySocials />
			</PageHeaderBody>
		</PageHeader>
	);
}
