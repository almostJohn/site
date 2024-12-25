import Link from "next/link";

export default async function NotFound() {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-4 space-x-0 items-center justify-center md:flex-row md:space-y-0 md:space-x-6">
					<h1 className="text-5xl font-black leading-none md:text-7xl">404</h1>
					<p className="text-xl">Page Not Found</p>
				</div>
				<Link
					href="/"
					className="text-center text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-700"
				>
					Take Me Back
				</Link>
			</div>
		</div>
	);
}
