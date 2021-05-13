import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div className="font-link">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mt-5">
            
            <form className="no-border">
                <h2 className="text-center text-color"><b>Contact with us</b></h2>
                <div className="row pt-5 mx-auto">
    
                    <div className="col-md-8 form-control mx-auto no-border">
                        <input type="text" className="form-control" placeholder="Your Name" name="name" />
                    </div>
                
                    <div className="col-8 form-control  mx-auto no-border">
                        <input type="email" className="form-control" placeholder="Your Email" name="email" />
                    </div>
                    
                    <div className="col-8 form-control pt-2 mx-auto no-border">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    
                    <div className="col-8 form-control pt-2 mx-auto no-border">
                        <textarea className="form-control" cols="30" rows="8" placeholder="Your message"></textarea>
                    </div>
                    <div className="col-8 form-control pt-3 mx-auto button no-border">
                        <input type="submit" className="btn btn-success " value="Send" />
                    </div>
                </div>
            </form>

        
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;