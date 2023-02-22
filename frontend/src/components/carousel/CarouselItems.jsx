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
      const tl = gsap.timeline();
      tl.to("#bla", {
        opacity: 0,
        duration: 0,
        delay: 0,
      });
      setTimeout(() => {
        tl.fromTo(
          "#bla",
          { opacity: 0, duration: 1, delay: 0, x: "-20vw" },
          { opacity: 1, duration: 1, delay: 0, x: "0vw" }
        );
      }, 100);
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
            className={`transition w-3 h-3 bg-white rounded-full relative duration-500 cursor-pointer ${
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
