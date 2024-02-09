import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../Style/styles.css";
import { Pagination } from "swiper/modules";
import axios from "axios";

export default function About() {
  
  useEffect(() => {
    axios.get().then((res) => console.log(res));
  }, []);
  return (
    <>
      <section className="section bg-blue-50">
        <div className="w-full"> 
        <div className="text-2xl w-5/6 m-auto sm:text-3xl    md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-950 ">
          <h2 className="ml-4">What Our Customers Say</h2>
        </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          breakpoints={{
            268: {
              slidesPerView: 1,
            },
            624: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, alias nisi quidem ad optio beatae dicta, inventore iste
                  provident, quaerat odio?
                </p>
              </div>
              <div className="swiper-client-data">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/15441617/pexels-photo-15441617/free-photo-of-handsome-man-with-sunglasses-in-green-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="client_review"
                  />
                </figure>
                <div className="client-data-details">
                  <p>Jacqueline Asong</p>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, alias nisi quidem ad optio beatae dicta, inventore iste
                  provident, quaerat odio?
                </p>
              </div>
              <div className="swiper-client-data">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/6847704/pexels-photo-6847704.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="client_review"
                  />
                </figure>
                <div className="client-data-details">
                  <p>Patrícia Ribeiro</p>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, alias nisi quidem ad optio beatae dicta, inventore iste
                  provident, quaerat odio?
                </p>
              </div>
              <div className="swiper-client-data">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="client_review"
                  />
                </figure>
                <div className="client-data-details">
                  <p>Dawid Backhem</p>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, alias nisi quidem ad optio beatae dicta, inventore iste
                  provident, quaerat odio?
                </p>
              </div>
              <div className="swiper-client-data">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="client_review"
                  />
                </figure>
                <div className="client-data-details">
                  <p>Victoria Perry</p>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, alias nisi quidem ad optio beatae dicta, inventore iste
                  provident, quaerat odio?
                </p>
              </div>
              <div className="swiper-client-data">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="client_review"
                  />
                </figure>
                <div className="client-data-details">
                  <p>Patrícia Ribeiro</p>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
