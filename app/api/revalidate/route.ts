import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.REVALIDATE_SECRET ?? "glenn-revalidate";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const tag = req.nextUrl.searchParams.get("tag") ?? "settings";
  revalidateTag(tag, "seconds");

  return NextResponse.json({ revalidated: true, tag, time: new Date().toISOString() });
}
