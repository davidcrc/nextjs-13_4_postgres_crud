import { Task } from "@prisma/client";
import { TaskCard } from "../components";

const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return tasks;
};

const Home = async () => {
  // TODO: this is not taking the updated tasks
  const tasks = await loadTasks();

  return (
    <>
      <div>Tareas</div>
      <div className="grid grid-cols-3 gap-2">
        {tasks.map((task: Task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
