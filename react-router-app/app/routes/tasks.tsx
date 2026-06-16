import { data, useLoaderData } from "react-router";
import type { Task } from "./types";
import { prisma } from "~/db.server";
export async function loader() {
  const tasks = await prisma.task.findMany({
    include: { assignedToUser: { select: { username: true } } },
    orderBy: { createdAt: 'desc' },
  });
  return data({ tasks });
}

export default function TasksPage() {
  const { tasks } = useLoaderData<typeof loader>();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Board (React Router v7 SSR)</h1>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}