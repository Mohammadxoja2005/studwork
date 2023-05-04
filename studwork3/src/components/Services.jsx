import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Services = () => {
  return (
    <>
      <div className="Services">
        <div className="container mt-4">
          <div className="row" style={{margin: "0"}}>
            <div className="col-lg-12">
              <div className="services_name">Популярные услуги </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  //   loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    992: {
                      slidesPerView: 4,
                    },

                    768: {
                      slidesPerView: 2,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {[1, 2, 3, 4, 5, 6].map(() => {
                    return (
                      <SwiperSlide>
                        <div className="services_box">
                          <img
                            src="/img/services_1.png"
                            alt=""
                            className="services_img"
                          />
                          <div className="services_h">Онлайн-помощь</div>
                          <div className="services_p">от 300 ₽</div>
                          <div className="services_btn">
                            <button>Заказать</button>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }, [])}
                </Swiper>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="services_btn_next">
                  <a href="">
                    <button>Все услуги</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
