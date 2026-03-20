import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Validate required env var
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const body = await req.json();
    const { leadName, leadEmail, leadPhone, intent } = body;

    // Basic input validation
    if (!leadName || !leadEmail || !intent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sanitize inputs (strip HTML tags)
    const sanitize = (s: string) => String(s).replace(/<[^>]*>/g, "").slice(0, 500);

    const data = await resend.emails.send({
      from: 'ERGO Advisor <noreply@mourad-versicherung.de>',
      to: ['mourad@labadi-beratung.de'],
      replyTo: sanitize(leadEmail),
      subject: `New Lead: ${sanitize(intent)} — ${sanitize(leadName)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#0A1628">New Consultation Request</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold;color:#0A1628">Name:</td><td>${sanitize(leadName)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#0A1628">Email:</td><td>${sanitize(leadEmail)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#0A1628">Phone:</td><td>${sanitize(leadPhone || 'Not provided')}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#0A1628">Topic:</td><td>${sanitize(intent)}</td></tr>
          </table>
          <hr style="margin:24px 0;border:1px solid #e2e8f0"/>
          <p style="color:#64748b;font-size:12px">Sent via ERGO Advisor website</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
