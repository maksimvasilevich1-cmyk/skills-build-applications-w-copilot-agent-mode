import { Schema, model } from 'mongoose';

export interface ActivityDocument {
  userId: string;
  type: string;
  durationMinutes: number;
  distanceMiles?: number;
  points: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<ActivityDocument>({
  userId: { type: String, required: true },
  type: { type: String, required: true, trim: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  distanceMiles: { type: Number, min: 0 },
  points: { type: Number, default: 0, min: 0 },
  date: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export const Activity = model<ActivityDocument>('Activity', activitySchema);
