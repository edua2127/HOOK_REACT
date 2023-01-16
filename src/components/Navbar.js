import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = ({ children }) => {
  return (
    <div >
      <nav className={style.navbar}>
        <ul className={style.links_list}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Navbar