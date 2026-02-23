import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import path from 'path';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();

// Security and Utility Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for simplicity if serving frontend from same domain
}));
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Trust proxy for platforms like Heroku/Render
app.set('trust proxy', 1);

// API Routes
app.use('/api/tasks', taskRoutes);

// Serve Frontend in Production
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API is running 🚀' });
  });
}

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));
