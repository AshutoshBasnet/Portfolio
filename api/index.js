import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Router
const apiRouter = express.Router();

// Routes
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/contact', contactRouter);

// Health check endpoint
apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

// Root API discovery endpoint
apiRouter.get('/', (req, res) => {
  res.json({
    name: 'Ashutosh Basnet Portfolio API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      contact: '/api/contact (POST)',
    },
  });
});

// Mount router at both '/api' and '/' to ensure proper matching in both local and Vercel serverless environments
app.use('/api', apiRouter);
app.use('/', apiRouter);

// For local standalone development (skipped when running on Vercel Serverless)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 API server running on http://localhost:${PORT}`);
  });
}

export default app;
