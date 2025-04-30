import type { Metadata } from "next";
import { jetBrainsMono } from "@/util/fonts";
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
				className={`${jetBrainsMono.className} bg-white text-black antialiased min-h-screen text-sm`}
			>
				<div className="mx-auto max-w-2xl flex flex-col">{children}</div>
			</body>
		</html>
	);
}
