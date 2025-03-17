"use client";

import * as React from "react";
import { logoutAdmin } from "@/app/(auth)/login/actions";
import { useRouter } from "next/navigation";

export function LogoutButton() {
	const router = useRouter();

	async function handleLogout() {
		await logoutAdmin();
		router.push("/login");
	}

	return (
		<button
			className="inline-flex items-center justify-center rounded-none px-4 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
			onClick={handleLogout}
		>
			Log out
		</button>
	);
}
