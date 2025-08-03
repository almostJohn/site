import { ArrowUpRight } from "lucide-react";

export function CV() {
	return (
		<a
			href="https://drive.google.com/file/d/1queDVnW3_HCq1m67b4v50_xKhThbpkHO/view?usp=drive_link"
			rel="noreferrer"
			target="_blank"
			className="flex items-center justify-between py-0.5 text-neutral-500 transition-all hover:bg-neutral-200 hover:text-neutral-800"
		>
			<div className="flex items-center">
				<h3 className="font-medium">curriculum vitae (CV)</h3>
			</div>
			<div className="flex items-center">
				<ArrowUpRight className="size-4 shrink-0" />
			</div>
		</a>
	);
}
