import * as React from "react";
import Link from "next/link";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
			<div className="container max-w-screen-2xl h-14 flex items-center">
				<Link href="/" className="font-bold leading-tight tracking-tighter">
					almostjohn
				</Link>
			</div>
		</header>
	);
}
