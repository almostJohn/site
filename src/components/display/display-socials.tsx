import * as React from "react";
import { socials } from "@/util/data";
import { LinkButton } from "../ui/link-button";

export function DisplaySocials() {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			{socials.map((item, i) => (
				<LinkButton
					key={i}
					href={item.href}
					rel="noreferrer"
					target="_blank"
					variant="primary"
				>
					<item.icon className="size-5" />
					{item.name}
				</LinkButton>
			))}
		</div>
	);
}
