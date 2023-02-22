import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import gsap from "gsap";

function CarouselItems({
  el,
  current,
  setCurrent,
  goToSlide,
  autoPlaySpeed,
  autoPlay,
}) {
  const goToSlideNext = () => {
    const isLastSlide = current === el.img.length - 1;
    const index = isLastSlide ? 0 : current + 1;
    setCurrent(index);
    if (el.img.length !== 1) {
      gsap.from("#bla", { opacity: 0, duration: 1 });
      gsap.to("#bla", { opacity: 1, duration: 2 });
    }
  };
  useEffect(() => {
    let interval = null;
    if (autoPlay) {
      interval = setInterval(goToSlideNext, autoPlaySpeed);
    }
    return () => clearInterval(interval);
  }, [current, autoPlay, autoPlaySpeed]);
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center items-center max-lg:w-[100%] max-lg:h-[60%]">
      <img src={el.img[current].src} alt="" className="rounded-xl" id="bla" />
      <div className="flex items-center justify-center gap-3">
        {el.img.map((slide, slideIndex) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            role="presentation"
            className={`transition-all w-3 h-3 bg-white rounded-full ${
              current === slideIndex ? "p-2" : "bg-opacity-50"
            }`}
          >
            .
          </div>
        ))}
      </div>
    </div>
  );
}
CarouselItems.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  current: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  autoPlaySpeed: PropTypes.number.isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export default CarouselItems;
