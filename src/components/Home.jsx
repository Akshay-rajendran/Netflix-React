import React from 'react'
import NavBar from './NavBar'
import "../Home.css"
import Banner from './Banner'
import Movies from './Movies'
function Home() {
  return (<>
    <div className="all">
      <div className='main'>
        <NavBar />
        <Banner />

      </div>
      <Movies />
    </div>



  </>


  )
}

export default Home