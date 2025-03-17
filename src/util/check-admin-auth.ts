import "server-only";
import { cookies } from "next/headers";

export async function checkAdminAuth(): Promise<boolean> {
	const session = (await cookies()).get("admin_session");

	return !!session?.value;
}
