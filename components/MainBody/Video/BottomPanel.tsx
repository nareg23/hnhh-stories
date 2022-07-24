import React from "react";
import {
  MusicNoteIcon,
  FilmIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
const BottomPanel = () => {
  return (
    <div className="text-white flex justify-around w-full h-full m-auto items-center">
      <div className="text-white p-4 rounded-full text-center flex flex-col justify-center items-center ">
        <MusicNoteIcon className="text-gray-200 h-5 w-5" />
        <p className="text-xs text-gray-300">Songs</p>
      </div>
      <div className="text-white  rounded-full text-center flex flex-col justify-center items-center ">
        <ViewBoardsIcon className="text-gray-200 h-5 w-5" />
        <p className="text-xs text-gray-300">Mixtapes</p>
      </div>
      <div className="text-white p-4 rounded-full text-center flex flex-col justify-center items-center ">
        <FilmIcon className="text-gray-200 h-5 w-5" />
        <p className="text-xs text-gray-300">Video</p>
      </div>
    </div>
  );
};

export default BottomPanel;
