import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
						className="flex item-center justify-between w-full group"
					>
						<div className="flex flex-col gap-1">
							<h3 className="transition-colors group-hover:text-sky-500">
								{post.metadata.title.toLowerCase()}
							</h3>
						</div>
						<div className="text-right">
							<span className="text-sm shrink-0 text-neutral-400">
								{formatDate(post.metadata.date)}
							</span>
						</div>
					</Link>
				))}
			</div>
			<Link
				href="/blog"
				className="inline-flex items-center gap-1 text-sky-500 hover:underline group"
			>
				all posts
				<ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
			</Link>
		</div>
	);
}

function formatDate(dateString: string) {
	return new Date(dateString)
		.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})
		.toLowerCase();
}
