import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
    team: { type: String, default: '' }
}, {
    timestamps: true
});
export const Leaderboard = model('Leaderboard', leaderboardSchema);
