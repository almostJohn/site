import * as React from "react";
import type { Metadata } from "next";
import { Login } from "@/components/login";

export const metadata: Metadata = {
	title: "Admin login",
};

export default function LoginPage() {
	return (
		<div className="pt-8 px-4 pb-12 md:px-8 md:pb-24 lg:pb-32">
			<Login />
		</div>
	);
}
