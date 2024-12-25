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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontMono.className} bg-white text-gray-900 antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
