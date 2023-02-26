import React, { useEffect } from "react";
import { PropTypes } from "prop-types";

function CarouselItems({
  el,
  current,
  setCurrent,
  goToSlide,
  autoPlaySpeed,
  autoPlay,
}) {
  const goToSlideNext = () => {
    setCurrent(current === el.img.length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    let interval = null;
    if (autoPlay) {
      interval = setInterval(goToSlideNext, autoPlaySpeed);
    }
    return () => clearInterval(interval);
  }, [current, autoPlay, autoPlaySpeed]);
  return (
    <div className="flex flex-col gap-4 overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {el.img.map((element) => (
          <img src={element.src} alt="" className="rounded-xl" />
        ))}
      </div>
      <div className="flex items-end justify-center gap-3">
        {el.img.map((slide, slideIndex) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            role="presentation"
            className={`w-5 h-2 rounded-full relative duration-1000 cursor-pointer ${
              current === slideIndex
                ? "py-1.5 px-7 transition-all duration-1000 bg-green-500"
                : "bg-green-500/75 transition-all duration-1000"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
CarouselItems.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
      })
    ),
  }).isRequired,
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
  autoPlaySpeed: PropTypes.number.isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export default CarouselItems;
