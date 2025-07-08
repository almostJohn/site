import "@/styles/globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { jetBrainsMono } from "@/util/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/util/cn";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/favicon-32x32.jpg",
				sizes: "32x32",
				type: "image/jpeg",
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
		creator: "@almostJohn",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-neutral-100 text-neutral-800 text-sm antialiased",
					jetBrainsMono.className,
				)}
			>
				<main className="min-h-screen mx-auto max-w-2xl px-6 md:px-0 flex items-center justify-center">
					{children}
				</main>
			</body>
		</html>
	);
}
