// app/api/hello/route.js

import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify({time: new Date().toLocaleTimeString() }));
}
