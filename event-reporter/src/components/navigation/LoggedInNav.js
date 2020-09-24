import React from "react"
import "./navigation.style.css"
import { Link, NavLink, useLocation } from "react-router-dom"

function LoggedInNav() {
    const location = useLocation()

    const SearchBoxVisible = () => {
        return location.pathname === "/panel" ? (
            <div className='searchBox'>
                <input type='text' id='searchField' placeholder='Search' />
                <button className='searchBtn'>
                    <i className='fa fa-search'/>
                </button>
            </div>
        ) : (
            ""
        )
    }

    return (
        <>
            <div className='nav-wrapper'>
                <nav>
                    <Link className='nav-logo-loggedIn' to='/panel'>
                        GS Panel
                    </Link>
                    <SearchBoxVisible />
                    <div className='menu'>
                        <NavLink
                            to='/eventreport'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Event Reports
                        </NavLink>
                        <NavLink
                            to='/services'
                            className='menu-links'
                            activeClassName='active'
                        >
                            GS Services
                        </NavLink>
                        <NavLink
                            to='/logout'
                            className='menu-links'
                            activeClassName='active'
                        >
                            Logout
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default LoggedInNav