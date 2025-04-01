import * as React from "react";
import { socials } from "@/util/data";

export function DisplaySocials() {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			{socials.map((item, i) => (
				<a
					key={i}
					href={item.href}
					rel="noreferrer"
					target="_blank"
					className="inline-flex items-center justify-between px-4 py-2 gap-2 h-10 border border-dashed border-neutral-200 rounded bg-transparent font-medium transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:underline underline-offset-4"
				>
					<item.icon className="size-5" />
					{item.name}
				</a>
			))}
		</div>
	);
}
