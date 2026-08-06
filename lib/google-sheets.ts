import { google } from "googleapis";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  minutes?: string;
  speakers?: string;
  timeline?: string;
  body: string;
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function createOAuthClient() {
  return new google.auth.OAuth2(
    requiredEnv("GOOGLE_CLIENT_ID"),
    requiredEnv("GOOGLE_CLIENT_SECRET"),
    requiredEnv("GOOGLE_REDIRECT_URI"),
  );
}

export function getAuthUrl() {
  const client = createOAuthClient();
  return client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function exchangeCodeForTokens(code: string) {
  const client = createOAuthClient();
  const { tokens } = await client.getToken(code);
  return tokens;
}

export async function appendContactToSheet(payload: ContactPayload) {
  const client = createOAuthClient();
  client.setCredentials({
    refresh_token: requiredEnv("GOOGLE_REFRESH_TOKEN"),
  });

  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = requiredEnv("GOOGLE_SHEET_ID");
  const range = process.env.GOOGLE_SHEET_RANGE || "Sheet1!A:H";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          payload.name,
          payload.email,
          payload.company || "",
          payload.minutes || "",
          payload.speakers || "",
          payload.timeline || "",
          payload.body,
        ],
      ],
    },
  });
}
