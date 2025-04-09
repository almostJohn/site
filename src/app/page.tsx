import * as React from "react";
import { MapPin } from "lucide-react";
import { Projects } from "@/components/display/projects";
import { Links } from "@/components/display/links";

export default function Home() {
	return (
		<>
			<div className="w-full py-16 px-4 md:px-6">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-2">
							<h1 className="text-4xl font-bold mb-4">jhan gale garcia</h1>
							<div className="flex items-center space-x-2">
								<MapPin className="text-neutral-400 size-5" />
								<span className="text-neutral-400">zambales, philippines</span>
							</div>
						</div>
						<p className="pt-4">
							{
								"i'm a 24 y/o software developer based on philippines. i love building things, shuffling cards and solving problems. i enjoy language design and web-development."
							}{" "}
							i mostly use{" "}
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
					<Projects />
					<Links />
				</div>
			</div>
		</>
	);
}
