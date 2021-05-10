import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const MyService = () => {
    
    const {name} = useParams()

    return (
        <div className="container-fluid row text-color font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex justify-content-center p-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

                            <td className="text-color">{name}</td>
                            <td>$ 500</td>
                            <td><button className="btn-sm btn-danger">Pending</button></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <div>
                <Link to="/book">
                <button className="btn-sm btn-success">Pay</button>
                </Link>
                </div>
            </div>
            
        </div>
    );
};

export default MyService;