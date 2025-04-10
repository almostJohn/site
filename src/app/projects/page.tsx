import * as React from "react";
import type { Metadata } from "next";
import { Projects } from "@/components/display/projects";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export const metadata: Metadata = {
	title: "projects",
};

export default function Page() {
	return (
		<Container>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col space-y-2">
					<Heading.h1>
						<span className="text-sky-500">*</span> projects
					</Heading.h1>
					<Paragraph>
						{"here are some of the projects, i've worked on."}
					</Paragraph>
				</div>
				<Projects path="/projects" />
			</div>
		</Container>
	);
}
