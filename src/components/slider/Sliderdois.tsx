import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CappTS } from "./Slider.style";

import ObsP from "../../img/imgBlog/observPlanta.jpeg";
import CadAberto from "../../img/imgBlog/cadernoAberto.jpeg";
import Caderno from "../../img/imgBlog/caderno.jpeg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function AppTSD() {
  return (
    <><CappTS>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ObsP}/></SwiperSlide>
        <SwiperSlide><img src={CadAberto} /></SwiperSlide>
        <SwiperSlide><img src={Caderno}/></SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </CappTS>
    </>
  );
}
export default AppTSD