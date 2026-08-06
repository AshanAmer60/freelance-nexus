import { NextResponse } from "next/server";
import { getAuthUrl } from "@/lib/google-sheets";

export async function GET() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ALLOW_GOOGLE_OAUTH_SETUP !== "true"
  ) {
    return NextResponse.json(
      { error: "Google OAuth setup is disabled in production." },
      { status: 403 },
    );
  }

  try {
    const url = getAuthUrl();
    return NextResponse.redirect(url);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to start Google OAuth.",
      },
      { status: 500 },
    );
  }
}
