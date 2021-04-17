import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faCalendar, faGripHorizontal, faUsers,faTaxi,faCommentDots,faList,faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:'100vh'}}>
            <ul className="list-unstyled">
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