export type Task = {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  assignedToUserId: string | null; 
  assignedToUser: { username: string;} | null;
};