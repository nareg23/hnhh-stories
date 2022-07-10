import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
} from "@heroIcons/react/solid";

const Main = () => {
  return (
    <main className="h-full flex flex-col">
      <div className="p-3 h-2/5 w-full  flex justify-center flex-col ">
        {/* IMAGES */}
        <div className="w-full h-2/3 justify-center mt-1  flex">
          <div className="w-1/3 relative border overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              alt="ciera"
              src={"/eminem.webp"}
            ></Image>
          </div>
          <div className="w-1/3 relative border overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              alt="ciera"
              src={"/ciara.webp"}
            ></Image>
          </div>
          <div className="w-1/3 relative border overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              alt="ciera"
              src={"/wade.webp"}
            ></Image>
          </div>
        </div>
        {/* END OF IMAGES */}
        <span className="text-sm font-extralight text-gray-500">
          instagram/facebook Stories
        </span>
        <div className="w-full p-2 flex flex-1 h-1/3 justify-center items-center flex-col ">
          <div className="flex justify-around items-center w-28  overflow-hidden mb-8 ">
            <ArrowCircleLeftIcon className="text-gray-500  opacity-40 text-sm h-5 w-5" />
            <ArrowCircleRightIcon className="text-gray-500 opacity-40 text-base h-5 w-5 " />
          </div>
          <div className="w-1/3 text-center">
            <NextLink href={"/stories"}>
              <a className="p-3 shadow-xl text-base font-medium rounded-lg  bg-red-600 text-gray-100">
                Stories
              </a>
            </NextLink>
          </div>
        </div>
      </div>

      <div className="h-3/5 w-full flex justify-center items-center border-t-2 border-gray-300 border-opacity-30">
        <div className=" w-1/2 h-full  p-6">
          <div className=" h-3/4 w-full relative rounded-md overflow-hidden bg-white flex justify-center  items-center">
            <Image
              layout="fill"
              objectFit="cover"
              alt="eminem.webp"
              src={"/ciara.webp"}
            ></Image>
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-start items-center ">
          <div className="flex flex-col items-start justify-between h-24 w-1/4  overflow-hidden">
            <ArrowCircleUpIcon className="text-gray-500  opacity-40 text-sm h-10 w-10" />
            <ArrowCircleDownIcon className="text-gray-500 opacity-40 text-base h-10 w-10" />
          </div>
          <div className="w-3/4">
            <NextLink href={"/videos"}>
              <a className="p-3 shadow-xl text-base font-medium rounded-lg bg-red-600 text-gray-100">
                videos
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
