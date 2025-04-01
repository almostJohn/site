import * as React from "react";
import type { Metadata } from "next";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";

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
					<li className="flex space-x-2">
						<strong>1.</strong>
						<div className="flex flex-col space-y-1">
							<h2 className="font-medium leading-snug">
								respectful communication
							</h2>
							<p className="text-sm">
								{
									"you agree to communicate respectfully and refrain from sending any harmful, harassing, offensive, or illegal content."
								}
							</p>
						</div>
					</li>
					<li className="flex space-x-2">
						<strong>2.</strong>
						<div className="flex flex-col space-y-1">
							<h2 className="font-medium leading-snug">
								no spam or unsolicited promotions
							</h2>
							<p className="text-sm">
								{
									"you may not use the messaging feature to send spam, advertisements, or any unsolicited promotional content."
								}
							</p>
						</div>
					</li>
					<li className="flex space-x-2">
						<strong>3.</strong>
						<div className="flex flex-col space-y-1">
							<h2 className="font-medium leading-snug">
								privacy & confidentiality
							</h2>
							<p className="text-sm">
								{
									"while I respect your privacy, i cannot guarantee the security of messages. Do not share sensitive or personal information."
								}
							</p>
						</div>
					</li>
					<li className="flex space-x-2">
						<strong>4.</strong>
						<div className="flex flex-col space-y-1">
							<h2 className="font-medium leading-snug">no liability</h2>
							<p className="text-sm">
								{
									"i am not responsible for any consequences resulting from the use of this messaging feature, including any misunderstandings or miscommunications."
								}
							</p>
						</div>
					</li>
					<li className="flex space-x-2">
						<strong>5.</strong>
						<div className="flex flex-col space-y-1">
							<h2 className="font-medium leading-snug">
								right to refuse or block messages
							</h2>
							<p className="text-sm">
								{
									"i reserve the right to refuse, delete, or block any messages that violate these terms or are deemed inappropriate."
								}
							</p>
						</div>
					</li>
				</ul>
				<PageHeaderDescription>
					by proceeding to send a message, you acknowledge that you have read
					and agree to these terms of service.
				</PageHeaderDescription>
			</PageHeaderBody>
		</PageHeader>
	);
}
