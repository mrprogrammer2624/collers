import React from "react";
import { COButton, COContinaer } from "@/components/";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { COTestimonialCard } from "@/components";
import { testimonialData } from "@/constants/data";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Icons } from "@/constants/icons";

export const Testimonial = () => {
  const swiper = useSwiper();
  return (
    <section className="max-w-[1920px] mx-auto py-32">
      <div className="pb-32">
        <COContinaer>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-extrabold">Because they love us</h2>
            </div>
            <div className="flex items-center justify-end gap-10">
              <COButton icon={true} handelChange={() => swiper.slideNext()}>
                <span className="block"> {Icons.rightArrow}</span>
              </COButton>
              <COButton icon={true} handelChange={() => swiper.slideNext()}>
                <span className="block"> {Icons.leftArrow}</span>
              </COButton>
            </div>
          </div>
        </COContinaer>
      </div>
      <div className="relative after:absolute pb-3 after:w-[calc(100%-4rem)] after:left-3/6 after:-translate-x-3/6 after:h-full after:max-h-full after:-z-1 after:-top-16 after:bg-amber-200 w-full mx-auto">
        <Swiper
          spaceBetween={8}
          slidesPerView={1.5}
          centeredSlides={true}
          grabCursor={true}
          navigation
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            557: {
              slidesPerView: 3.5,
              spaceBetween: 14,
            },
            1365: {
              slidesPerView: 3.5,
              spaceBetween: 18,
            },
            1599: {
              slidesPerView: 4.5,
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
