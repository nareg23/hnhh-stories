import React from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { WheelControls } from "../utills/keenSliderPlugin";
const Videos = () => {
  const [refCallback] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );
  return (
    <div ref={refCallback} className=" keen-slider h-screen bg-black ">
      <div className=" keen-slider__slide bg-white">1</div>
      <div className="keen-slider__slide bg-gray-800">2</div>
      <div className="keen-slider__slide bg-orange-800">2</div>
      <div className="keen-slider__slide bg-gray-300">2</div>
      <div className="keen-slider__slide bg-gray-300">2</div>
      <div className="keen-slider__slide bg-gray-300">2</div>
    </div>
  );
};
export default Videos;
