import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://hidden-stream-16931.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    const DeleteService = (id) => {
        fetch(`https://hidden-stream-16931.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    document.getElementById('serviceDelete').style.display ='none'
                }
            })
    }
    return (
        <div className="container-fluid row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex justify-content-center p-5">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Booking Date</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            services.map(service =>
                                <tr key={service._id} id="serviceDelete">

                                    <td className="text-color">{service.name}</td>
                                    <td><img style={{ height: '50px' }} src={service.imageUrl} alt="" /></td>
                                    <td> 
                                        <button onClick={() => DeleteService(service._id)} className="btn-sm btn-danger">
                                                Delete
                                        </button>
                                    </td>



                                </tr>

                            )
                        }
                        <tr>


                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;