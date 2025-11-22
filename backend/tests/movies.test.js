import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server.js';
import Movie from '../src/models/Movie.js';

beforeAll(async () => {
  const uri = process.env.MONGO_URI_TEST || 'mongodb://127.0.0.1:27017/movieapp_test';
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await Movie.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

test('create and list movies', async () => {
  const newMovie = { title: 'Test Movie', overview: 'Nice', release_date: '2025-01-01' };
  const res = await request(app).post('/api/movies').send(newMovie);
  expect(res.status).toBe(201);
  expect(res.body.title).toBe('Test Movie');

  const list = await request(app).get('/api/movies');
  expect(list.status).toBe(200);
  expect(Array.isArray(list.body)).toBe(true);
});
