import * as React from "react";
import type { Metadata } from "next";
import { Projects } from "@/components/display/projects";

export const metadata: Metadata = {
	title: "projects",
};

export default function Page() {
	return (
		<div className="w-full py-16 px-4 md:px-6">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col space-y-4">
					<h1 className="text-4xl font-bold">
						<span className="text-sky-500">*</span> projects
					</h1>
					<p className="text-neutral-400">
						{"here are some of the projects, i've worked on."}
					</p>
				</div>
				<Projects path="/projects" />
			</div>
		</div>
	);
}
