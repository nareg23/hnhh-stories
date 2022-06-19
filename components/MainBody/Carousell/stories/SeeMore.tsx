import React, { useState } from "react";

const SeeMore = ({ close }) => {
  return (
    <div className="w-full h-full bg-blue-50">
      <h1 onClick={close} className="text-black">
        CLICK FOR MORE!
      </h1>
    </div>
  );
};

export default SeeMore;
