import {
	SiGithub as GitHub,
	SiX as X,
	SiDiscord as Discord,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import { Lanyard } from "@/components/lanyard";

export default function IndexPage() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto flex place-content-center min-h-screen max-w-2xl flex-col px-8 py-16 lg:px-6 lg:py-0">
				<main>
					<section>
						<h1 className="text-6xl font-bold leading-tight">
							Hey, I&apos;m <span className="text-blue-700">John</span>!
						</h1>
						<p className="text-xl font-light">Software Developer</p>
					</section>
					<Lanyard />
				</main>
				<footer>
					<nav className="mt-12 flex gap-4">
						<a
							aria-label="Email"
							href="mailto:garcia.johngale@gmail.com"
							rel="noreferrer"
							target="_blank"
							title="Email"
						>
							<Send aria-hidden />
						</a>
						<a
							aria-label="GitHub"
							href="https://github.com/almostJohn"
							rel="noreferrer"
							target="_blank"
							title="GitHub"
						>
							<GitHub aria-hidden />
						</a>
						<a
							aria-label="Discord"
							href="https://discord.com/users/996354867708841984"
							rel="noreferrer"
							target="_blank"
							title="Discord"
						>
							<Discord aria-hidden />
						</a>
						<a
							aria-label="X"
							href="https://twitter.com/almostJohn1"
							rel="noreferrer"
							target="_blank"
							title="X"
						>
							<X aria-hidden />
						</a>
						<a
							aria-label="Instagram"
							href="https://instagram.com/almostjohn1"
							rel="noreferrer"
							target="_blank"
							title="Instagram"
						>
							<Instagram aria-hidden />
						</a>
						<a
							aria-label="Facebook"
							href="https://facebook.com/alsojohn01"
							rel="noreferrer"
							target="_blank"
							title="Facebook"
						>
							<Facebook aria-hidden />
						</a>
					</nav>
				</footer>
			</div>
		</div>
	);
}
