import {
  findTasksByUser,
  createTaskRepo,
  deleteTaskRepo,
  findTaskById,
  updateTaskStatusRepo,
} from '../repositories/task.repository';
import { findUserByUsername } from '../repositories/auth.repository';
import { TaskStatus } from '../generated/prisma/client.js';
export const getTasks = async (userId: string) => {
  return findTasksByUser(userId);
};
export const createTask = async (
  userId: string,
  data: {
    title: string;
    description?: string;
    assignedTo?: string;
  },
) => {
  if (!data.title || !data.assignedTo) {
    throw new Error('Title and assignedTo required');
  }
  const assignedUser = await findUserByUsername(data.assignedTo);
  if (!assignedUser) {
    throw new Error('Assigned user not found');
  }
  return createTaskRepo({
    title: data.title,
    description: data.description,
    userId,
    assignedToUserId: assignedUser.id,
  });
};
export const deleteTask = async (userId: string, taskId: string) => {
  const task = await findTaskById(taskId);

  if (!task) throw new Error('Task not found');

  if (task.userId !== userId) {
    throw new Error('Not allowed');
  }

  return deleteTaskRepo(taskId);
};
export const updateTaskStatus = async (
  userId: string,
  taskId: string,
  status: TaskStatus,
) => {
  const task = await findTaskById(taskId);

  if (!task) throw new Error('Task not found');

  if (task.assignedToUserId !== userId) {
    throw new Error('Not allowed');
  }
  return updateTaskStatusRepo(taskId, status);
};
