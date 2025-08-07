import { NextRequest, NextResponse } from "next/server";

const redirectURL =
	"https://drive.google.com/file/d/1GrexaaicTb6rZAKou64s9-s776uN0ppq/view?usp=drive_link";

export async function GET(_request: NextRequest) {
	return NextResponse.redirect(redirectURL, 302);
}
