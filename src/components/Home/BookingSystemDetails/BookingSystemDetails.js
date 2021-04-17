import React from 'react';
import './BookSystemDetails.css'


const BookingSystemDetails = ({ service }) => {
    return (
        <main className="row">
            <div className="col-md-3 col-sm-12">
                <img style={{ height: '100px' }} src={service.img} alt="" />
                <br />
                <br />
                <h5>{service.name}</h5>
            </div>
        </main>
    );
};

export default BookingSystemDetails;