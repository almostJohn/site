import * as React from "react";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { DisplayProjects } from "@/components/display/display-projects";
import { DisplayLocation } from "@/components/display/display-location";
import { LinkButton } from "@/components/ui/link-button";

export default function IndexPage() {
	return (
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>jhan gale garcia</PageHeaderHeading>
				<DisplayLocation />
				<PageHeaderDescription>
					{
						"i'm a 24 y/o software developer. i love building things, shuffling cards and solving problems. i enjoy language design and web development."
					}{" "}
					i mostly use{" "}
					<LinkButton
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
					>
						next.js
					</LinkButton>
					, a framework built on top{" "}
					<LinkButton href="https://react.dev" rel="noreferrer" target="_blank">
						react
					</LinkButton>
					.{" "}
					{
						"if i'm not coding, i'm probably watching anime, working out or playing my guitar."
					}
				</PageHeaderDescription>
				<PageHeaderHeading className="pt-4">
					<span className="text-blue-600">*</span> projects
				</PageHeaderHeading>
				<DisplayProjects />
			</PageHeaderBody>
		</PageHeader>
	);
}
