import { TaskSheet } from "../components/Task";
import { FiPlus } from "react-icons/fi";
import { Button } from "../components/ui";
import { ITaskData } from "../_Types";
import { useState } from "react";
import { taskInitialState } from "../store";

export const Home = () => {
  const [newTask, setNewTask] = useState<ITaskData>(taskInitialState);
  console.log(newTask);

  return (
    <div className="flex justify-center">
      <TaskSheet
        data={newTask}
        setData={setNewTask}
        trigger={
          <Button className="flex gap-1 items-center justify-center">
            <FiPlus className="2-6" />
            <p className="">Task</p>
          </Button>
        }
        title="Create New Task"
        description="Create a new task by filling out the form below."
        buttonText="Create Task"
      />
    </div>
  );
};
