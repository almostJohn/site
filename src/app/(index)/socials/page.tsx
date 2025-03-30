import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/util/site";
import {
	SiGithub as GitHub,
	SiX as X,
	SiInstagram as Instagram,
	SiDiscord as Discord,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";

export const metadata: Metadata = {
	title: "socials",
};

export default function Page() {
	return (
		<div className="flex flex-col mt-8 gap-8 pb-10">
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-semibold">
					<span className="text-blue-600">*</span> socials
				</h1>
				<p className="text-neutral-500">follow me on my social media.</p>
			</div>
			<div className="flex flex-col space-y-5">
				<a
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<Send className="size-5" />
					email
				</a>
				<a
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<GitHub className="size-5" />
					@almostJohn
				</a>
				<a
					href={siteConfig.social.discordServer}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<Discord className="size-5" />
					my discord server
				</a>
				<a
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<Discord className="size-5" />
					@almostjohn
				</a>
				<a
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<X className="size-5" />
					.com/almostJohn1
				</a>
				<a
					href={siteConfig.social.instagram}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<Instagram className="size-5" />
					.com/almostjohn1
				</a>
				<a
					href={siteConfig.social.facebook}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-center h-10 px-6 py-2 gap-2 rounded border border-dashed border-neutral-300 bg-transparent transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<Facebook className="size-5" />
					.com/alsojohn01
				</a>
			</div>
		</div>
	);
}
