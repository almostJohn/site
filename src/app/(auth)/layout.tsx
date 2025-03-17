import * as React from "react";

export default function AuthLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<div className="container flex flex-col max-w-2xl">{children}</div>
		</>
	);
}
