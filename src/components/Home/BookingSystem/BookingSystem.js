import React from 'react';
import BookingSystemDetails from '../BookingSystemDetails/BookingSystemDetails';
import verified from '../../../images/logo/verified.png'
import mechanical from '../../../images/logo/mechanical.png'
import carwash from '../../../images/logo/car-wash.png'
import check from '../../../images/logo/check.png'
import './BookingSystem.css'
import Animation from '../Animation/Animation';



const ServiceDetails = [
    {
        id: 1,
        img: verified,
        name: "1.BOOKING"
    },
    {
        id: 2,
        img: mechanical,
        name: "2.INSPECTION"
    },
    {
        id: 3,
        img: carwash,
        name: "3.WASHING"
    },
    {
        id: 4,
        img: check,
        name: "4.DELIVERY"
    }
]

const BookingSystem = () => {
    return (
        <main className=" font-link">
            <div className="d-flex justify-content-center p-5">
                <Animation></Animation>
                <button style={{height:'50px'}} className="btn-color">Book Appointment</button>
            </div>
            <div style={{marginBottom:'150px'}} className="container">
                <div className="book text-center">
                    <h3 className="text-center text-color"><b>OUR PROCESS</b></h3>
                    <h3 className="text-center text-secondary">________</h3>
                    <p className="text-center">We know your time is valuable</p>
                </div>
                <div className="row">
                    {
                        ServiceDetails.map(service => <BookingSystemDetails key={service.id} service={service}></BookingSystemDetails>)
                    }
                </div>
            </div>
        </main>
    );
};

export default BookingSystem;