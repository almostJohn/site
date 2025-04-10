import * as React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import type { Metadata } from "next";
import { geistMono } from "@/util/fonts";
import { siteConfig } from "@/util/site";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	icons: {
		other: [
			{
				url: "/favicon.svg",
				sizes: "32x32",
				type: "image/svg",
			},
		],
	},
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		type: "website",
		title: siteConfig.title,
	},
	twitter: {
		card: "summary_large_image",
		creator: "@almostJohn",
	},
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistMono.className} bg-neutral-900 text-white antialiased`}
			>
				<div className="min-h-screen mx-auto max-w-4xl">
					<Navbar />
					<ViewTransition>
						<main className="w-full py-14 px-4 md:px-6">
							<div className="flex flex-col gap-10">{children}</div>
						</main>
					</ViewTransition>
				</div>
			</body>
		</html>
	);
}
