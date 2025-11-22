import express from 'express';
import { listMovies, createMovie } from '../controllers/moviesController.js';

const router = express.Router();

router.get('/', listMovies);
router.post('/', createMovie);

export default router;
