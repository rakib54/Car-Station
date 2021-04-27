import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light font-link">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand ms-5">
                    <img style={{height:'50px'}} src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center"/>
                    <b>Car's Station</b>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ms-5 active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link ms-5" href="#">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" href="#">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link ms-5"><button className="btn btn-success btn-sm">Login</button></Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;