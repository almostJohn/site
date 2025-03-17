import * as React from "react";
import Link from "next/link";

export function AdminNav() {
	return (
		<header className="top-0 w-full mt-6">
			<div className="flex items-center justify-center gap-2 font-medium">
				<Link href="/" className="underline-offset-4 underline text-blue-600">
					almostjohn
				</Link>
				/
				<Link
					href="/admin/messages"
					className="underline-offset-4 underline text-blue-600"
				>
					messages
				</Link>
				/
				<Link
					href="/admin/settings"
					className="underline-offset-4 underline text-blue-600"
				>
					settings
				</Link>
			</div>
		</header>
	);
}
