import React from "react";
import Image from "next/image";
import { useEffect } from "react";

const AdCompontent = ({ action, isPaused }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
      setTimeout(() => {
        action("play");
      }, 2000);
    }, 2000);
  }, []);
  return (
    <div className="h-full w-full bg-gray-800 text-gray-400 flex flex-col items-center ">
      <div className="mt-24 text-center">
        <h1
          onClick={() => {
            action("pause");
          }}
        >
          This is an ad spot
        </h1>
        <p>This inventory can be used for Interstitial and Video ads</p>
      </div>
      <div className=" mt-5 h-[300px] w-[300px] relative">
        <Image src={"/amazonAd.jpg"} alt="ad" layout="fill" objectFit="fill" />
      </div>
      <p>HotNewHipHop.com</p>
    </div>
  );
};

export default AdCompontent;
