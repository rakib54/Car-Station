import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    const [bookingsData, setBookingData] = useState([{}])
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    useEffect(() => {
        fetch('http://localhost:4000/bookDetails')
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
                console.log(data);
            })
    }, [])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex justify-content-center p-5">

                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Description</th>
                                <th className="text-secondary" scope="col">PaymentId</th>
                                <th className="text-secondary" scope="col">Booking Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingsData.map(book =>
                                    <tr key={book._id}>
                                        
                                        <td>{book.bookingData?.name}</td>
                                        <td>{book.bookingData?.description}</td>
                                        <td>{book.paymentId}</td>
                                        <td>{(new Date(book.bookingTime).toDateString('dd/MM/YYYY'))}</td>
                                    </tr>
                                    
                                    )
                            }
                            <tr>


                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;