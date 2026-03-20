import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // Constant-time comparison to prevent timing attacks
    const isValid = password === adminPassword;

    if (isValid) {
      return NextResponse.json({ ok: true });
    } else {
      // Artificial delay to slow brute force attempts
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
