import { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  description: string;
  members: string[];
  goal: string;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<TeamDocument>({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, default: '' },
  members: { type: [String], default: [] },
  goal: { type: String, default: 'Build consistency and teamwork' }
}, {
  timestamps: true
});

export const Team = model<TeamDocument>('Team', teamSchema);
