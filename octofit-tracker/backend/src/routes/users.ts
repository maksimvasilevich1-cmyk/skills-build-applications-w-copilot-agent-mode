import { Router } from 'express';
import { User } from '../models/user.js';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.find().lean();
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create user', error });
  }
});

export default router;
