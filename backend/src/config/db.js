import mongoose from 'mongoose';

export default function connectDB(uri) {
  const mongoUri = uri || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/movieapp';
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected')).catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
}
