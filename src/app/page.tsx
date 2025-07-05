import Link from "next/link";

export default function HomePage() {
	return (
		<div className="mx-auto max-w-6xl px-6 md:px-0">
			<div className="pt-16 md:pt-24">
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col space-y-4 pt-5">
						<h1 className="text-7xl font-bold leading-none tracking-tighter">
							Hey, I&apos;m <span className="text-sky-500">John</span>!
						</h1>
						<p className="text-left text-lg max-w-xl">
							I&apos;m a 24 year old <strong>software developer</strong> based
							in the Philippines. I love <strong>building things</strong>,{" "}
							<strong>shuffling cards</strong>, and{" "}
							<strong>solving problems</strong>. I enjoy{" "}
							<strong>language design</strong> and{" "}
							<strong>web development</strong>. I mostly use{" "}
							<Link
								href="https://nextjs.org"
								rel="noreferrer"
								target="_blank"
								className="font-bold underline underline-offset-2 decoration-neutral-500 transition-colors hover:decoration-neutral-800"
							>
								Next.js
							</Link>
							, a <strong>frontend framework</strong> built on top{" "}
							<Link
								href="https://react/dev"
								rel="noreferrer"
								target="_blank"
								className="font-bold underline underline-offset-2 decoration-neutral-500 transition-colors hover:decoration-neutral-800"
							>
								React
							</Link>
							. Get in touch with me via my <strong>socials</strong> below or
							check out my <strong>portfolio</strong>.
						</p>
						<div className="flex flex-col gap-3 w-full md:flex-row md:items-center md:w-auto">
							<Link
								href="/portfolio"
								className="inline-flex items-center justify-center px-4 py-2 w-full md:w-auto bg-neutral-800 text-neutral-100 h-10 transition-colors hover:bg-neutral-800/80"
							>
								View Portfolio
							</Link>
							<Link
								href="/contact"
								className="inline-flex items-center justify-center px-4 py-2 w-full md:w-auto border-2 border-neutral-800 bg-transparent h-10 transition-colors hover:bg-neutral-200"
							>
								Contact Me
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
