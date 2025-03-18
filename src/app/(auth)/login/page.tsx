import * as React from "react";
import type { Metadata } from "next";
import { Login } from "@/components/login";

export const metadata: Metadata = {
	title: "Admin login",
};

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Login />
		</div>
	);
}
