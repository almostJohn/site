import * as React from "react";
import { MapPin } from "lucide-react";

export function Info() {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-bold mb-6">john gale garcia</h1>
			<div className="flex flex-col space-y-4">
				<span className="flex items-center gap-2 text-neutral-500">
					<MapPin className="size-6" />
					<p className="text-sm">olongapo city, philippines</p>
				</span>
				<p className="text-neutral-300">
					i&apos;m a 24 y/o senior high school, information and communication
					technology graduate. i love building things, shuffling cards and
					solving problems. i enjoy language design and web development. i
					mostly use{" "}
					<a
						href="https://nextjs.org"
						className="transition text-teal-500 duration-300 hover:underline"
					>
						next.js
					</a>
					, a framework built on top{" "}
					<a
						href="https://react.dev"
						className="transition text-teal-500 duration-300 hover:underline"
					>
						react
					</a>
					.
				</p>
			</div>
		</div>
	);
}
