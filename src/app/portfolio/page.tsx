import { CV } from "./_components/cv";
import { FeaturedProject } from "./_components/featured-project";
import { OtherProject } from "./_components/other-project";

export const metadata = {
	title: "Portfolio",
};

export default function PortfolioPage() {
	return (
		<div className="mx-auto max-w-6xl px-6 md:px-0">
			<div className="flex flex-col space-y-4 pt-8 pb-16">
				<div className="flex flex-col space-y-2">
					<h1 className="text-6xl font-bold">Portfolio.</h1>
					<p className="text-base">
						Check out some of the projects I&apos;ve worked on and the websites
						I&apos;ve created.
					</p>
				</div>
				<div className="flex flex-col gap-6 mt-6">
					<FeaturedProject />
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 mt-4">
						<OtherProject />
						<CV />
					</div>
				</div>
			</div>
		</div>
	);
}
