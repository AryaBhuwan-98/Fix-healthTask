
import React from 'react'
import './GoogleComponent.css'
import Rating from "@mui/material/Rating";

const GoogleComponent = () => {
  return (
    <div className="googleReview">
    <div className="google">Google Review</div>
    <Rating name="half-rating-read" defaultValue={5} precision={1} readOnly />
  </div>
  )
}

export default GoogleComponent