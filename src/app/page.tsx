import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";
import { MainNav } from "@/components/main-nav";

export default function IndexPage() {
	return (
		<div className="w-full flex items-center justify-center p-8">
			<div className="flex flex-col gap-8 w-[24rem] text-center">
				<MainNav />
				<div className="flex flex-col gap-2">
					<p className="text-balance font-medium">
						{
							"I'm a 24 y/o software developer. I love building things, shuffling cards and solving problems. I enjoy language design and web development. I mostly use"
						}{" "}
						<a
							href="https://nextjs.org"
							rel="noreferrer"
							target="_blank"
							className="underline-offset-4 underline text-blue-600"
						>
							next.js
						</a>
						, a framework built on top{" "}
						<a
							href="https://react.dev"
							rel="noreferrer"
							target="_blank"
							className="underline-offset-4 underline text-blue-600"
						>
							react
						</a>
						.
					</p>
				</div>
				<p className="text-sm font-medium text-balance">
					Want to send me a message?{" "}
					<Link
						href="/send-message"
						className="underline-offset-4 underline text-blue-600"
					>
						Click here
					</Link>{" "}
					or write me an{" "}
					<a
						href={siteConfig.social.email}
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline text-blue-600"
					>
						email
					</a>{" "}
					instead.
				</p>
				<div className="text-balance text-sm font-medium">
					<a
						href={`${siteConfig.social.github}?tab=repositories`}
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline text-blue-600"
					>
						{"If you're looking for my projects, you can find it here"}
					</a>
					.
				</div>
			</div>
		</div>
	);
}
