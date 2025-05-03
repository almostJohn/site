export function Name() {
	return (
		<h1 className="font-medium cursor-pointer pt-12">
			<span className="sr-only">John Gale Garcia</span>
			<span aria-hidden={true} className="block overflow-hidden group relative">
				<span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
					{"John Gale Garcia".split("").map((letter, index) => (
						<span
							key={index}
							className="inline-block"
							style={{ transitionDelay: `${index * 25}ms` }}
						>
							{letter === " " ? "\u00A0" : letter}
						</span>
					))}
				</span>
				<span className="inline-block transition-all absolute left-0 top-0 duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
					{"almostjohn".split("").map((letter, index) => (
						<span
							key={index}
							className="inline-block"
							style={{ transitionDelay: `${index * 25}ms` }}
						>
							{letter}
						</span>
					))}
				</span>
			</span>
		</h1>
	);
}
