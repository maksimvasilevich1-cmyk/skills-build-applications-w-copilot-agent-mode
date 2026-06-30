import { Router } from 'express';
import { Activity } from '../models/activity.js';
const router = Router();
router.get('/', async (_req, res) => {
    const activities = await Activity.find().lean();
    const leaderboard = activities
        .map((activity) => ({ userId: activity.userId, points: activity.points }))
        .reduce((acc, entry) => {
        acc[entry.userId] = (acc[entry.userId] ?? 0) + entry.points;
        return acc;
    }, {});
    res.json(Object.entries(leaderboard)
        .map(([userId, points]) => ({ userId, points }))
        .sort((a, b) => b.points - a.points));
});
export default router;
