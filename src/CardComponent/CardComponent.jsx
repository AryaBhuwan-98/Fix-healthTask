import React from 'react'
import './CardComponent.css'
import Slider from "react-slick";
import { all_Data } from "../Assets/Data";

const CardComponent = () => {
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
      };
    
      return (
        <div className="cardWrappeer">
          <h1>Meet Our Experts</h1>
          <h3>Experience the Benefits of Advanced Technology and Expert Care</h3>
          <Slider {...settings} className="sliderComponent">
            {all_Data.map((data) => {
              return (
                <div className="item">
                  <div className="cardItem">
                    <div className="image">
                      <img src={data.image} />
                      <h2>{data.name}</h2>
                      <h3>{data.occupation}</h3>
                      <h4>{data.experience}</h4>
                      <div className="alignCard">
                        <p>{data.spelization}</p>
                        <p>{data.experienceNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="meetButton">
        <button>Meet Team</button>
      </div>
        </div>
      );
    };

export default CardComponent