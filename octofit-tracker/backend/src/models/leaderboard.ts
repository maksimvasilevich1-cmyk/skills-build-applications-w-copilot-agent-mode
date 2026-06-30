import { Schema, model } from 'mongoose';

export interface LeaderboardDocument {
  userId: string;
  name: string;
  points: number;
  rank: number;
  team: string;
  createdAt: Date;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<LeaderboardDocument>({
  userId: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  points: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
  team: { type: String, default: '' }
}, {
  timestamps: true
});

export const Leaderboard = model<LeaderboardDocument>('Leaderboard', leaderboardSchema);
