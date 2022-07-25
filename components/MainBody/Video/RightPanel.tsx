import React from "react";
import { HeartIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/solid";
const RightPanel = ({ likes }) => {
  return (
    <div
      className="absolute right-3 bottom-60
     h-1/3 w-12 rounded-md
   bg-black bg-opacity-10
    p-2 justify-between flex flex-col"
    >
      <div className="text-center">
        <HeartIcon className="text-white font-semibold" />
        <p className="text-gray-300">{likes}k</p>
      </div>
      <div className="text-center">
        <ChatAltIcon className="text-white" />
        <p className="text-gray-300">32k</p>
      </div>
      <div className="text-center">
        <ShareIcon className="text-white" />
        <p className="text-gray-300">11k</p>
      </div>
    </div>
  );
};

export default RightPanel;
