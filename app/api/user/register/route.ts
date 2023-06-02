import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismdb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;
  if (!email || !name || !password)
    return new NextResponse('Missing required info', { status: 400 });

  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
