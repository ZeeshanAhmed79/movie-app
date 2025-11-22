import React from 'react';
export default function MovieCard({movie}){
  return (
    <div style={{border:'1px solid #ddd', padding:12}}>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <small>{movie.release_date}</small>
    </div>
  );
}
