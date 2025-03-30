import * as React from "react";
import type { Metadata } from "next";
import { Login } from "@/components/login";

export const metadata: Metadata = {
	title: "login",
};

export default function Page() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Login />
		</div>
	);
}
