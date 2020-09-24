import React from "react"
import "./navigation.style.css"
import { NavLink, Link } from "react-router-dom"

function Navigation() {
    return (
        <>
            <div className='nav-wrapper'>
                <nav>
                    <Link className='nav-logo-loggedIn' to='/'>
                        GS Panel
                    </Link>
                    <div className='menu'>
                        <NavLink
                            exact
                            to='/services'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Services
                        </NavLink>
                        <NavLink
                            exact
                            to='/team'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Team
                        </NavLink>
                        <NavLink
                            exact
                            to='/login'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Login
                        </NavLink>
                        <NavLink
                            exact
                            to='/register'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Register
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navigation