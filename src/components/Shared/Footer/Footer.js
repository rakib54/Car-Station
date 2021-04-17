import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "We Provide best service", link: "/wash" },
        { name: "by Rakibur Rahman", link: "/autowash" }
        
    ]
    const ourAddress = [
        { name: "Dhaka - 1260 Nikunja 2", link: "//google.com/map" },
        { name: "Uttara,Dhaka", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Waterless Car Wash", link: "/wash" },
        { name: "Rinseless Car Wash", link: "/wash" },
        { name: "Automated Car Washes", link: "/wash" },
        { name: "Automated Car Washes", link: "/wash" },
        { name: "Machine Dryer Car Wash", link: "/wash" },
    ]
    const services = [
        { name: "Soft Touch Car Washes", link: "/wash" },
        { name: "Soft Touch Car Washes", link: "/wash" },
        { name: "Machine Dryer Car Wash", link: "/wash" },
        { name: "Machine Dryer Car Wash", link: "/wash" },
        { name: "Machine Dryer Car Wash", link: "/wash" },
    ]
    return (
        <footer className="footer-area font-link mt-5">
            <div className="container pt-5">
                <div className="col-md-12 text-lg-start text-center">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Car's Station"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Car wash" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn-color">+880177954545</button>
                        </div>
                    </FooterCol>
                </div>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by Rakibur Rahman</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;