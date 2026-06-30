import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    title: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    difficulty: {
        type: String,
        enum: ['easy', 'moderate', 'challenging'],
        default: 'moderate'
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    focus: { type: String, default: 'General fitness' },
    equipment: { type: [String], default: [] },
    description: { type: String, default: '' }
}, {
    timestamps: true
});
export const Workout = model('Workout', workoutSchema);
