import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex justify-content-center p-5">

                    {
                        loggedInUser.email ? 
                        <h3 className="font-link text-color">WelCome <b>{loggedInUser.displayName}</b></h3>
                        :
                        <h3 className="font-link text-color">WelCome <b>Admin</b></h3>
                    }

                </div>
            </div>
        </section>
    );
};

export default Dashboard;