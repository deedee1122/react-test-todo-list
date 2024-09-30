import { TaskSheet } from "../components/Task";
import { FiPlus } from "react-icons/fi";
import { Button } from "../components/ui";
import { ITaskData } from "../_Types";
import { useState } from "react";
import { addTask, taskInitialState, useAppSelector } from "../store";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState<ITaskData>(taskInitialState);

  const createNewTask = () => dispatch(addTask(newTask));

  const store = useAppSelector((state) => state.taskSlice);
  console.log("store", store);

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
        onSubmit={createNewTask}
      />
    </div>
  );
};
