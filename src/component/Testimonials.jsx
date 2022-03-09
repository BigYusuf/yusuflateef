import React from 'react';
import {TestimonialData} from '../dummyData';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {
    var settings = {
        className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         centerPadding: "60px",
       }
     }
    ]
    };
    return (
        <div>
             {/* ========================== testimonial =========================== */}
            <section className="testimonial section">
                <span className="section__subtitle">My clients say</span>
                <h2 className="section__title">Testimonial</h2>
                
                <Slider {...settings}className="testimonial__container container grid" >
                    {TestimonialData.map((d) => (
                        
                        <div className="testimonial__card" key= {d.id}>
                        <img src={d.img} alt="" className="testimonial__img"/>
                        <h3 className="testimonial__name">{d.name}</h3>
                        <p className="testimonial__description">
                           {d.desc}
                        </p>
                        </div>
                    ))}
                   
                </Slider>
            </section>
        </div>
    )
}

export default Testimonials
