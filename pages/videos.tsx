import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { WheelControls } from "../utills/keenSliderPlugin";
import Video from "../components/MainBody/Video";

const sliderControls: KeenSliderPlugin = (slider) => {
  slider.on("animationEnded", () => {
    console.log("aniamations eneded");
    // console.log(slider);
    slider.update();
  });
};

const Videos = () => {
  const [refCallback] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
      mode: "snap",
      updated: (slider) => {
        if (slider.track.details.progress > 0.6) {
          console.log("fetch more");
        }
      },
    },
    [sliderControls]
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
        type="img"
      />
      <Video
        artistImg={"/eminem_icon.jpg"}
        artistName={"Ciara"}
        classes={"keen-slider__slide "}
        imageSource={"/ciara.webp"}
        likes={110}
        type="img"
      />
      <Video
        artistImg={"/avatar.webp"}
        artistName={"wade"}
        classes={"keen-slider__slide "}
        imageSource={"/wade.webp"}
        likes={346}
        type="img"
      />
      <Video
        artistImg={"/kanye.webp"}
        artistName={"wade"}
        classes={"keen-slider__slide"}
        imageSource={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
        likes={346}
        type="video"
      />
    </div>
  );
};
export default Videos;
