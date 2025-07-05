"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/util/cn";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./icons";
import { X } from "lucide-react";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Portfolio",
		href: "/portfolio",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

export function MobileNav() {
	const pathname = usePathname();
	const [interacted, setInteracted] = useState(false);

	function onTrigger() {
		setInteracted((prev) => !prev);
	}

	return (
		<>
			<button
				className="inline-flex absolute top-8 right-8 cursor-pointer items-center justify-center rounded-sm px-4 py-2 size-10 bg-transparent md:hidden"
				onClick={onTrigger}
			>
				<motion.div
					animate={{ rotate: interacted ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					{interacted ? (
						<X className="size-8 shrink-0" />
					) : (
						<Icons.menu className="size-8 shrink-0" />
					)}
				</motion.div>
				<span className="sr-only">Toggle Menu</span>
			</button>
			<AnimatePresence>
				{interacted && (
					<motion.div
						initial={{ clipPath: "circle(0% at 100% 0%)" }}
						animate={{ clipPath: "circle(150% at 100% 0%)" }}
						exit={{ clipPath: "circle(0% at 100% 0%)" }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="fixed top-0 left-0 w-full h-screen bg-neutral-100 z-50 md:hidden"
					>
						<div className="absolute top-8 right-8">
							<button
								className="inline-flex cursor-pointer items-center justify-center rounded-sm px-4 py-2 size-10 bg-transparent md:hidden"
								onClick={onTrigger}
							>
								<motion.div
									animate={{ rotate: 180 }}
									transition={{ duration: 0.3 }}
								>
									<X className="size-8 shrink-0" />
								</motion.div>
								<span className="sr-only">Toggle Menu</span>
							</button>
						</div>
						<div className="flex flex-col items-center justify-center h-full gap-8">
							{navItems.map((item, index) => (
								<motion.div
									key={item.href}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{
										delay: interacted ? index * 0.1 + 0.2 : 0,
										duration: 0.3,
									}}
								>
									<Link
										href={item.href}
										className={cn(
											"relative text-3xl font-medium text-neutral-500 transition-colors hover:text-neutral-800 group block text-center",
											pathname === item.href ? "text-neutral-800" : "",
										)}
										onClick={() => setInteracted(false)}
									>
										{item.title}
										{pathname === item.href ? (
											<>
												<span className="absolute -bottom-1 left-0 bg-neutral-800 w-full h-0.5" />
											</>
										) : (
											<>
												<span
													className={cn(
														"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-neutral-800 transition-all duration-300 ease-out group-hover:w-full",
													)}
												/>
											</>
										)}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
