import * as React from "react";
import {
	SiGithub as GitHub,
	SiX as X,
	SiInstagram as Instagram,
	SiDiscord as Discord,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/util/site";

export default function IndexPage() {
	return (
		<div className="container flex flex-col space-y-6 pt-8 pb-10 md:pb-16 lg:pb-20">
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
						className="p-4 border border-neutral-800 bg-transparent rounded-md cursor-pointer transition-colors hover:border-teal-500"
					>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-1">
								<span className="font-medium text-sm underline underline-offset-4">
									{item.title}
								</span>
								<div className="group flex gap-2 w-1/2 items-center text-neutral-500">
									<a
										href={item.live.link}
										rel="noreferrer"
										target="_blank"
										className="text-xs truncate group-hover:underline"
									>
										{item.live.label}
									</a>
									<ExternalLink className="hidden size-4 shrink-0 group-hover:flex" />
								</div>
							</div>
							<div className="flex items-center justify-start">
								<a
									href={item.repository}
									rel="noreferrer"
									target="_blank"
									className="group inline-flex items-center justify-center px-3 py-1 gap-2 rounded-full bg-neutral-800 text-xs font-medium"
								>
									<GitHub className="size-4 shrink-0" />
									<span>almostJohn/{item.title}</span>
								</a>
							</div>
							<p className="text-sm text-neutral-500">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-bold mb-4">
					<span className="text-teal-500">*</span> links
				</h1>
				<div className="flex items-center gap-4 flex-wrap text-sm tracking-tighter">
					<a
						href={siteConfig.social.github}
						rel="noreferrer"
						target="_blank"
						className="flex items-center underline underline-offset-4"
					>
						<GitHub className="size-4 mr-2" /> almostJohn
					</a>
					<a
						href={siteConfig.social.twitter}
						rel="noreferrer"
						target="_blank"
						className="flex items-center underline underline-offset-4"
					>
						<X className="size-4 mr-2" /> almostJohn1
					</a>
					<a
						href={siteConfig.social.discord}
						rel="noreferrer"
						target="_blank"
						className="flex items-center underline underline-offset-4"
					>
						<Discord className="size-4 mr-2" /> almostjohn
					</a>
					<a
						href={siteConfig.social.instagram}
						rel="noreferrer"
						target="_blank"
						className="flex items-center underline underline-offset-4"
					>
						<Instagram className="size-4 mr-2" /> almostjohn1
					</a>
					<a
						href={siteConfig.social.facebook}
						rel="noreferrer"
						target="_blank"
						className="flex items-center underline underline-offset-4"
					>
						<Facebook className="size-4 mr-2" /> alsojohn01
					</a>
				</div>
			</div>
		</div>
	);
}
