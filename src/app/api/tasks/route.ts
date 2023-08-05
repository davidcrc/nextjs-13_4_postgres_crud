import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export async function POST(resquest: NextRequest) {
  const data = await resquest.json();

  try {
    const task = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
