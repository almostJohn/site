import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/admin", "/admin/messages", "/admin/settings"];
const DEFAULT_REDIRECT = "/admin";

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isAuthenticated = checkAuthentication(request);

	if (path === "/login" && isAuthenticated) {
		const fromParam = request.nextUrl.searchParams.get("from");
		const redirectTo = fromParam
			? decodeURIComponent(fromParam)
			: DEFAULT_REDIRECT;
		return NextResponse.redirect(new URL(redirectTo, request.url));
	}

	const isProtectedRoute = PROTECTED_ROUTES.some(
		(route) => path === route || path.startsWith(`${route}/`),
	);

	if (isProtectedRoute && !isAuthenticated) {
		const from = encodeURIComponent(request.nextUrl.pathname);
		return NextResponse.redirect(new URL(`/login?from=${from}`, request.url));
	}

	return NextResponse.next();
}

function checkAuthentication(request: NextRequest) {
	const sessionCookie = request.cookies.get("admin_session")?.value;

	return !!sessionCookie;
}

export const config = {
	matcher: ["/admin/:path*", "/login"],
};
