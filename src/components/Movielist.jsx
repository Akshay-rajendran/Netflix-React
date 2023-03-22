import React from 'react'

function Movielist({movie}) {
  return (
    <div className="inline" >
    <div className="card" style={{background:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,backgroundSize:"cover"}}></div>
    <p>{movie.title}</p>
    </div>
  )
}

export default Movielist