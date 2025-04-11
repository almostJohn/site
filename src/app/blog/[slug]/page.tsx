import * as React from "react";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/util/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHeader } from "@/components/page-header";
import { mdxComponents } from "@/mdx-components";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
	const slug = (await params).slug;
	const post = getPostBySlug(slug);

	if (!post) {
		return;
	}

	const publishedTime = formatDate(post.metadata.date);

	return {
		title: post.metadata.title,
		description: post.metadata.description,
		openGraph: {
			title: post.metadata.title,
			description: post.metadata.description,
			publishedTime,
		},
	};
}

export default async function Post({ params }: PageProps) {
	const slug = (await params).slug;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="flex flex-col gap-6">
			<PageHeader
				title={post.metadata.title.toLowerCase()}
				description={post.metadata.description.toLowerCase()}
			/>
			<span className="text-sm text-neutral-500">
				{formatDate(post.metadata.date).toLowerCase()}
			</span>

			<article className="prose dark:prose-invert max-w-none space-y-4">
				<MDXRemote source={post.content} components={mdxComponents} />
			</article>

			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org/",
						"@type": "Blog",
						headline: post.metadata.title,
						datePublished: post.metadata.date,
						dateModified: post.metadata.date,
						description: post.metadata.description,
						author: {
							"@type": "Person",
							name: "John Gale Garcia",
						},
					}),
				}}
			/>
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
