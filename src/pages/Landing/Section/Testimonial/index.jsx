import React from "react";
import { COContinaer } from "@/components/";
import { Swiper, SwiperSlide } from "swiper/react";
import { COTestimonialCard } from "@/components";
import { testimonialData } from "@/constants/data";

export const Testimonial = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      <div>
        <COContinaer>
          <div className="grid grid-cols-2">
            <div>
              <h2>Because they love us</h2>
            </div>
          </div>
        </COContinaer>
      </div>
      <div>
        <Swiper
          spaceBetween={8}
          slidesPerView={4.5}
          loop={true}
          breakpoints={{
            575: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2.5,
              spaceBetween: 14,
            },
            1365: {
              slidesPerView: 3.5,
              spaceBetween: 18,
            },
            1439: {
              slidesPerView: 4.5,
              spaceBetween: 22,
            },
            1599: {
              slidesPerView: 5.5,
              spaceBetween: 33,
            },
          }}
        >
          {testimonialData?.map((data, index) => (
            <SwiperSlide key={index}>
              <COTestimonialCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
