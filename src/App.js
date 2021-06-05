import React, { useState } from 'react'
// import Bbibbi from './Bbibbi.png'

import Navbar from './components/navbar/Nav'
import Sidebar from './components/navbar/Sidebar'

function App({ children }) {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [isShown, setIsShown] = useState()
  return (
    <div id='app'>
      <Navbar openNav={() => setSideNavOpen(true)} />
      <Sidebar
        isOpen={sideNavOpen}
        closeNav={() => setSideNavOpen(false)}
        ClickRoute={isShown}
        noneClickRoute={() => setIsShown(false)}
      />
      <div className='container'>{children}</div>
    </div>
  )
}

export default App
