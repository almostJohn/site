import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/util/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Projects",
};

export default function Page() {
	return (
		<div className="flex flex-col space-y-8 py-12">
			<div className="flex flex-col space-y-4">
				<h1 className="text-4xl font-bold mb-6">
					<span className="text-teal-500">*</span> projects
				</h1>
				<p className="text-neutral-500">
					here are some of the projects i&apos;ve worked on.
				</p>
			</div>
			<div className="flex flex-col space-y-10">
				{siteConfig.projects.map((item, i) => (
					<a
						key={i}
						href={item.href}
						rel="noreferrer"
						target="_blank"
						className="block p-5 group border border-neutral-800 transition duration-300 hover:border-teal-500"
					>
						<div className="flex flex-col space-y-4">
							<div className="flex items-center justify-between w-full">
								<h1 className="text-2xl font-semibold group-hover:text-teal-500">
									{item.title}
								</h1>
								<div className="flex items-center justify-end">
									<ArrowUpRight className="size-5 group-hover:text-teal-500" />
								</div>
							</div>
							<p className="text-sm text-neutral-500">creator and maintainer</p>
							<p className="text-neutral-300">{item.description}</p>
							<div className="pt-4 flex flex-col space-y-2">
								<h3 className="font-bold">technologies</h3>
								<div className="flex flex-wrap items-center gap-2">
									{item.technologies.map((tech) => (
										<div
											key={tech.label}
											className="inline-flex items-center justify-center px-3 py-0.5 rounded text-xs font-bold bg-neutral-800 cursor-pointer"
										>
											{tech.label}
										</div>
									))}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
