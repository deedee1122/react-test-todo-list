import { useState } from "react";
import { TaskSheet, TaskTable } from "../components/Task";
import { FiPlus } from "react-icons/fi";
import { Button, ScrollArea } from "../components/ui";
import { ITaskData } from "../_Types";
import {
  addTask,
  removeOneTask,
  taskInitialState,
  updateTask,
  useAppSelector,
} from "../store";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState<ITaskData>(taskInitialState());

  const createNewTask = () => {
    dispatch(addTask(newTask));
    setNewTask(taskInitialState());
  };
  const deleteOneTask = (id: string) => dispatch(removeOneTask(id));
  const editOneTask = (data: ITaskData) => dispatch(updateTask(data));
  const TaskData = useAppSelector((state) => state.taskSlice.tasks);

  return (
    <div className="">
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
      <ScrollArea className="h-[75vh] w-full rounded-md border my-4 px-5 pt-2 pb-3">
        <div className="h-[75vh]">
          <TaskTable
            data={TaskData}
            onDelete={deleteOneTask}
            onEdit={editOneTask}
          />
        </div>
      </ScrollArea>
    </div>
  );
};
