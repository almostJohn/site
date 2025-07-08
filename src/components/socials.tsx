import { ArrowUpRight } from "lucide-react";

type Social = {
	title: string;
	href: string;
};

type SocialProps = {
	socials: Social[];
};

export function Socials({ socials }: SocialProps) {
	return (
		<div className="flex flex-wrap items-center gap-3">
			{socials.map((social) => (
				<a
					key={social.title}
					href={social.href}
					rel="noreferrer"
					target="_blank"
					className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-800"
				>
					<span className="underline">{social.title}</span>
					<ArrowUpRight className="size-4 shrink-0" />
				</a>
			))}
		</div>
	);
}
