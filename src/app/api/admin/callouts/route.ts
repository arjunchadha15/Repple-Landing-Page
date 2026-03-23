import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const secret = process.env.ADMIN_API_SECRET;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${backendUrl}/admin/callouts?status=admin_review_requested`, {
    headers: { Authorization: `Bearer ${secret}` },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
