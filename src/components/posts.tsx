import * as React from "react";
import type { MDXFileData } from "@/util/blog";
import { PostItem } from "./post-item";

export function Posts({ posts }: { posts: MDXFileData[] }) {
	return (
		<div className="flex flex-col gap-8">
			{posts.map((post, i) => (
				<PostItem key={i} post={post} />
			))}
		</div>
	);
}
