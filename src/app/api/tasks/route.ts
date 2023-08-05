import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export function POST(resquest: NextRequest) {
  return NextResponse.json({
    message: "creando tarea",
  });
}
