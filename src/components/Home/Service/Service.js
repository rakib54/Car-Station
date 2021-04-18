import React from 'react';

const Service = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center mt-5">
            <img style={{height:'150px'}} className="img-fluid" src={service.imageUrl} alt=""/>
            <h4>{service.name}</h4>
            <p className="text-secondary" style={{height:'70px'}}>{service.description}</p>
            <button className="btn-color mb-1">Booking</button>
        </div>
    );
};

export default Service;