import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users',userRoutes);
app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
    console.log("ENV URL:", process.env.DATABASE_URL);
    console.log("TYPE:", typeof process.env.DATABASE_URL);
});
app.get('/', (req, res) => {
    res.send('Serenity API is running');
});
