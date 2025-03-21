import * as React from "react";

export default function AuthLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<div className="container max-w-3xl flex flex-col">{children}</div>
		</>
	);
}
