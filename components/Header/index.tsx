import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex items-center justify-around h-24 flex-grow w-full ">
      <div className="flex justify-start relative h-7 w-7">
        <Image src={"/Menu.svg"} alt="menu" layout="fill" />
      </div>
      <div className="flex justify-start relative h-11 w-28">
        <Image src={"/logo.png"} alt="menu" layout="fill" objectFit="fill" />
      </div>
      <div className="flex justify-start relative h-10 w-10 rounded-full">
        <Image
          src={"/kanye.webp"}
          alt="menu"
          className="rounded-full"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </div>
  );
};

export default index;
