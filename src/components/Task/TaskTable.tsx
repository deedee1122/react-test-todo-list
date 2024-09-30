import { ITaskTable } from "../../_Types";
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

export const TaskTable = ({ data, onEdit, onDelete }: ITaskTable) => {
  return (
    <Table>
      <TableCaption>A list All Task</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Tasks</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="h-[40vh]">
              <div className="text-center text-2xl">No Tasks For now !</div>
            </TableCell>
          </TableRow>
        )}
        {data
          .map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.taskName}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.dueDate.toString()}</TableCell>
              <TableCell>{item.priority}</TableCell>
              <TableCell className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={onEdit}>
                  <LuFileEdit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(item.id)}
                >
                  <LuTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))
          ?.reverse()}
      </TableBody>
    </Table>
  );
};
