import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForTokens } from "../../../../lib/google-sheets";

export async function GET(request: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ALLOW_GOOGLE_OAUTH_SETUP !== "true"
  ) {
    return NextResponse.json(
      { error: "Google OAuth setup is disabled in production." },
      { status: 403 },
    );
  }

  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json(
      { error: "Missing OAuth code. Start again at /api/google/auth" },
      { status: 400 },
    );
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    const refreshToken = tokens.refresh_token;

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Google Sheets connected</title>
    <style>
      body { font-family: system-ui, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 16px; color: #062858; }
      code, pre { background: #e8f2f2; padding: 2px 6px; border-radius: 6px; }
      pre { padding: 16px; overflow-x: auto; white-space: pre-wrap; word-break: break-all; }
      .ok { color: #047b7f; font-weight: 700; }
      .warn { color: #a6733a; }
    </style>
  </head>
  <body>
    <h1 class="ok">Google authorization complete</h1>
    ${
      refreshToken
        ? `<p>Copy this refresh token into <code>.env.local</code> as <code>GOOGLE_REFRESH_TOKEN</code>:</p>
           <pre>${refreshToken}</pre>`
        : `<p class="warn">No refresh token returned. Revoke app access at
           <a href="https://myaccount.google.com/permissions">Google Account permissions</a>,
           then visit <code>/api/google/auth</code> again with <code>prompt=consent</code>.</p>`
    }
    <p>Also set <code>GOOGLE_SHEET_ID</code> to your spreadsheet ID, then restart <code>npm run dev</code>.</p>
    <p>Sheet headers (row 1): Timestamp, Name, Email, Company, Minutes, Speakers, Timeline, Details</p>
  </body>
</html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to exchange OAuth code.",
      },
      { status: 500 },
    );
  }
}
