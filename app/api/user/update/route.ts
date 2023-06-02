import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismdb';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const body = await req.json();
  const { name, email, image, walletAddress } = body;

  try {
    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        email,
        image,
        walletAddress,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(error);
  }
}
