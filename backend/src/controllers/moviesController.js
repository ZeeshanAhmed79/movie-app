import Movie from '../models/Movie.js';

export async function listMovies(req, res, next) {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 }).limit(50);
    res.json(movies);
  } catch (err) { next(err); }
}

export async function createMovie(req, res, next) {
  try {
    const m = new Movie(req.body);
    await m.save();
    res.status(201).json(m);
  } catch (err) { next(err); }
}
