import { faComment, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Review = ({testimonial}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center font-link">
            <h5 style={{color:'#455362'}}>By,<b> {testimonial.name}</b></h5>
            <p style={{height:'80px'}}><FontAwesomeIcon icon={faComment}></FontAwesomeIcon>{testimonial.comments}</p>
            
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <p>Taken on {(new Date(testimonial.date).toDateString('dd/MM/YYYY'))}</p>
        </div>
    );
};

export default Review;