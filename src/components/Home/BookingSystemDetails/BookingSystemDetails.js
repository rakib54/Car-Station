import React from 'react';
import './BookSystemDetails.css'


const BookingSystemDetails = ({ service }) => {
    return (
        
            <div className="col-md-3 col-sm-12 text-center mt-5">
                <img style={{ height: '100px' }} src={service.img} alt="" />
                
                <h5 className="mt-4">{service.name}</h5>
            </div>
       
    );
};

export default BookingSystemDetails;