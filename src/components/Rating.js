import React from "react";
import BeautyStars from "beauty-stars/dist";

const Rating = ({title, ratingValue, description}) => (
  <>
    <h4>{title}</h4>
    <div className="rating-container">
      <BeautyStars value={ratingValue} size={20}/><span className='rating'>{ratingValue}.0</span>
    </div>
    <p>{description}</p>
  </>
)

export default Rating;
