import * as React from "react";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
} from "@/components/page-header";
import { DisplayProjects } from "@/components/display/display-projects";

export default function IndexPage() {
	return (
		<PageHeader>
			<PageHeaderBody>
				<PageHeaderHeading>
					<span className="text-blue-600">*</span> intro
				</PageHeaderHeading>
				<PageHeaderDescription>
					{
						"I'm a 24 y/o software developer. I love building things, shuffling cards and solving problems. I enjoy language design and web development."
					}{" "}
					I mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-blue-600 underline underline-offset-4"
					>
						next.js
					</a>
					, a framework built on top{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-blue-600 underline underline-offset-4"
					>
						react
					</a>
					.{" "}
					{
						"If I'm not coding, I'm probably watching anime, working out or playing my guitar."
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
