
import React from 'react';
import useReviews from '../../hooks/useReviews';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    const review = reviews.find((review) => review.name )
    
    return (
        <div>
            
             <div className="review-info">
         <h4>{review?.name}</h4>
               <p>{review?.review}</p>
              <p><small>{review?.rating}</small></p>
              
         </div>
        </div>
    );
};

export default Reviews;
