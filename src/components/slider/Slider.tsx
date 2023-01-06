import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CappTS } from "./Slider.style";
import Risca from "../../img/imgBlog/riscaCarvao.jpeg";
import MaoCarvao from "../../img/imgBlog/maoCarvao.jpeg";
import PeCarvao from "../../img/imgBlog/peCarvao.jpeg"
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function AppTS() {
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
        <SwiperSlide><img src={Risca}/></SwiperSlide>
        <SwiperSlide><img src={MaoCarvao} /></SwiperSlide>
        <SwiperSlide><img src={PeCarvao} /></SwiperSlide>
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
export default AppTS