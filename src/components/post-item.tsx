import * as React from "react";
import type { MDXFileData } from "@/util/blog";
import Link from "next/link";

type PostItemProps = {
	post: MDXFileData;
};

export function PostItem({ post }: PostItemProps) {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="flex flex-col gap-3 w-full group md:flex-row md:items-center md:justify-between"
		>
			<div>
				<h1 className="transition-colors group-hover:text-sky-500">
					{post.metadata.title.toLowerCase()}
				</h1>
			</div>
			<div>
				<span className="text-sm shrink-0 text-neutral-400">
					{new Date(post.metadata.date)
						.toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})
						.toLowerCase()}
				</span>
			</div>
		</Link>
	);
}
