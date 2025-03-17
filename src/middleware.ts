import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/admin", "/admin/messages", "/admin/settings"];

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const isProtectedRoute = PROTECTED_ROUTES.some(
		(route) => path === route || path.startsWith(`${route}/`),
	);

	if (isProtectedRoute) {
		const isAuthenticated = checkAuthentication(request);

		if (!isAuthenticated) {
			const from = encodeURIComponent(request.nextUrl.pathname);
			return NextResponse.redirect(new URL(`/login?from=${from}`, request.url));
		}
	}

	return NextResponse.next();
}

function checkAuthentication(request: NextRequest) {
	const sessionCookie = request.cookies.get("admin_session")?.value;

	return !!sessionCookie;
}

export const config = {
	matcher: ["/admin/:path*"],
};
