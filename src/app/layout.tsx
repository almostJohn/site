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
				url: "/favicon.png",
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
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontMono.className} bg-neutral-900 text-neutral-50 antialiased selection:bg-teal-500/30 selection:text-teal-500 flex flex-col min-h-screen`}
			>
				<div className="flex-1">
					<div className="container max-w-4xl">
						<SiteHeader />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
