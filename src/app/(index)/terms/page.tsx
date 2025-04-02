import * as React from "react";
import type { Metadata } from "next";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { terms } from "@/util/data";

export const metadata: Metadata = {
	title: "terms",
};

export default function Page() {
	return (
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> terms
				</PageHeaderHeading>
				<PageHeaderDescription>
					by using the private messaging feature on this website, you agree to
					the following.
				</PageHeaderDescription>
				<ul className="space-y-4">
					{terms.map((item, i) => (
						<li key={i} className="flex space-x-2">
							<strong>{i + 1}.</strong>
							<div className="flex flex-col space-y-1">
								<h2 className="font-medium leading-snug">{item.title}</h2>
								<p className="text-sm">{item.content}</p>
							</div>
						</li>
					))}
				</ul>
				<PageHeaderDescription>
					by proceeding to send a message, you acknowledge that you have read
					and agree to these terms of service.
				</PageHeaderDescription>
			</PageHeaderBody>
		</PageHeader>
	);
}
