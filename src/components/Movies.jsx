import React from 'react'
import { useEffect, useState } from 'react'
import { Action } from '../API_KEY/Api.jsx'
import axios from 'axios'
import Movielist from './Movielist.jsx'
function Movies({title,url}) {

    const [movie, setmovie] = useState()
    async function FetchApi() {
        const calling = await axios.get(url)
        setmovie(calling.data.results)
        console.log(title, calling.data.results);
    }
    useEffect(() => {
        FetchApi()
    }, [])
    return (
        
            <div className="cards">
                
            <p className="h12">{title}</p>
                    <div className="card1 ">
                        {movie && movie.map((m) => {
                            return (
                              <Movielist movie={m} />
                            )
                        })}
                    
                </div>
            </div>
        
    )
}

export default Movies
