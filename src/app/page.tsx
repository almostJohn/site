import Link from "next/link";

const projects = [
	{
		title: "tsconfig-site",
		description:
			"A minimal, developer-friendly tool for quickly copying ready-to-use TypeScript configuration files. Save time and start coding with a solid foundation.",
		href: "https://github.com/almostJohn/tsconfig-site",
	},
	{
		title: "syntra-site",
		description:
			"Syntra provides the intuitive tools and visual workflow to organize, track, and complete your tasks efficiently.",
		href: "https://github.com/almostJohn/syntra-site",
	},
	{
		title: "demo-merch-site",
		description: "Demo merch website for showcasing my UI skills in frontend.",
		href: "https://github.com/almostJohn/demo-merch-site",
	},
	{
		title: "image-upload-api",
		description: "API for uploading and managing images.",
		href: "https://github.com/almostJohn/image-upload-api",
	},
	{
		title: "scaffold.js",
		description:
			"scaffold.js is a lightweight layer over discord.js that streamlines bot development with structure, utilities, and smart defaults—letting you focus on features, not boilerplate.",
		href: "https://github.com/almostJohn/scaffold.js",
	},
	{
		title: "pochita",
		description: "Pochita - a private discord bot application.",
		href: "https://github.com/almostJohn/pochita",
	},
];

export default function HomePage() {
	return (
		<div className="w-full p-8 flex flex-col text-left">
			<div className="flex flex-col gap-12 w-full sm:w-[24rem]">
				<div className="flex items-center gap-2 font-medium">
					<Link href="/" className="underline-offset-4 underline text-blue-800">
						almostjohn
					</Link>
					/
					<a
						href="https://x.com/almostJohn1"
						rel="noreferrer"
						target="_blank"
						className="underline underline-offset-4 text-blue-800"
					>
						twitter
					</a>
					/
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="underline underline-offset-4 text-blue-800"
					>
						github
					</a>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-lg font-medium">about me</h2>
					<p className="text-sm text-balance">
						i'm a developer based in the philippines. i love building things,
						shuffling cards, and solving problems. i love language design and
						web development. i mostly use{" "}
						<a
							href="https://nextjs.org"
							rel="noreferrer"
							target="_blank"
							className="underline underline-offset-4 font-medium text-blue-800"
						>
							next.js
						</a>
						, a frontend framework built with{" "}
						<a
							href="https://react.dev"
							rel="noreferrer"
							target="_blank"
							className="underline underline-offset-4 font-medium text-blue-800"
						>
							react
						</a>
						.
					</p>
					<p className="text-sm text-balance mt-1">
						previously, i worked at{" "}
						<a
							href="https://upskwela.com"
							rel="noreferrer"
							target="_blank"
							className="underline-offset-4 font-medium underline text-blue-800"
						>
							upskwela
						</a>
						, a startup company that aims to build a web app for content
						creators in the philippines to create and grow communities with
						their fans. i joined the development team and helped the move the
						project forward.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-lg font-medium">projects</h2>
					<div className="grid gap-3">
						{projects.map((project, i) => (
							<a key={i} href={project.href} className="grid gap-1">
								<h1 className="font-medium underline underline-offset-4 text-blue-800">
									{project.title}
								</h1>
								<p className="text-balance">
									{project.description.toLowerCase()}
								</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
