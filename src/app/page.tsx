import * as React from "react";
import { Item, SectionList } from "@/components/section-list";
import { Header } from "@/components/header";
import { LinksSection } from "@/components/links-section";

const projects: Item[] = [
	{
		title: "scaffold.js",
		description:
			"scaffold.js is a lightweight layer over discord.js that streamlines bot development with structure, utilities, and smart defaults—letting you focus on features, not boilerplate.",
		href: "https://github.com/almostJohn/scaffold.js",
		role: "creator and maintainer",
	},
	{
		title: "tsconfig-site",
		description:
			"tsconfig is a simple site for easily copying and pasting TypeScript configuration file. No setup, no fuss—just grab the tsconfig.json you need and get coding.",
		href: "https://tsconfig-site.vercel.app",
		role: "creator and maintainer",
	},
];

export default function Home() {
	return (
		<>
			<Header />
			<SectionList
				title="projects"
				items={projects}
				viewAllHref="/projects"
				viewAllText="all projects"
			/>
			<LinksSection />
		</>
	);
}
