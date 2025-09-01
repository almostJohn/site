import { NextRequest, NextResponse } from "next/server";

const redirectURL =
	"https://drive.google.com/file/d/1pNNdFKtTtu2MrmIJAMz1q6pEsXxe5noC/view?usp=drive_link";

export async function GET(_request: NextRequest) {
	return NextResponse.redirect(redirectURL, 302);
}
