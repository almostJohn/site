import * as React from "react";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";
import { MapPin } from "lucide-react";

export function Main() {
	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2">
				<Heading.h1 className="mb-1">jhan gale garcia</Heading.h1>
				<div className="flex items-center space-x-2">
					<MapPin className="size-4 text-neutral-500" />
					<span className="text-neutral-500">zambales, philippines</span>
				</div>
			</div>
			<Paragraph>
				{
					"i'm a 24 y/o software developer based in the philippines. i love building things, shuffling cards, and solving problems. i enjoy language design and web development. i mostly use"
				}{" "}
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
			</Paragraph>
		</div>
	);
}
