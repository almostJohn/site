import { NextRequest, NextResponse } from "next/server";

const redirectURL =
	"https://drive.google.com/file/d/1jSx6DT2kDioET75mubSfBIDu3WNOQWpC/view?usp=drive_link";

export async function GET(_request: NextRequest) {
	return NextResponse.redirect(redirectURL, 302);
}
