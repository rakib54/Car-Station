import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [testimonials, setTestimonial] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/allTestimonial')
        .then(res => res.json())
        .then(result =>{
            setTestimonial(result)
            console.log(result);
        })
    },[])
    return (
        <section>
            <div className="container p-5 font-link">
                <h3 className="text-center  mt-5 text-color"><b>OUR CLIENT SAY</b></h3>
                <div className="row mb-5 mt-5 review">
                   {
                       testimonials.map(testimonial =><Review testimonial={testimonial} key={testimonial._id}></Review>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Reviews;