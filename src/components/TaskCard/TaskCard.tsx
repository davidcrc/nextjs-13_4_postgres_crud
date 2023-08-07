import React from "react";
import { Task } from "@prisma/client";
import Link from "next/link";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Link href={`/tasks/${task.id}`}>
      <div className="bg-gray-800 p-10 opacity-80 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h3 className="text-2xl font-bold ">{task.title}</h3>
        <p className="text-salte-300">{task.description}</p>
        <p className="text-salte-400 my-2">
          <span className="mr-1">Created Ad:</span>
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default TaskCard;
