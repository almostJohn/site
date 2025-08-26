import { Ubuntu, Noto_Serif } from "next/font/google";

export const ubuntu = Ubuntu({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-ubuntu",
	weight: ["300", "400", "500", "700"],
});

export const notoSerif = Noto_Serif({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-noto-serif",
});
