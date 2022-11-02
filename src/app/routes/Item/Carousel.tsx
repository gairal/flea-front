import { FC, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Swiper, { Autoplay, FreeMode, Lazy, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export const Carousel: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  return (
    <div className="bg-black">
      {!thumbsSwiper?.destroyed && (
        <SwiperComponent
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="h-96"
          lazy
          loop
          modules={[Autoplay, FreeMode, Lazy, Thumbs]}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {Array.from({ length: 10 }).map((whatever, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={i}>
              <img alt="" className="swiper-lazy" data-src="/img/hp.jpg" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      )}
      <SwiperComponent
        className="h-24"
        freeMode
        lazy
        loop
        modules={[FreeMode, Lazy, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
      >
        {Array.from({ length: 10 }).map((whatever, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <img alt="" className="swiper-lazy" data-src="/img/hp.jpg" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
