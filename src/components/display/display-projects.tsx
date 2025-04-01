import * as React from "react";
import { projects } from "@/util/data";

export function DisplayProjects() {
	return (
		<div className="flex flex-col space-y-4">
			{projects.map((item, i) => (
				<a
					key={i}
					href={item.href}
					rel="noreferrer"
					target="_blank"
					className="flex flex-col space-y-1.5 group"
				>
					<h3 className="text-lg font-medium leading-snug transition-colors group-hover:text-blue-600">
						{item.title}
					</h3>
					<p className="text-balance text-neutral-500">{item.description}</p>
				</a>
			))}
		</div>
	);
}
