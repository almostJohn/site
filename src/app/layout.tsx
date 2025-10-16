import "@/styles/globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { caveat } from "@/util/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/util/cn";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/favicon.png",
				sizes: "32x32",
				type: "image/png",
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
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		creator: siteConfig.creator,
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-neutral-800 text-neutral-50 antialiased",
					caveat.className,
				)}
			>
				<main className="min-h-screen mx-auto max-w-2xl pt-18 pb-12 px-6 sm:px-4 md:px-8 md:pt-32">
					{children}
				</main>
			</body>
		</html>
	);
}
