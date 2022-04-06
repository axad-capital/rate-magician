import React from 'react'
import './navComp.css'
import { Link, useLocation } from 'react-router-dom';
import RateLogo from './ratelogo.png'

const NavComp = () => {


    function home() {
        window.location.href = '/'
    }

    const location = useLocation()

    if (location.pathname === '/thanks') {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img onClick={home} style={{ cursor: 'pointer' }} className='navbar-brand magic-logo' src={RateLogo} alt="magic" />
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img onClick={home} style={{ cursor: 'pointer' }} className='navbar-brand magic-logo' src={RateLogo} alt="magic" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a href='#about-us' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavComp