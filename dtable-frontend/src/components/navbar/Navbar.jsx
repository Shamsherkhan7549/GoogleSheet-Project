import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-md bg-body-tertiary bg-light my-4 mx-2 rounded">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/delegation"><img className='me-2' src="dtable-logo.svg" alt="Logo" width="30"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/delegation">Delegation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doer-dashboard">Doer Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/score-card">Scorecard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checklist">Checklist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/setting">Setting</Link>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center'>
                            <p className='mb-0 me-2'> <img src="./user-avatar.png"  alt='U'  className="rounded-circle" width="30" height="30" /></p>
                            <button className='btn btn-outline-danger'>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar