import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Contactus from './Contactus';

const Navbar = () => {
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WebsiteName</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Contactus />
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="mx-1 btn btn-outline-light" to="/reactjs-assign" type="submit" >Logout</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
