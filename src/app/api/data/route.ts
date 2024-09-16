// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Get request received', name: 'Pantu' }, { status: 200 });
}
export async function PUSH() {
  return NextResponse.json({ message: 'Push request received', name: 'Pantu' }, { status: 200 });
}