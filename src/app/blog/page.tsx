import * as React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { getPosts } from "@/util/blog";
import { PostsList } from "@/components/posts-list";

const posts = getPosts().sort(
	(a, b) =>
		new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
);

export const metadata: Metadata = {
	title: "blog",
};

export default async function BlogPage() {
	return (
		<div className="flex flex-col gap-6">
			<PageHeader title="blog" description="read my blogs." />
			<PostsList posts={posts} />
		</div>
	);
}
