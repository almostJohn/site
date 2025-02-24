import * as React from "react";
import Link from "next/link";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/util/site";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
			<div className="container max-w-screen-2xl h-14 flex items-center justify-between w-full">
				<Link href="/" className="font-bold leading-tight tracking-tighter">
					almostjohn
				</Link>
				<div className="flex items-center justify-end gap-2">
					<a
						href={siteConfig.social.github}
						rel="noreferrer"
						target="_blank"
						className="h-8 inline-flex items-center justify-center px-2 py-1 rounded-md transition-colors hover:bg-neutral-800"
					>
						<GitHub className="size-4" />
					</a>
				</div>
			</div>
		</header>
	);
}
