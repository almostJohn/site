import type { Metadata } from "next";
import { geistMono } from "@/util/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "almostjohn",
		template: "almostjohn — %s",
	},
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
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistMono.className} bg-neutral-50 text-neutral-950 antialiased selection:bg-teal-500/30 selection:text-teal-500`}
			>
				<main className="min-h-screen text-sm">{children}</main>
			</body>
		</html>
	);
}
