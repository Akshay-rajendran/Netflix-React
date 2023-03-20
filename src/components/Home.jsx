import React from 'react'
import NavBar from './NavBar'
import "../Home.css"
import Banner from './Banner'
function Home() {
  return (
   <div className='main'>
    <NavBar/>
    <Banner/>
   </div>
  )
}

export default Home