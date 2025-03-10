import * as React from "react";

export default async function NotFound() {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-4 justify-center items-center">
					<h1 className="text-6xl font-black leading-none md:text-8xl">404</h1>
					<p className="text-xl">not found.</p>
				</div>
			</div>
		</div>
	);
}
