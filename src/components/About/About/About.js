import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Service1 from '../../../images/service4.jpg'
import Service2 from '../../../images/service-mechanic.jpg'
import Service3 from '../../../images/carwashing.jpg'
const About = () => {
    return (
        <div className="font-link">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="row featurette d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <h2 className="featurette-heading text-color">Who We Are?</h2>
                            <p className="lead">Car-Station's Car Wash is unique in that we are a “Flex” service car wash. 
                            What that means to you is that we are the only car wash you will ever need. At Wetzone, 
                            our approach combines the latest car wash technology with the human touch to provide the best car wash experience possible. What you need when you need it. All done expertly and with the highest quality soaps and waxes.</p>
                        </div>
                        <div className="col-md-5">
                            <img style={{width:'500px', height:'400px'}} src={Service1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="row featurette mt-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading text-color">Our Wash Process!</h2>
                            <p className="lead">Every aspect of our wash process has been carefully designed to deliver a clean, shiny, dry car. From the chemicals we apply, to the type of water we use during the different stages of the wash process, everything has a specific purpose in order to achieve the best possible results.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                           <img style={{width:'400px', height:'400px'}} src={Service2} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" />

                        </div>
                    </div>
                    <div className="row featurette mt-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <h2 className="featurette-heading text-color">We Care About Customer!</h2>
                            <p className="lead">If you’re in need of great car wash service or car detailing, Car-Station Wash is the place to go. Both of our locations in Houston and Spring are conveniently located, making it easy to get exactly what you need make it easy to get exactly what you need to ensure that your car stays in amazing shape. We take a lot of pride in always being able to provide what our customers need, when they need it. If you come visit any of our convenient locations, you’ll be able to see why we’re the only place that many people will go to get their car washed or detailed.</p>
                        </div>
                        <div className="col-md-5">
                        <img style={{width:'400px', height:'400px'}} src={Service3} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;