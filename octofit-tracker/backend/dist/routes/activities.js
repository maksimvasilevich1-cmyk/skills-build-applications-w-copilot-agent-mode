import { Router } from 'express';
import { Activity } from '../models/activity.js';
const router = Router();
router.get('/', async (_req, res) => {
    const activities = await Activity.find().sort({ date: -1 }).lean();
    res.json(activities);
});
router.post('/', async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create activity', error });
    }
});
export default router;
