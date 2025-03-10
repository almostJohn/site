export const siteConfig = {
	social: {
		email: "mailto:garcia.johngale@gmail.com",
		github: "https://github.com/almostJohn",
		twitter: "https://x.com/almostJohn1",
		linkedin: "https://www.linkedin.com/in/almostjohn/",
		discord: "https://discord.com/users/996354867708841984",
	},
	navLinks: [
		{
			title: "home",
			href: "/",
		},
		{
			title: "projects",
			href: "/projects",
		},
	],
	projects: [
		{
			title: "next-djs-framework",
			description: "a framework for building discord bot the fastest way.",
			href: "https://djs-fwk.vercel.app",
			technologies: [
				{
					label: "typescript",
				},
				{
					label: "next.js",
				},
				{
					label: "discord.js",
				},
				{
					label: "tailwindcss",
				},
			],
		},
		{
			title: "next-tsconfig",
			description:
				"a typescript configuration that you can copy and paste into your projects.",
			href: "https://tscfg.vercel.app",
			technologies: [
				{
					label: "typescript",
				},
				{
					label: "next.js",
				},
				{
					label: "tailwindcss",
				},
			],
		},
		{
			title: "next-simply-note",
			description: "take notes with ease.",
			href: "https://simplynote.vercel.app",
			technologies: [
				{
					label: "typescript",
				},
				{
					label: "next.js",
				},
				{
					label: "web-storage-api",
				},
				{
					label: "tailwindcss",
				},
			],
		},
		{
			title: "makima",
			description: "makima the discord bot",
			href: "https://github.com/almostJohn/makima",
			technologies: [
				{
					label: "javascript",
				},
				{
					label: "discord.js",
				},
				{
					label: "sqlite",
				},
				{
					label: "sequelize",
				},
			],
		},
	],
};

export type SiteConfig = typeof siteConfig;
