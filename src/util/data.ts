import {
	SiGithub as GitHub,
	SiX as X,
	SiDiscord as Discord,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
	SiLinkedin as LinkedIn,
} from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

export const projects = [
	{
		title: "next-djs-framework",
		href: "https://djs-fwk.vercel.app",
		description: "a framework for building discord bot the fastest way.",
	},
	{
		title: "next-tsconfig",
		href: "https://tscfg.vercel.app",
		description:
			"a typescript configuration that you can copy and paste into your projects.",
	},
	{
		title: "next-simplynote",
		href: "https://simplynote.vercel.app",
		description: "take notes with ease.",
	},
	{
		title: "pochita",
		href: "https://github.com/almostJohn/pochita",
		description: "pochita the discord bot.",
	},
];

export const socials = [
	{
		name: "@almostJohn",
		icon: GitHub,
		href: "https://github.com/almostJohn",
	},
	{
		name: "almostjohn",
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

export const terms = [
	{
		title: "respectful communication",
		content:
			"you agree to communicate respectfully and refrain from sending any harmful, harassing, offensive, or illegal content.",
	},
	{
		title: "no spam or unsolicited promotions",
		content:
			"you may not use the messaging feature to send spam, advertisements, or any unsolicited promotional content.",
	},
	{
		title: "privacy & confidentiality",
		content:
			"while I respect your privacy, i cannot guarantee the security of messages. Do not share sensitive or personal information.",
	},
	{
		title: "no liability",
		content:
			"i am not responsible for any consequences resulting from the use of this messaging feature, including any misunderstandings or miscommunications.",
	},
	{
		title: "right to refuse or block messages",
		content:
			"i reserve the right to refuse, delete, or block any messages that violate these terms or are deemed inappropriate.",
	},
];

export type Projects = typeof projects;
export type Socials = typeof socials;
