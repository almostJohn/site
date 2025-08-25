import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import {
	PageHeader,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { SectionList } from "@/components/section-list";

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
		title: "thoughtsthing-site",
		href: "https://github.com/almostJohn/thoughtsthing",
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
		title: "more...",
		href: "https://github.com/almostJohn?tab=repositories",
	},
];

export default function HomePage() {
	return (
		<div className="flex flex-col gap-6 mt-12 md:flex-row md:justify-between">
			<PageHeader>
				<PageHeaderHeading>almostjohn</PageHeaderHeading>
				<PageHeaderDescription>
					i&apos;m 24 y/o software developer based in the philippines. i love
					building things, shuffling cards, and solving problems. i love
					language design, and web development. i mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium text-neutral-50 underline decoration-neutral-500 transition-colors hover:decoration-neutral-100"
					>
						next.js
					</a>
					, a frontend framework built with{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium text-neutral-50 underline decoration-neutral-500 transition-colors hover:decoration-neutral-100"
					>
						react
					</a>
					.
				</PageHeaderDescription>
				<SectionList title="projects">
					<ul className="mt-2.5 list-disc list-inside space-y-2">
						{projects.map((item, i) => (
							<li key={i} className="list-item">
								<a
									href={item.href}
									rel="noreferrer"
									target="_blank"
									className="text-sm font-medium underline decoration-neutral-500 transition-colors duration-200 hover:decoration-neutral-100"
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</SectionList>
				<SectionList title="looking for my cv?">
					<ul className="mt-2.5 list-disc list-inside space-y-2">
						<li className="list-item">
							<a
								href="/cv"
								rel="noreferrer"
								target="_blank"
								className="text-sm font-medium underline decoration-neutral-500 transition-colors duration-200 hover:decoration-neutral-100"
							>
								curriculum vitae (cv)
							</a>
						</li>
					</ul>
				</SectionList>
			</PageHeader>
			<MainNav />
			<MobileNav />
		</div>
	);
}
