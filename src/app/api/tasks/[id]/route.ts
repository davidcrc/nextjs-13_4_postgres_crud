import { NextRequest, NextResponse } from "next/server";
import { TaskParams } from "@/types";
import { prisma } from "@/libs/prisma";
import { Task } from "@prisma/client";

export async function GET(resquest: NextRequest, { params }: TaskParams) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!task) {
      return NextResponse.json("Task not found", { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}

export async function DELETE(resquest: NextRequest, { params }: TaskParams) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!task) {
      return NextResponse.json("Task not found", { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}

export async function PUT(resquest: NextRequest, { params }: TaskParams) {
  const data = await resquest.json();

  try {
    const task = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: data.title,
        description: data.description,
      },
    });

    if (!task) {
      return NextResponse.json("Task not found", { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
