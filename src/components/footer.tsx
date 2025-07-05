import Link from "next/link";
import { Icons } from "./icons";

export function Footer() {
	return (
		<footer className="w-full bottom-0 pt-14 pb-10 md:pt-24">
			<div className="mx-auto max-w-6xl px-6 md:px-0 flex flex-col items-center md:flex-row md:justify-between">
				<div className="flex items-center gap-4">
					<Link
						href="mailto:garcia.johngale@gmail.com"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.send className="size-8 shrink-0" />
					</Link>
					<Link
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.github className="size-8 shrink-0" />
					</Link>
					<Link
						href="https://discord.com/users/996354867708841984"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.discord className="size-8 shrink-0" />
					</Link>
					<Link
						href="https://twitter.com/almostJohn1"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.twitter className="size-8 shrink-0" />
					</Link>
					<Link
						href="https://facebook.com/alsojohn01"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.facebook className="size-8 shrink-0" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/almostjohn"
						rel="noreferrer"
						target="_blank"
					>
						<Icons.linkedin className="size-8 shrink-0" />
					</Link>
				</div>
				<div className="flex items-center justify-center md:justify-end mt-3 md:mt-0">
					<p className="text-neutral-500">
						&copy; {new Date().getFullYear()} almostJohn
					</p>
				</div>
			</div>
		</footer>
	);
}
