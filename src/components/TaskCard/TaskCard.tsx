import React from "react";
import { Task } from "@prisma/client";
import Link from "next/link";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Link href={`/tasks/${task.id}`}>
      <div className="bg-gray-800 px-6 placeholder-opacity-80 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    </Link>
  );
};

export default TaskCard;
