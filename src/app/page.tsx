import Link from "next/link";
import { Projects } from "@/components/projects";
import { CV } from "@/components/cv";
import { Socials } from "@/components/socials";

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

const socials = [
	{
		title: "email",
		href: "mailto:garcia.johngale@gmail.com",
	},
	{
		title: "buy me a coffee",
		href: "https://ko-fi.com/almostjohn",
	},
	{
		title: "github",
		href: "https://github.com/almostJohn",
	},
	{
		title: "discord",
		href: "https://discord.com/users/996354867708841984",
	},
	{
		title: "x.com",
		href: "https://x.com/almostJohn1",
	},
	{
		title: "instagram",
		href: "https://instagram.com/almostjohn1",
	},
	{
		title: "facebook",
		href: "https://facebook.com/alsojohn01",
	},
	{
		title: "linkedin",
		href: "https://www.linkedin.com/in/almostjohn",
	},
];

export default function HomePage() {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col space-y-4">
				<h3 className="font-bold">Hey, I&apos;m John 👋</h3>
				<p className="text-balance">
					I&apos;m a 24 year old <strong>software developer</strong> based in
					the Philippines. I love <strong>building things</strong>,{" "}
					<strong>shuffling cards</strong>, and{" "}
					<strong>solving problems</strong>. I love{" "}
					<strong>language design</strong>, and <strong>web development</strong>
					. I mostly use{" "}
					<Link
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="font-bold underline underline-offset-2 decoration-neutral-400 transition-colors hover:decoration-neutral-800"
					>
						Next.js
					</Link>
					, a frontend framework built with{" "}
					<Link
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="font-bold underline underline-offset-2 decoration-neutral-400 transition-colors hover:decoration-neutral-800"
					>
						React
					</Link>
					.
				</p>
			</div>
			<div className="flex flex-col space-y-4">
				<h3 className="font-bold">projects</h3>
				<Projects projects={projects} />
			</div>
			<div className="flex flex-col space-y-4">
				<h3 className="font-bold">looking for my CV?</h3>
				<CV />
			</div>
			<div className="flex flex-col space-y-4">
				<h3 className="font-bold">social media</h3>
				<Socials socials={socials} />
			</div>
		</div>
	);
}
