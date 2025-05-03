import { Name } from "@/components/name";
import { SubscribeForm } from "@/components/subscribe-form";
import { Projects } from "@/components/projects";
import { Stacks } from "@/components/stacks";
import { Links } from "@/components/links";

const projects = [
	{
		title: "tsconfig-site",
		href: "https://tsconfig-site.vercel.app",
	},
	{
		title: "simplynote-site",
		href: "https://simplynote-site.vercel.app",
	},
];

const stacks: string[] = [
	"TypeScript",
	"Next.js",
	"React",
	"Tailwind CSS",
	"Node.js",
	"Postgres",
];

const links = [
	{
		title: "buy me a coffee",
		href: "https://ko-fi.com/almostjohn",
	},
	{
		title: "email",
		href: "mailto:garcia.johngale@gmail.com",
	},
	{
		title: "github",
		href: "https://github.com/almostJohn",
	},
	{
		title: "x.com",
		href: "https://x.com/almostJohn1",
	},
	{
		title: "discord",
		href: "https://discord.com/users/996354867708841984",
	},
	{
		title: "instagram",
		href: "https://instagram.com/almostjohn1",
	},
	{
		title: "facebook",
		href: "https://facebook.com/alsojohn01",
	},
];

export default function Homepage() {
	return (
		<div className="flex flex-col space-y-6 pt-6 pb-12">
			<div className="space-y-5">
				<Name />
				<p>
					I'm a 24 y/o software developer based in the Philippines. I love
					building things, shuffling cards, and solving problems. I enjoy
					language design and web development. I mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline font-bold text-blue-700"
					>
						Next.js
					</a>
					, a frontend framework built on top{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline font-bold text-blue-700"
					>
						React
					</a>
					.
				</p>
			</div>
			<div className="flex flex-col space-y-4">
				<p>
					I share cool stuff I'm working on, open source projects, and when I'm
					available for freelance work.
				</p>
				<SubscribeForm />
			</div>
			<div className="flex flex-col space-y-4">
				<span className="font-medium">Projects</span>
				<Projects items={projects} />
			</div>
			<div className="flex flex-col space-y-4">
				<span className="font-medium">Stack</span>
				<Stacks items={stacks} />
			</div>
			<div className="flex flex-col space-y-4">
				<span className="font-medium">Links</span>
				<Links items={links} />
			</div>
		</div>
	);
}
