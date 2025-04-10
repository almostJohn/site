import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	experimental: {
		mdxRs: true,
		viewTransition: true,
	},
};

export default nextConfig;
