// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/swiper.css";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1633792701226-526f17288218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1627322417317-c98fc87e0e0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1633450750940-4eabe49f4722?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1624220588249-698a9f5b38da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1616769199269-2635ea2ece8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Banner;

/* import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className="one">
            <h3>1</h3>
          </div>
          <div className="two">
            <h3>2</h3>
          </div>
          <div className="three">
            <h3>3</h3>
          </div>
          <div className="four">
            <h3>4</h3>
          </div>
          <div className="five">
            <h3>5</h3>
          </div>
          <div className="six">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
} */
