import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";

export default function IndexPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<HomePageHeader />
			<p className="text-center text-balance">
				{
					"I'm a 24 y/o software developer. I love building things, shuffling cards and solving problems. I enjoy language design and web development. I mostly use"
				}{" "}
				<a
					href="https://nextjs.org"
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline font-medium text-blue-600"
				>
					next.js
				</a>
				, a framework built on top{" "}
				<a
					href="https://react.dev"
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline font-medium text-blue-600"
				>
					react
				</a>
				.
			</p>
			<p className="text-balance text-center">
				Want to send me a message?{" "}
				<Link
					href="/send-message"
					className="underline-offset-4 underline font-medium text-blue-600"
				>
					Click here
				</Link>{" "}
				or write me an{" "}
				<a
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline font-medium text-blue-600"
				>
					email
				</a>{" "}
				instead.
			</p>
			<p className="text-balance text-center">
				{"If you're looking for my projects, you can find it"}{" "}
				<a
					href={siteConfig.social.projects}
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline font-medium text-blue-600"
				>
					here
				</a>
				.
			</p>
		</div>
	);
}

function HomePageHeader() {
	return (
		<>
			<div className="flex items-center justify-center gap-2 font-medium mb-4">
				<Link href="/" className="underline-offset-4 underline text-blue-600">
					almostjohn
				</Link>
				/
				<a
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline text-blue-600"
				>
					twitter
				</a>
				/
				<a
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="underline-offset-4 underline text-blue-600"
				>
					github
				</a>
			</div>
		</>
	);
}
