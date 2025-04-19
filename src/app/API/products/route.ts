import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const limit = url.searchParams.get('limit') || '5';

  const response = await fetch(`http://localhost:3001/dashboard/products?limit=${limit}`);
  const data = await response.json();

  return NextResponse.json(data);
}
