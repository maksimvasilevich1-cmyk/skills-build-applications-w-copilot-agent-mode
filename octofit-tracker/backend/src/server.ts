import express from 'express';
import { connectToDatabase } from './config/database.js';
import { getApiBaseUrl } from './config/baseUrl.js';
import activitiesRouter from './routes/activities.js';
import healthRouter from './routes/health.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const baseUrl = getApiBaseUrl();

app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/leaderboard', leaderboardRouter);

app.get('/api', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API', baseUrl });
});

export const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
      console.log(`API base URL: ${baseUrl}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
