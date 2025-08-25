import { JetBrains_Mono, Domine, Geist_Mono } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
});

export const domine = Domine({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-domine",
});

export const geistMono = Geist_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-mono",
});
