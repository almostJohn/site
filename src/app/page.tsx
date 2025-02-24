import * as React from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/util/site";

export default function IndexPage() {
	return (
		<div className="container flex flex-col space-y-6 py-8">
			<div className="flex flex-col space-y-3">
				<h1 className="text-2xl">jhan gale garcia</h1>
				<div className="flex items-center space-x-2">
					<MapPin className="size-5 shrink-0 text-neutral-500" />
					<span className="text-sm text-neutral-500">
						olongapo city, philippines
					</span>
				</div>
			</div>
			<p>
				I&apos;m a 24 y/o senior high school, information and communication
				technology graduate. I love building things, shuffling cards and solving
				problems. I enjoy language design and web development. If I&apos;m not
				coding, I&apos;m probably watching anime, working out or obsessing on
				medieval stories and arts.
			</p>
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-bold mb-4">
					<span className="text-teal-500">*</span> projects
				</h1>
				{siteConfig.projects.map((item, i) => (
					<div
						key={i}
						className="block p-4 border border-neutral-800 bg-transparent rounded-md cursor-pointer transition-colors hover:border-teal-500"
					>
						<div className="flex flex-col space-y-3">
							<div className="flex flex-col space-y-1">
								<h3 className="font-medium underline underline-offset-4">
									{item.title}
								</h3>
								<p className="text-sm text-neutral-500">{item.description}</p>
							</div>
							<div className="flex items-center justify-end gap-2">
								<a
									href={item.live}
									className="group inline-flex items-center justify-center px-3 py-1 gap-2 rounded-md text-sm font-medium border border-neutral-800 bg-transparent transition-colors hover:bg-neutral-800"
								>
									<span>live</span>
									<ExternalLink className="hidden size-4 shrink-0 group-hover:flex" />
								</a>
								<a
									href={item.repository}
									className="group inline-flex items-center justify-center px-3 py-1 gap-2 rounded-md text-sm font-medium border border-neutral-800 bg-transparent transition-colors hover:bg-neutral-800"
								>
									<span>repository</span>
									<ExternalLink className="hidden size-4 shrink-0 group-hover:flex" />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-bold mb-4">
					<span className="text-teal-500">*</span> links
				</h1>
				<div className="flex gap-1.5 items-center text-xs/relaxed text-teal-500">
					<a
						href={siteConfig.social.github}
						className="underline underline-offset-4"
						rel="noreferrer"
						target="_blank"
					>
						github
					</a>
					/
					<a
						href={siteConfig.social.twitter}
						className="underline underline-offset-4"
						rel="noreferrer"
						target="_blank"
					>
						x.com
					</a>
					/
					<a
						href={siteConfig.social.discord}
						className="underline underline-offset-4"
						rel="noreferrer"
						target="_blank"
					>
						discord
					</a>
					/
					<a
						href={siteConfig.social.instagram}
						className="underline underline-offset-4"
						rel="noreferrer"
						target="_blank"
					>
						instagram
					</a>
					/
					<a
						href={siteConfig.social.facebook}
						className="underline underline-offset-4"
						rel="noreferrer"
						target="_blank"
					>
						fb.com
					</a>
				</div>
			</div>
		</div>
	);
}
