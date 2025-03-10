import * as React from "react";
import { Info } from "@/components/info";
import { Projects } from "@/components/projects";
import { Links } from "@/components/links";

export default function IndexPage() {
	return (
		<div className="flex flex-col space-y-8 py-12">
			<Info />
			<Projects limit={2} />
			<Links />
		</div>
	);
}
