import * as React from "react";
import Link from "next/link";

export default function AdminPage() {
	return (
		<>
			<div className="pt-8 px-4 pb-12 md:px-8 md:pb-24 lg:pb-32">
				<div className="flex flex-col gap-8 w-[24rem] text-center">
					<p className="font-medium">
						What do you want to do here?{" "}
						<Link
							href="/admin/messages"
							className="underline-offset-4 underline text-blue-600"
						>
							Check my messages
						</Link>{" "}
						or{" "}
						<Link
							href="/admin/settings"
							className="underline underline-offset-4 text-blue-600"
						>
							Change my settings
						</Link>
						.
					</p>
					<Link
						href="/"
						className="underline-offset-4 underline text-blue-600 font-medium"
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</>
	);
}
