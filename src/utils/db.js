import Dexie from 'dexie';

const db = new Dexie('QuizDB');
db.version(1).stores({
  attempts: '++id, date, score, total',
});

export const saveAttempt = async (score, total) => {
  await db.attempts.add({
    date: new Date().toISOString(),
    score,
    total,
  });
};

export const getAttempts = async () => {
  return await db.attempts.toArray();
};