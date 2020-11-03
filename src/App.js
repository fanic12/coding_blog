import React from 'react'
import { Link } from 'react-router-dom'
import Bbibbi from './Bbibbi.png'

import Sidebar from './components/navbar/Sidebar'

function App({children}) {
  return (
    <div>
      <div className='imgsituate'>
        <Link to='/'>
          <img
            src={Bbibbi}
            alt={Bbibbi}
            width='100px'
            height='100px'
            id='imgshape'
          />
        </Link>
      </div>
      <h1>
        <Link className='nav' to='/'>
          <link
           a href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap'
            rel='stylesheet'
          />
          Fanic12 Coding Blog
        </Link>
      </h1>
      <div id="mainContainer">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default App
