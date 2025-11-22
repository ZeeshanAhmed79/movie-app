import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  overview: String,
  release_date: String,
  poster_path: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Movie', MovieSchema);
