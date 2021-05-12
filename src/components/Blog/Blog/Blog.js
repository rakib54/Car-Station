import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Service1 from '../../../images/service4.jpg'
import Service2 from '../../../images/service-mechanic.jpg'
import Service3 from '../../../images/carwashing.jpg'
import Service4 from '../../../images/service.jpg'

const Blog = () => {
    return (
        <div className="font-link">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mt-5">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-color">How to maintain Cars <span class="badge bg-danger">New</span></strong>
                                <h3 className="mb-0">CAR WASHES DON’T DISCRIMINATE</h3>
                                <div className="mb-1 text-muted">May 9, 2021</div>
                                <p className="card-text mb-auto">We are full-service car wash facility providing a large variety of washing, waxing and detailing options.Our..</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-lg-block">
                                <img style={{ height: '250px', width: "200px" }} className="bd-placeholder-img img-fluid" src={Service4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-color">Top Tips <span class="badge bg-danger">New</span></strong>
                                <h3 className="mb-0">GET CLEAN WITH EVERY CAR WASH</h3>
                                <div className="mb-1 text-muted">April 26, 2021</div>
                                <p className="mb-auto">Have you ever thought about how your car got its name? If you are a car enthusiast, you most ..</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-lg-block">
                                <img style={{ height: '250px', width: "200px" }} className="bd-placeholder-img img-fluid" src={Service2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-color">Car holders mind!</strong>
                                    <h3 className="mb-0">TOP 3 CAR WASH QUESTIONS</h3>
                                    <div className="mb-1 text-muted">April 18, 2021</div>
                                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="stretched-link">Continue reading</a>
                                </div>
                                <div className="col-auto d-lg-block">
                                    <img style={{ height: '250px', width: "200px" }} className="bd-placeholder-img img-fluid" src={Service3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-color">Car Washers Tips!</strong>
                                    <h3 className="mb-0">ARE CAR WASHES SAFE?</h3>
                                    <div className="mb-1 text-muted">April 14, 2021</div>
                                    <p className="mb-auto">We take pride in being able to provide each customer with a clean car each time they visit any of our ...</p>
                                    <a href="#" className="stretched-link">Continue reading</a>
                                </div>
                                <div className="col-auto d-lg-block">
                                    <img style={{ height: '250px', width: "200px" }} className="bd-placeholder-img img-fluid" src={Service1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <article className="blog-post">
                    <h2 style={{fontWeight:'900'}} className="blog-post-title text-color">Speed Car Wash</h2>
                    <p className="blog-post-meta">May 13, 2021 by <a href="https://rakibur74.medium.com/" target="_blank">Rakibur Rahman</a></p>

                    <p>Speed Car Wash is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipment including high-pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners and steam cleaners. It focuses on educating customers about the whole concept of Clean Car Culture.</p>

                    <p>You and your team will get to handle all types of vehicles, from the mundane minivan to the exotic supercar. You’ll also learn a lot about these cars, dealing with specific manufacturer issues by using your knowledge about cars and even a quick vehicle information check. Don’t worry though — you’re not in auto repair, and customers won’t expect you know everything.</p>
                    <h5>The need for carwash regulations</h5>
                    <p>Part of the car wash and detailing process involves certain chemicals and the use of water. As you all know, despite being a renewable resource, the world is facing a water shortage. The CDC estimates that about 780 million people don’t have access to a clean water source. As the global population continues to grow, the strain on the planet’s resources grows with it.</p>
                    <h5>Environmental awareness campaigns</h5>
                    <p>DIY carwashing uses up a minimum of 40 gallons of water per wash, causing a significant drain on the community water supply.
                    Excessive water use is an issue, especially in places that experience droughts and those that rely on aquatic resources for livelihood.
                    All the soapy and dirty water flows into the sewers and storm drain systems without getting treated. Failing to neutralize the chemicals and contaminants in the water can pollute rivers and streams.
The runoff that flows into other bodies of water can harm and even kill aquatic life.</p>
                </article>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;