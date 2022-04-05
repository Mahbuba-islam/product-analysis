import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';
const Review = (props) => {
    const navigate = useNavigate();
    const { name, review, rating} = props.review
    return (
         
        <div className='review-section'> 
         <div className="review-info">
         <h4>{name}</h4>
               <p>{review}</p>
              <p><small>{rating}</small></p>
              <span className='review-btn'><button onClick={()=> navigate('/Review/id')} >See all reviews</button>
              </span>
         </div>
        </div>
    );
};

export default Review;