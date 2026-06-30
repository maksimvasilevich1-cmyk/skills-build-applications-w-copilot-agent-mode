import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    members: { type: [String], default: [] },
    goal: { type: String, default: 'Build consistency and teamwork' }
}, {
    timestamps: true
});
export const Team = model('Team', teamSchema);
