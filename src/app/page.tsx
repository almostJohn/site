import { Header } from "@/components/header";
import { SubscribeForm } from "@/components/subscribe-form";

export default function Homepage() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="container flex flex-col w-full gap-10">
				<Header />
				<p className="text-balance text-center">
					i&apos;m a 24 y/o software developer based in the philippines. i love
					building things, shuffling cards, and solving problems. i enjoy
					language design and web development. i mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="underline underline-offset-4 font-medium text-blue-700"
					>
						next.js
					</a>
					, a frontend framework built on top{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="underline underline-offset-4 font-medium text-blue-700"
					>
						react
					</a>
					.
				</p>
				<div className="mx-auto flex flex-col space-y-3">
					<p className="text-center text-balance">
						i share cool stuff i&apos;m working on, open source projects, and
						when i&apos;m available for freelance work.
					</p>
					<SubscribeForm />
				</div>
				<p className="mx-auto max-w-sm text-center">
					if you&apos;re looking for my projects, you can find it{" "}
					<a
						href="https://github.com/almostJohn?tab=repositories"
						rel="noreferrer"
						target="_blank"
						className="font-medium underline-offset-4 underline text-blue-700"
					>
						here
					</a>
					.
				</p>
			</div>
		</div>
	);
}
