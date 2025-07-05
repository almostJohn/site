import Link from "next/link";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
	return (
		<header className="w-full relative">
			<div className="mx-auto max-w-6xl px-6 md:px-0 flex items-center justify-between h-20">
				<Link href="/" className="hidden md:flex">
					<Icons.developer className="size-15 shrink-0" />
				</Link>
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
}
