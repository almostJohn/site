import * as React from "react";
import { Projects } from "@/components/display/projects";
import { Links } from "@/components/display/links";
import { Container } from "@/components/ui/container";
import { Main } from "@/components/display/main";

export default function Home() {
	return (
		<Container>
			<div className="flex flex-col gap-10">
				<Main />
				<Projects />
				<Links />
			</div>
		</Container>
	);
}
