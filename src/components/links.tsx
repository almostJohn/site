import * as React from "react";
import { siteConfig } from "@/util/site";

export function Links() {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold mb-6">
				<span className="text-teal-500">*</span> links
			</h1>
			<div className="flex items-center space-x-4 text-sm">
				<a
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 duration-300 hover:text-teal-500"
				>
					email
				</a>
				<a
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 duration-300 hover:text-teal-500"
				>
					github
				</a>
				<a
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 duration-300 hover:text-teal-500"
				>
					x.com
				</a>
				<a
					href={siteConfig.social.linkedin}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 duration-300 hover:text-teal-500"
				>
					linkedin
				</a>
				<a
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 duration-300 hover:text-teal-500"
				>
					discord
				</a>
			</div>
		</div>
	);
}
