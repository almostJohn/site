export function CV() {
	return (
		<a
			href="/garciajohngale-cv.pdf"
			rel="noreferrer"
			target="_blank"
			className="flex px-6 py-4 items-center justify-center rounded-lg shadow-lg bg-neutral-100 cursor-pointer transition duration-300 ease-in-out hover:scale-110 group"
		>
			<div className="flex flex-col space-y-2">
				<span className="text-center text-sm font-medium">
					Looking for my CV?
				</span>
				<div className="inline-flex items-center justify-center h-10 px-4 py-2 border-2 border-neutral-800 bg-transparent transition-colors group-hover:text-neutral-800/80">
					Curriculum Vitae
				</div>
			</div>
		</a>
	);
}
