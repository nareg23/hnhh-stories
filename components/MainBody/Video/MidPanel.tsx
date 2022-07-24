import React from "react";
import Image from "next/image";
const MidPanel = ({ artistImg, artistName }) => {
  return (
    <div
      className=" gredient rounded-sm h-1/5 w-full absolute
        bg-gradient-to-t from-black to-transparent bottom-0"
    >
      <div className="absolute p-5 flex items-center w-full  ">
        <div className=" relative rounded-full overflow-hidden border-2 border-red-700 border-li h-11 w-11">
          <Image src={artistImg} alt={"artist"} layout="fill"></Image>
        </div>
        <div className="overflow-hidden ab  flex flex-col  p-3 w-10/12  h-full">
          <p className="text-white text-xl">{artistName}</p>
          <p className="truncate text-sm overflow-hidden text-gray-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            amet molestias cupiditate velit optio quas unde. Iste explicabo sint
            dolor debitis, deleniti quod iure!
          </p>
          <a className="text-gray-400">See More</a>
        </div>
      </div>
    </div>
  );
};

export default MidPanel;
