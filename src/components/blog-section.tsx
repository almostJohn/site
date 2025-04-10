import * as React from "react";
import Link from "next/link";
import { getPosts } from "@/util/blog";

const posts = getPosts()
	.sort(
		(a, b) =>
			new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
	)
	.slice(0, 4);

export function BlogSection() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl font-bold tracking-tight">
				<span className="text-sky-500">*</span> blog
			</h2>
			<div className="flex flex-col gap-4">
				{posts.map((post, i) => (
					<Link
						key={i}
						href={`/blog/${post.slug}`}
						className="flex item-center justify-between w-full"
					>
						<div className="flex flex-col gap-1">
							<h3 className="text-lg font-semibold leading-snug">
								{post.metadata.title}
							</h3>
							<p className="text-sm text-neutral-300">
								{post.metadata.description?.toLowerCase()}
							</p>
						</div>
						<div className="text-right">
							<span className="text-sm text-neutral-500">
								{formatDate(post.metadata.date)}
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
