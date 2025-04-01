import type { Metadata } from "next";
import { geistMono } from "@/util/fonts";
import { siteConfig } from "@/util/site";
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
		title: siteConfig.name,
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
				className={`${geistMono.className} bg-neutral-100 text-neutral-900 antialiased selection:bg-teal-500/30 selection:text-teal-500`}
			>
				<main className="min-h-screen container max-w-3xl">{children}</main>
			</body>
		</html>
	);
}
