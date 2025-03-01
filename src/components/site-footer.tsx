import * as React from "react";
import { siteConfig } from "@/util/site";

export function SiteFooter() {
	return (
		<footer className="mt-12 text-center pt-4 pb-8">
			<div className="flex justify-center space-x-4 text-sm">
				<a
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition hover:text-blue-600"
				>
					@almostJohn
				</a>
				<a
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition hover:text-blue-600"
				>
					discord
				</a>
				<a
					href={siteConfig.social.linkedin}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition hover:text-blue-600"
				>
					linkedin
				</a>
				<a
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition hover:text-blue-600"
				>
					github
				</a>
			</div>
		</footer>
	);
}
