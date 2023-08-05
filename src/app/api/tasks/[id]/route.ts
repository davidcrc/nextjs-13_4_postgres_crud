import { NextRequest, NextResponse } from "next/server";
import { TaskParams } from "@/types";
import { prisma } from "@/libs/prisma";

export async function GET(resquest: NextRequest, { params }: TaskParams) {
  const tasks = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(tasks);
}

export function DELETE(resquest: NextRequest, { params }: TaskParams) {
  return NextResponse.json({
    message: "eliminando tarea",
  });
}

export function PUT(resquest: NextRequest, { params }: TaskParams) {
  return NextResponse.json({
    message: "actualizando tarea",
  });
}
