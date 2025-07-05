"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/util/cn";

export function OtherProject() {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="flex flex-col rounded-b-lg bg-neutral-100 shadow-lg cursor-pointer transition duration-300 hover:scale-110">
			<Image
				src="/tsconfig-project.png"
				alt="tsconfig-project"
				width={500}
				height={200}
				sizes="100vw"
				quality={100}
				priority
				className={cn("w-auto h-auto", isLoaded ? "opacity-100" : "opacity-0")}
				onLoad={() => setIsLoaded(true)}
			/>
			<div className="mt-auto px-6 py-4">
				<div className="flex flex-col space-y-2">
					<span className="text-center text-sm">tsconfig.vercel.app</span>
					<span className="text-base font-medium text-center">WEBSITE</span>
				</div>
			</div>
		</div>
	);
}
