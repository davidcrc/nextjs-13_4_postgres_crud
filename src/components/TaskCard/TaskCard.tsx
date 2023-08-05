import { Task } from "@prisma/client";
import React from "react";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="bg-gray-800 px-6 placeholder-opacity-80 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
