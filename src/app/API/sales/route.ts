import { NextRequest, NextResponse } from 'next/server';

export async function GetSalesTotal() {
  const days =  '7';

  const response = await fetch(`http://localhost:3001/dashboard/total-sales?days=${days}`);
  const data = await response.json();
   console.log(data);
   console.log('url  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
  return NextResponse.json(data);
}
