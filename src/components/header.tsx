import * as React from "react";
import { MapPin } from "lucide-react";

export function Header() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl font-bold tracking-tight">john gale garcia</h1>
				<div className="flex items-center gap-2">
					<MapPin className="size-4 text-neutral-400" />
					<span className="text-sm text-neutral-400">
						zambales, philippines
					</span>
				</div>
			</div>
			<p className="pt-4 leading-snug">
				i&apos;m a 24 y/o software developer based in the philippines. i love
				building things, shuffling cards, and solving problems. i enjoy language
				design and web development. i mostly use{" "}
				<a
					href="https://nextjs.org"
					rel="noreferrer"
					target="_blank"
					className="text-sky-500 hover:underline"
				>
					next.js
				</a>
				, a frontend framework built on top{" "}
				<a
					href="https://react.dev"
					rel="noreferrer"
					target="_blank"
					className="text-sky-500 hover:underline"
				>
					react
				</a>
				.
			</p>
		</div>
	);
}
