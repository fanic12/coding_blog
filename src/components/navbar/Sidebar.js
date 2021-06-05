import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../../styles/sidebar.css'

const Sidebar = ({ closeNav, isOpen }) => {
  const sidebarItem = [
    { name: 'HTML', link: '/html', isTitle: true },
    { name: 'br & p', link: '/br_and_p', isTitle: false },
    { name: 'img', link: '/img', isTitle: false },
    { name: 'a_href', link: '/a_href', isTitle: false },
    { name: 'CSS', link: '/css', isTitle: true },
    { name: 'style', link: '/style', isTitle: false },
    { name: 'padding & margin', link: '/padding_and_margin', isTitle: false },
    { name: 'grid', link: '/grid', isTitle: false },
    { name: 'JAVASCRIPT', link: '/javascript', isTitle: true },
    { name: 'script', link: '/script', isTitle: false },
    { name: 'if', link: '/if', isTitle: false },
    { name: 'while', link: '/while', isTitle: false },
    { name: 'REACTJS', link: '/reactjs', isTitle: true },
    { name: 'props', link: '/props', isTitle: false },
    { name: 'state', link: '/state', isTitle: false },
    { name: 'map', link: '/map', isTitle: false }
  ]

  const location = useLocation()

  return (
    <div className={`sidebar ${isOpen && 'open'}`} onMouseLeave={closeNav}>
      <div className='closeBtn'></div>
      {sidebarItem.map((item, index) => (
        <div key={index} className={item.isTitle ? 'title' : 'post'}>
          <Link
            id={location.pathname === item.link && 'keepHover'}
            to={item.link}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
