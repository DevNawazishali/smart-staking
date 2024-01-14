import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import {} from "swiper/modules";
import "./Transcation.css";

export default function Transcation() {
  return (
    <div className="main_transcaion_page">
      <div className="container">
        <div className="row trans_sc">
          <div className="col-md-5">
            <div className="trans_conent">
              <h6>Core features and Visions</h6>
              <h1>Transacational Dynamics Of the $MART token</h1>
            </div>
          </div>
          <div className="col-md-7 mt-3 mt-md-0">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                modules={[]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <h2>4%</h2>
                    <h6>Redistribution in BUSD</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi neque distinctio iure ut cumque obcaecati, tenetur
                      minus? Soluta corporis .{" "}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <h2>2%</h2>
                    <h6>Project development</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi neque distinctio iure ut cumque obcaecati, tenetur
                      minus? Soluta corporis .{" "}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <h2>1%</h2>
                    <h6>Liquidity Addition</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi neque distinctio iure ut cumque obcaecati, tenetur
                      minus? Soluta corporis .{" "}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="trns_box_content text-start">
                    <h2>1%</h2>
                    <h6>Token Burn</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi neque distinctio iure ut cumque obcaecati, tenetur
                      minus? Soluta corporis .{" "}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>   <div className="trns_box_content text-start">
                    <h2>2%</h2>
                    <h6>For Marketing</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi neque distinctio iure ut cumque obcaecati, tenetur
                      minus? Soluta corporis .{" "}
                    </p>
                  </div></SwiperSlide>
              
              </Swiper>
            </>
          </div>

          <div className="clr_bg"></div>
        </div>
      </div>
    </div>
  );
}
