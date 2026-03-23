import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const secret = process.env.ADMIN_API_SECRET;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const body = await req.json();

  const res = await fetch(`${backendUrl}/admin/gyms/suggestions/${params.id}/reject`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
