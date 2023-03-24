import React from 'react'

function Movielist({movie}) {
  return (
    <div className="inline" >
    <div className="card" style={{background:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,backgroundSize:"cover"}}></div>
    <p className='undertitle'>{movie.title}</p>
    </div>
  )
}

export default Movielist



///moive taken as props in the argument in curly bracket curley bracket used because the props is a object