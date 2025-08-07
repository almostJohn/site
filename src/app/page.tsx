import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/moblie-nav";
import { cn } from "@/util/cn";
import { domine } from "@/util/fonts";

const projects = [
	{
		title: "syntra-site",
		href: "https://syntra-site.vercel.app",
	},
	{
		title: "tsconfig-site",
		href: "https://tsconfig-site.vercel.app",
	},
	{
		title: "demo-merch-site",
		href: "https://github.com/almostJohn/demo-merch-site",
	},
	{
		title: "scaffold.js",
		href: "https://github.com/almostJohn/scaffold.js",
	},
	{
		title: "image-upload-api",
		href: "https://github.com/almostJohn/image-upload-api",
	},
	{
		title: "pochita (discord bot)",
		href: "https://github.com/almostJohn/pochita",
	},
];

export default function HomePage() {
	return (
		<div className="flex flex-col gap-6 mt-12 md:flex-row md:justify-between">
			<div className="flex flex-col gap-4">
				<h1
					className={cn("text-3xl font-medium md:text-4xl", domine.className)}
				>
					almostjohn
				</h1>
				<p className="text-sm w-full sm:max-w-lg text-neutral-400 mt-3">
					i&apos;m 24 y/o software developer based in the philippines. i love
					building things, shuffling cards, and solving problems. i love
					language design, and web development. i mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium text-neutral-50 underline decoration-neutral-500 transition-colors hover:decoration-neutral-50"
					>
						next.js
					</a>
					, a frontend framework built with{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium text-neutral-50 underline decoration-neutral-500 transition-colors hover:decoration-neutral-50"
					>
						react
					</a>
					.
				</p>
				<div className="flex flex-col gap-3 mt-6">
					<h2 className={cn("text-2xl font-medium", domine.className)}>
						projects
					</h2>
					<ul className="space-y-2 mt-2 list-disc list-inside">
						{projects.map((item, index) => (
							<li key={index} className="list-item">
								<a
									href={item.href}
									rel="noreferrer"
									target="_blank"
									className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-3 mt-6">
					<h2 className={cn("text-2xl font-medium", domine.className)}>
						looking for my cv?
					</h2>
					<ul className="space-y-2 mt-2 list-disc list-inside">
						<li className="list-item">
							<a
								href="/cv"
								rel="noreferrer"
								target="_blank"
								className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50"
							>
								curriculum vitae (cv)
							</a>
						</li>
					</ul>
				</div>
			</div>
			<MainNav />
			<MobileNav />
		</div>
	);
}
