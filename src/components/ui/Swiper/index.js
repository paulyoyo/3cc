import React from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useMount from "@hooks/useMount";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const SwiperSlider = ({
  options,
  prevIcon,
  nextIcon,
  children,
  className,
}) => {
  const mounted = useMount();
  if (!mounted) return null;

  const sliderOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    autoHeight: true,
    ...options,
    navigation: options?.navigation
      ? {
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }
      : false,
    pagination: options?.pagination ? { clickable: true } : false,
    autoplay: options?.autoplay
      ? {
          delay: options.autoplayDelay || 5000,
          disableOnInteraction: false,
        }
      : false,
  };

  return (
    <div className={classnames(className, "swiper-wrap")}>
      <Swiper {...sliderOptions}>{children}</Swiper>
      {sliderOptions.navigation && (
        <>
          <button type="button" className="swiper-btn swiper-btn-prev">
            <i className={prevIcon} />
          </button>
          <button type="button" className="swiper-btn swiper-btn-next">
            <i className={nextIcon} />
          </button>
        </>
      )}
    </div>
  );
};

export { SwiperSlide };

SwiperSlider.propTypes = {
  options: PropTypes.shape({
    navigation: PropTypes.bool,
    pagination: PropTypes.bool,
    loop: PropTypes.bool,
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    autoplay: PropTypes.bool,
    autoplayDelay: PropTypes.number,
    breakpoints: PropTypes.shape({}),
  }),
  prevIcon: PropTypes.string,
  nextIcon: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SwiperSlider.defaultProps = {
  prevIcon: "fa fa-arrow-left",
  nextIcon: "fa fa-arrow-right",
};

export default SwiperSlider;
