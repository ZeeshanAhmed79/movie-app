import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App(){
  const [movies, setMovies] = useState([]);
  useEffect(()=> {
    axios.get(`${API}/api/movies`).then(r=> setMovies(r.data)).catch(()=> setMovies([]));
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1>Movie App</h1>
      <img src="/hero.jpg" alt="hero" style={{maxWidth:600}}/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:20}}>
        {movies.map(m => <MovieCard key={m._id} movie={m} />)}
      </div>
    </div>
  )
}
