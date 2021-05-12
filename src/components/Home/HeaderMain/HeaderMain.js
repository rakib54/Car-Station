import React from 'react';
import car from '../../../images/headerCar.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center header-main font-link">
           
               <div className="col-md-4 offset-md-1 mb-3">
                    <h1>We Provide You The <br/><span style={{color:'green'}}>Best Services</span></h1>
                    <p className="text-secondary">A car wash or auto wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles. Car washes can be self-serve, fully automated, or full-service with attendants who wash the vehicle!</p>
                    <button className="btn-color">Get our services</button>
               </div>
               <div className="col-md-6">
                    <img className="img-fluid" style={{height:'450px',width:'700px'}} src={car} alt=""/>
               </div>
           
       </main>
    );
};

export default HeaderMain;