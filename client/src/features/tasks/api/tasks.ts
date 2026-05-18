import { request } from '../../../shared/api/client';

export const tasksGetRequest = () => {
  return request('/tasks', {
    method: 'GET',
  });
};
export const tasksAddRequest = (data: {
  title: string;
  description?: string;
  assignedTo?: string;
}) => {
  return request('/tasks', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const taskStatusChangeRequest = (
  id: string,
  data: { status: 'todo' | 'in_progress' | 'done' },
) => {
  return request(`/tasks/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
export const tasksDeleteRequest = (id: string) => {
  return request(`/tasks/${id}`, {
    method: 'DELETE',
  });
};
export const usersSearchRequest = (query: string) => {
  return request(`/users/search?query=${query}`, {
    method: 'GET',
  });
};
