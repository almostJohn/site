import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { redirect } from "next/navigation";
import { checkAdminAuth } from "@/util/check-admin-auth";

export const metadata: Metadata = {
	title: "Settings",
};

export default async function Page() {
	const isAuthenticated = await checkAdminAuth();

	if (!isAuthenticated) {
		redirect("/login");
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<Header />
			<p className="font-medium text-center">
				Do you really want to log out on your accout?
			</p>
			<LogoutButton />
		</div>
	);
}

function Header() {
	return (
		<div className="flex items-center justify-center font-medium mb-4">
			<Link
				href="/admin"
				className="underline-offset-4 underline text-blue-600"
			>
				back to admin dashboard
			</Link>
		</div>
	);
}
