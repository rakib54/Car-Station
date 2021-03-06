import React, { useContext } from 'react';
import img from '../../../images/login1.jpeg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <main className="image">

            <div className="container font-link">
                <Link to="/" className="navbar-brand ms-5">
                    <img style={{ height: '50px' }} src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" />
                    <b style={{ color: 'black' }}>Car's Station</b>
                </Link>
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6 mb-5">
                        <div className="form-group mt-2">
                            <label htmlFor="">Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">PassWord</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Forgot your password?</label>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-success">Sign in</button>
                        </div>
                        <div className="form-group mt-2 text-center p-2">
                            <button onClick={handleGoogleSignIn} className="btn btn-danger"><FontAwesomeIcon className="icon" icon={faGooglePlusG} />Sign in with google</button>
                        </div>

                    </div>
                    <div className="col-md-5 d-md-block align-self-center image">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;