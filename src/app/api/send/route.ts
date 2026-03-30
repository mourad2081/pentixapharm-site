import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Contact form submission:", body);
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({error:"Bad request"},{status:400}); }
}
