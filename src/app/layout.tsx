import type { Metadata } from "next";
import { fontMono } from "@/util/fonts";
import { SiteHeader } from "@/components/site-header";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontMono.className} bg-neutral-950 text-neutral-50 antialiased selection:bg-teal-500/30 selection:text-teal-500`}
			>
				<main className="mx-auto max-w-2xl">
					<SiteHeader />
					{children}
				</main>
			</body>
		</html>
	);
}
