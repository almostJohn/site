import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	devIndicators: false,
	pageExtensions: ["ts", "mdx", "tsx"],
	experimental: {
		mdxRs: true,
		viewTransition: true,
	},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
