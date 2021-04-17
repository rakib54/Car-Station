import React from 'react';
import car from '../../../images/headerCar.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center header-main font-link">
           
               <div className="col-md-4 offset-md-1 mb-3">
                    <h1>We Provide You The <br/><span style={{color:'green'}}>Best Services</span></h1>
                    <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam soluta, non nam sapiente est exercitationem similique nisi incidunt nobis!</p>
                    <button className="btn-color">Get our services</button>
               </div>
               <div className="col-md-6">
                    <img className="img-fluid" style={{height:'450px',width:'700px'}} src={car} alt=""/>
               </div>
           
       </main>
    );
};

export default HeaderMain;