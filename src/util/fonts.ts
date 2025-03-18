import { JetBrains_Mono, Geist_Mono } from "next/font/google";

export const fontMono = JetBrains_Mono({
	variable: "--font-mono",
	display: "swap",
	subsets: ["latin"],
});

export const geistMono = Geist_Mono({
	display: "swap",
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
