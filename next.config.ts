import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	pageExtensions: ["ts", "mdx", "tsx"],
	experimental: {
		// mdxRs: true,
		viewTransition: true,
	},
};

export default nextConfig;
