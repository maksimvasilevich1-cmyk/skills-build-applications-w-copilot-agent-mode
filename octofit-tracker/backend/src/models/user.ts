import { Schema, model } from 'mongoose';

export interface UserDocument {
  name: string;
  email: string;
  age: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  team?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  age: { type: Number, required: true, min: 1 },
  fitnessLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  team: { type: String, default: '' }
}, {
  timestamps: true
});

export const User = model<UserDocument>('User', userSchema);
