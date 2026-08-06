import { NextRequest, NextResponse } from "next/server";
import {
  appendContactToSheet,
  type ContactPayload,
} from "../../../lib/google-sheets";

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Honeypot — bots fill this; humans should not.
    if (asString(formData.get("website"))) {
      return NextResponse.json({ ok: true });
    }

    const payload: ContactPayload = {
      name: asString(formData.get("name")),
      email: asString(formData.get("email")),
      company: asString(formData.get("company")),
      minutes: asString(formData.get("minutes")),
      speakers: asString(formData.get("speakers")),
      timeline: asString(formData.get("timeline")),
      body: asString(formData.get("body")),
    };

    if (!payload.name || !payload.email || !payload.body) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await appendContactToSheet(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to save your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
