import { TaskItem } from "./TaskItem";
import type { Task, TaskStatus } from "../types";

type Props = {
  tasks: Task[];
  currentUserId: string;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export const TasksList = ({
  tasks,
  currentUserId,
  onDelete,
  onStatusChange,
}: Props) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          currentUserId={currentUserId}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};