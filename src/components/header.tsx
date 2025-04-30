import Link from "next/link";

export function Header() {
	return (
		<div className="mx-auto max-w-3xl flex items-center gap-2 font-medium">
			<Link href="/" className="underline-offset-4 underline text-blue-700">
				almostjohn
			</Link>
			/
			<a
				href="https://x.com/almostJohn1"
				rel="noreferrer"
				target="_blank"
				className="underline-offset-4 underline text-blue-700"
			>
				twitter
			</a>
			/
			<a
				href="https://github.com/almostJohn"
				rel="noreferrer"
				target="_blank"
				className="underline-offset-4 underline text-blue-700"
			>
				github
			</a>
		</div>
	);
}
