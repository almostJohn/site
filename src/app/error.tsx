"use client";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-4">
					<h1 className="text-6xl font-black leading-none md:text-8xl">500</h1>
					<p className="text-xl">error.</p>
				</div>
			</div>
		</div>
	);
}
