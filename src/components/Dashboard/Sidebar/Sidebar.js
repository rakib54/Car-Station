import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faTaxi, faCommentDots, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 font-link" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
                {
                    !isAdmin ?
                        <div>
                            <li>
                                <Link to="/dashboard" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="text-white" >
                                    <FontAwesomeIcon icon={faCalendar} /><span>Book</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/service" className="text-white" >
                                    <FontAwesomeIcon icon={faTaxi} /><span>Your Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/feedback" className="text-white">
                                    <FontAwesomeIcon icon={faCommentDots} /><span>Feedback</span>
                                </Link>
                            </li>
                        </div>
                        :
                        <div>
                            <li>
                                <Link to="/orderList" className="text-white">
                                    <FontAwesomeIcon icon={faList} /><span>Order list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-white">
                                    <FontAwesomeIcon icon={faPlus} /><span>Add service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin" className="text-white">
                                    <FontAwesomeIcon icon={faUsers} /><span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /><span>Manage Service</span>
                                </Link>
                            </li>
                        </div>
                }

            </ul>
            <div>
                <Link className="text-white" to="/home">
                    <FontAwesomeIcon icon={faHome} /><span>Go home</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;