import React, { useState } from "react";
import { ITaskData, ITaskTable } from "../../_Types";
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { LuTrash, LuFileEdit } from "react-icons/lu";
import { TaskSheet } from "./TaskSheet";

export const TaskTable: React.FC<ITaskTable> = ({ data, onEdit, onDelete }) => {
  const [editingTasks, setEditingTasks] = useState<{
    [key: string]: ITaskData;
  }>({});

  const handleEditStart = (task: ITaskData) => {
    setEditingTasks((prev) => ({ ...prev, [task.id]: { ...task } }));
  };

  const handleEditChange = (id: string, updatedTask: ITaskData) => {
    setEditingTasks((prev) => ({ ...prev, [id]: updatedTask }));
  };

  const handleEditSubmit = (id: string) => {
    if (editingTasks[id]) {
      onEdit(editingTasks[id]);
      setEditingTasks((prev) => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    }
  };

  const renderTaskRow = (item: ITaskData) => (
    <TableRow key={item.id}>
      <TableCell className="font-medium">{item.taskName}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>{new Date(item.dueDate).toLocaleDateString()}</TableCell>
      <TableCell>{item.priority}</TableCell>
      <TableCell className="flex justify-end">
        <TaskSheet
          data={editingTasks[item.id] || item}
          setData={(updatedTask) => handleEditChange(item.id, updatedTask)}
          trigger={
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleEditStart(item)}
            >
              <LuFileEdit className="w-4 h-4" />
            </Button>
          }
          title="Edit Task"
          description="Please edit the task details below, then click the update button."
          buttonText="Update Task"
          onSubmit={() => handleEditSubmit(item.id)}
        />
        <Button variant="ghost" size="icon" onClick={() => onDelete(item.id)}>
          <LuTrash className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );

  const renderEmptyState = () => (
    <TableRow>
      <TableCell colSpan={5} className="h-[40vh]">
        <div className="text-center text-2xl">No Tasks For now!</div>
      </TableCell>
    </TableRow>
  );

  return (
    <Table>
      <TableCaption>A list of All Tasks</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Tasks</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0
          ? renderEmptyState()
          : [...data].reverse().map(renderTaskRow)}
      </TableBody>
    </Table>
  );
};
