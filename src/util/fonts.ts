import { Inter, Geist_Mono } from "next/font/google";

export const inter = Inter({
	variable: "--font-inter",
	display: "swap",
	subsets: ["latin"],
});

export const geistMono = Geist_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-mono",
});
