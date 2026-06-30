import { Router } from 'express';
import { Workout } from '../models/workout.js';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find().lean();
  res.json(workouts);
});

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create workout', error });
  }
});

export default router;
