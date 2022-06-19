import React from "react";
import Image from "next/image";

const Story = ({ imageUrl }) => {
  return (
    <div className="w-full h-full  border-white">
      <a href="/tools" className="z-0">
        <div className="w-full h-full relative">
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col absolute bottom-0 w-full h-40 bg-black bg-opacity-60 p-3">
          <h1 className="text-gray-300 font-semibold">
            This is an article Title.
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            aut officiis illum maiores corrupti, architecto nesciunt incidunt
            aliquam est dicta!
          </p>
        </div>
      </a>
    </div>
  );
};

export default Story;
