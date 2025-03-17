import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";

export function MainNav() {
	return (
		<div className="flex items-center justify-center gap-2 font-medium">
			<Link href="/" className="underline-offset-4 underline text-blue-600">
				almostjohn
			</Link>
			/
			<Link
				href={siteConfig.social.twitter}
				rel="noreferrer"
				target="_blank"
				className="underline-offset-4 underline text-blue-600"
			>
				twitter
			</Link>
			/
			<Link
				href={siteConfig.social.github}
				rel="noreferrer"
				target="_blank"
				className="underline-offset-4 underline text-blue-600"
			>
				github
			</Link>
		</div>
	);
}
