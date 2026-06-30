import { connectToDatabase } from '../config/database.js';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { Workout } from '../models/workout.js';

const seedData = async () => {
  await connectToDatabase();

  await User.deleteMany({});
  await Team.deleteMany({});
  await Activity.deleteMany({});
  await Workout.deleteMany({});

  await User.create([
    { name: 'Ava', email: 'ava@example.com', age: 16, fitnessLevel: 'intermediate', team: 'Power Rangers' },
    { name: 'Milo', email: 'milo@example.com', age: 17, fitnessLevel: 'advanced', team: 'Power Rangers' }
  ]);

  await Team.create([
    { name: 'Power Rangers', description: 'A high-energy team', members: ['ava@example.com', 'milo@example.com'], goal: 'Complete 100 workout minutes this week' }
  ]);

  await Activity.create([
    { userId: 'ava@example.com', type: 'run', durationMinutes: 30, distanceMiles: 3, points: 120, date: new Date() },
    { userId: 'milo@example.com', type: 'strength', durationMinutes: 45, points: 150, date: new Date() }
  ]);

  await Workout.create([
    { title: 'Morning Mobility', type: 'mobility', difficulty: 'easy', durationMinutes: 20, focus: 'Flexibility', equipment: [], description: 'Light stretching and breathing' }
  ]);

  console.log('Seed data loaded');
};

seedData().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
