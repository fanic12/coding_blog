import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='route'>
      {/*
                <Link to="/about">
                    <li>br & p</li>
                </Link>
            */}
      <div className='topics'>
        <div className='html_topic'>
          <h2 className='sidebarpaddingSet'>
            <Link to='/html'>HTML</Link>
          </h2>
          <ul>
            <Link to='/br_and_p'>br & p</Link>
            <br />
            <Link to='/img'>img</Link>
            <br />
            <Link to='/a_href'>a href</Link>
          </ul>
        </div>
        <div className='css_topic'>
          <h2 className='sidebarpaddingSet'>
            <Link to='/css'>CSS</Link>
          </h2>
          <ul>
            <Link to='/style'>style</Link>
            <br />
            <Link to='/padding & margin'>padding & margin</Link>
            <br />
            <Link to='/grid'>grid</Link>
          </ul>
        </div>
        <div className='javarscript_topic'>
          <h2 className='sidebarpaddingSet'>
            <Link to='/javarscript'>JAVARSCRIPT</Link>
          </h2>
          <ul>
            <Link to='/script'>script</Link>
            <br />
            <Link to='/if'>if</Link>
            <br />
            <Link to='/while'>while</Link>
          </ul>
        </div>
        <div className='reactjs_topic'>
          <h2 className='sidebarpaddingSet'>
            <Link to='/reactjs'>REACTJS</Link>
          </h2>
          <ul>
            <Link to='/props'>props</Link>
            <br />
            <Link to='/state'>state</Link>
            <br />
            <Link to='/map'>map</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
