import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    // const[selectedService , setSelectedService] = useState([])

    // useEffect(()=>{
    //     fetch(`https://hidden-stream-16931.herokuapp.com/selectService/${id}`,{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify()
    //     })
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setSelectedService(data)
    //     })
    // })
    return (
        <div className="col-md-4 col-sm-6 text-center mt-5">
            <img style={{height:'150px'}} className="img-fluid" src={service.imageUrl} alt=""/>
            <h4>{service.name}</h4>
            <p className="text-secondary" style={{height:'70px'}}>{service.description}</p>
            <h4>$500</h4>
            <Link to="/service"><button className="btn-color mb-1">Book now</button></Link>
        </div>
    );
};

export default Service;