"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/util/cn";

const technologiesItems = ["Next.js", "React", "Tailwind CSS", "Postgres"];

export function FeaturedProject() {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="flex flex-col gap-5 items-center justify-center md:flex-row">
			<div className="flex items-center">
				<Image
					src="/syntra-project.png"
					alt="syntra-project"
					width={500}
					height={200}
					sizes="100vw"
					priority
					quality={100}
					className={cn(
						"rounded-lg cursor-pointer transition duration-300 ease-in-out hover:scale-110",
						isLoaded ? "opacity-100" : "opacity-0",
					)}
					onLoad={() => setIsLoaded(true)}
				/>
			</div>
			<div className="max-w-xl flex flex-col gap-4 md:ml-8">
				<h3 className="text-3xl font-bold text-center md:text-left">
					Syntra Site
				</h3>
				<p className="text-center md:text-left">
					Syntra helps you stay on top of your personal tasks using a simple and
					effective Kanban-style workflow. Plan, prioritize, and complete your
					work—all in one place.
				</p>
				<div className="flex flex-col space-y-2">
					<span className="font-medium">Technologies Used</span>
					<div className="flex flex-wrap items-center space-x-4">
						{technologiesItems.map((item, index) => (
							<div
								key={index}
								className="inline-flex items-center justify-center px-2 py-1 rounded-sm bg-neutral-200 text-xs font-medium"
							>
								{item}
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center w-full mt-4 md:w-auto md:justify-end">
					<Link
						href="https://syntra-site.vercel.app"
						rel="noreferrer"
						target="_blank"
						className="inline-flex items-center justify-center px-4 py-2 h-9 w-full md:w-auto border-2 border-neutral-800 bg-transparent transition-colors hover:bg-neutral-800 hover:text-neutral-100"
					>
						Visit Website
					</Link>
				</div>
			</div>
		</div>
	);
}
