import { Task } from "@prisma/client";
import { TaskCard } from "../components";

const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");

  const tasks = await res.json();

  console.log("www", tasks);

  return tasks;
};

const Home = async () => {
  const tasks = await loadTasks();
  console.log("qq", tasks);
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
