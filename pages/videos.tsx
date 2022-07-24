import React from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { WheelControls } from "../utills/keenSliderPlugin";
import Video from "../components/MainBody/Video";

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
    <div
      ref={refCallback}
      className=" keen-slider lg:max-h-96 h-screen bg-black"
    >
      <Video
        classes="keen-slider__slide"
        artistImg={"/kanye.webp"}
        artistName={"Eminem"}
        imageSource={"/eminem.webp"}
        likes={144}
      />
      <Video
        artistImg={"/kanye.webp"}
        artistName={"wade"}
        classes={"keen-slider__slide "}
        imageSource={"/wade.webp"}
        likes={110}
      />
      <Video
        artistImg={"/kanye.webp"}
        artistName={"wade"}
        classes={"keen-slider__slide "}
        imageSource={"/wade.webp"}
        likes={346}
      />
    </div>
  );
};
export default Videos;
