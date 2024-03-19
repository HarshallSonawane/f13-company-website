// project/src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo/logo_2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { handleLogout } from '../RegConfig/registration';


export default function Navbar({ setLoggedIn }) {
    // Mobile Menu State
    const [sidenav, setSidenav] = useState(false);

    // Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);

    // Mobile Icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />

    // SideNav
    const sidenavShow = () => {
        setSidenav(!sidenav);
    }
    const logout = async () => {
        await handleLogout(setLoggedIn);
    };
    // Scroll Fixed Navbar
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <>
            <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
                <div className="container">
                    <nav className="navbar" id="Navbar">
                        <div className="navbar_brand">
                            <a href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="navbar_toggler" onClick={sidenavShow}>
                            {menuIcon}
                        </div>
                        <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                            <ul>
                                <li>
                                    <Link activeClass="active" to="home" spy={true} smooth={true}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about" spy={true} smooth={true}>
                                        About US
                                    </Link>
                                </li>
                                <li>
                                    <Link to="services" spy={true} smooth={true}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="blog" spy={true} smooth={true}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact" spy={true} smooth={true}>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <button className='logoutbtn' onClick={logout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
