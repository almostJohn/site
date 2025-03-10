"use client";

import type { Metadata } from "next";
import { fontMono } from "@/util/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "almostjohn",
		template: "%s | almostjohn",
	},
	icons: {
		other: [
			{
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
	appleWebApp: {
		title: "almostjohn",
	},
	applicationName: "almostjohn",
	openGraph: {
		siteName: "almostjohn",
		type: "website",
		title: "almostjohn",
	},
	twitter: {
		card: "summary_large_image",
		creator: "@almostJohn",
	},
};

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<html lang="en" suppressContentEditableWarning>
			<body
				className={`${fontMono.className} bg-white text-gray-900 antialiased`}
			>
				<div className="h-screen flex justify-center items-center">
					<div className="flex flex-col space-y-6">
						<div className="flex flex-col space-y-4">
							<h1 className="text-6xl font-black leading-none md:text-8xl">
								500
							</h1>
							<p className="text-xl">error</p>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
