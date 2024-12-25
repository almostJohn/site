"use client";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-4 space-x-0 items-center justify-center md:flex-row md:space-y-0 md:space-x-6">
					<h1 className="text-5xl font-black leading-none md:text-7xl">500</h1>
					<p className="text-xl">Error</p>
				</div>
			</div>
		</div>
	);
}
