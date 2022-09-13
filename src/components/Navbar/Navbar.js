import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState()

    const handleMenuClick = (menu) => {
        setActiveMenu(menu)
    }

    return (
        <div className="Navbar">
            <div className="Navbar-Home active">
                {/* <div className={activeMenu === 'home' ? 'Navbar-Home active' : 'Navbar-Home'} onClick={() => handleMenuClick('home')}> */}
                <Link to="/" style={{textDecoration: 'none'}} >
                    <span>Home</span>
                </Link>
            </div>
            <div className="Navbar-Bookmarks inactive">
                {/* <div className={activeMenu === 'bookmarks' ? 'Navbar-Bookmarks active' : 'Navbar-Bookmarks'} onClick={() => handleMenuClick('bookmarks')}> */}
                {/* <a href="../Bookmarks/Bookmarks.js">
                    <span>Bookmarks</span>
                </a> */}
                <Link to="/bookmarks" style={{textDecoration: 'none'}} >
                    <span>Bookmarks</span>
                </Link>

            </div>
        </div>
    )
}

export default Navbar;
