import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'


function home() {
    return (
        <div className="home">
            <div className="btn-container">
                <div className="wrapper">
                    <h1 className="home-title">What would you like to do?</h1>
                    <div className="btn_wrapper">
                        <div className="discover_btn">
                            <div className="icon-discover">
                                <Link to='/eventreport'><h2>Event Reporter</h2></Link>

                            </div>
                        </div>
                        <div className="create_btn">
                            <div className="icon-create">
                                <Link to="/info"><h2>Information</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default home