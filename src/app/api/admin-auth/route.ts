import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) return NextResponse.json({error:"Server misconfigured"},{status:500});
    if (password === adminPassword) return NextResponse.json({ok:true});
    await new Promise(r=>setTimeout(r,600));
    return NextResponse.json({error:"Unauthorized"},{status:401});
  } catch { return NextResponse.json({error:"Bad request"},{status:400}); }
}
