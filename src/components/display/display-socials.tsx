import * as React from "react";
import {
	SiGithub as GitHub,
	SiX as X,
	SiDiscord as Discord,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
	SiLinkedin as LinkedIn,
} from "@icons-pack/react-simple-icons";
import { Mail, ExternalLink } from "lucide-react";

const socialItems = [
	{
		name: "@almostJohn",
		icon: GitHub,
		href: "https://github.com/almostJohn",
	},
	{
		name: "discord",
		icon: Discord,
		href: "https://discord.com/users/996354867708841984",
	},
	{
		name: "discord server",
		icon: Discord,
		href: "https://discord.gg/9GQdZTa7uQ",
	},
	{
		name: ".com/almostJohn1",
		icon: X,
		href: "https://x.com/almostJohn1",
	},
	{
		name: ".com/almostjohn1",
		icon: Instagram,
		href: "https://instagram.com/almostjohn1",
	},
	{
		name: ".com/alsojohn01",
		icon: Facebook,
		href: "https://facebook.com/alsojohn01",
	},
	{
		name: "linkedin",
		icon: LinkedIn,
		href: "https://www.linkedin.com/in/almostjohn/",
	},
	{
		name: "email",
		icon: Mail,
		href: "mailto:garcia.johngale@gmail.com",
	},
];

export function DisplaySocials() {
	return (
		<div className="flex flex-col space-y-4">
			{socialItems.map((item, i) => (
				<a
					key={i}
					href={item.href}
					className="inline-flex items-center justify-between px-6 py-2 h-10 border border-dashed border-neutral-200 rounded bg-transparent font-medium transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:underline underline-offset-4 group"
				>
					<div className="flex flex-1 items-center justify-center gap-2">
						<item.icon className="size-5" />
						{item.name}
					</div>
					<ExternalLink className="size-4 opacity-0 group-hover:opacity-100" />
				</a>
			))}
		</div>
	);
}
