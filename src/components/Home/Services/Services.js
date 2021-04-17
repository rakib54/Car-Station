import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/allService')
        .then(res=>res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
        <section className="service font-link">
            <div className="container">
                <h2 className="text-center text-color mb-5"><b>OUR SERVICES</b></h2>
                <div className="row">
                    {
                        services.map(service=><Service service={service} key={service._id}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;