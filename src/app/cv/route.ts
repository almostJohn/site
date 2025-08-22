import { NextRequest, NextResponse } from "next/server";

const redirectURL =
	"https://drive.google.com/file/d/1Et3NFPeT1KpXSTW0P8xjIDEn9BxmRAOI/view?usp=drive_link";

export async function GET(_request: NextRequest) {
	return NextResponse.redirect(redirectURL, 302);
}
