import { memo } from "react";
import type { Task,TaskStatus } from "../types";
type Props = {
  task: Task;
  currentUserId: string;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export const TaskItem = memo(({ task, currentUserId, onDelete, onStatusChange }: Props) => {
    const isOwner = currentUserId && task.userId === currentUserId;
    const isAssigned = currentUserId && task.assignedToUserId === currentUserId;
    const handleStatusToggle = () => {
      const nextStatus: TaskStatus = task.status === "todo" ? "in_progress" : task.status === "in_progress"
          ? "done"
          : "todo";
      onStatusChange(task.id, nextStatus);
    };
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h3>{task.title}</h3>

          {task.description && (
            <p style={styles.description}>{task.description}</p>
          )}

          <p style={styles.meta}>
            Assigned to: {task.assignedToUser?.username || "—"}
          </p>
        </div>

        <div style={styles.actions}>
          {isAssigned && (<button onClick={handleStatusToggle}>
            {task.status}
          </button>)}
          {isOwner && (
            <button onClick={() => onDelete(task.id)}>Delete</button>
          )}
        </div>
      </div>
    );
  }
);
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  content: {
    flex: 1,
  },
  description: {
    color: "#666",
    fontSize: "14px",
  },
  meta: {
    fontSize: "12px",
    color: "#999",
  },
  actions: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
};