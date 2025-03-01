import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/util/site";

export default function IndexPage() {
	return (
		<div className="container flex flex-col space-y-4 pt-8 pb-10 md:pb-16 lg:pb-20">
			<Link href="/" className="mt-8 mb-4 font-medium">
				almostjohn
			</Link>
			<p>
				I&apos;m a 24 y/o senior high school, information and communication
				technology graduate. I love building things, shuffling cards and solving
				problems. I enjoy language design and web development. If I&apos;m not
				coding, I&apos;m probably watching anime, working out or obsessing on
				medieval stories and arts.
			</p>
			<div className="flex flex-col space-y-3 pt-4">
				<h3 className="font-medium mb-2">projects</h3>
				<ul className="space-y-2 ml-3">
					{siteConfig.projects.map((item, i) => (
						<li key={i}>
							•{" "}
							<a
								href={item.href}
								className="underline decoration-neutral-500 transition hover:decoration-neutral-50"
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
