import NotFound from '@/app/not-found';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  throw new NotFound();
  return db.prepare('SELECT * FROM meals').all();
}