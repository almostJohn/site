import * as React from "react";

export default function AuthLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<div>{children}</div>
		</>
	);
}
