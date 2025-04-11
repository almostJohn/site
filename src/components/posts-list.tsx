import * as React from "react";
import type { MDXFileData } from "@/util/blog";
import { Posts } from "./posts";

export function PostsList({ posts }: { posts: MDXFileData[] }) {
	return <Posts posts={posts} />;
}
