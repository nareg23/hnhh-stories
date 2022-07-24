import React, { FC, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

import RightPanel from "./RightPanel";
import MidPanel from "./MidPanel";
import BottomPanel from "./BottomPanel";

type PropsTypes = {
  imageSource: string;
  classes: string;
  artistImg: string;
  artistName: string;
  likes: number;
};

const Index: FC<PropsTypes> = ({
  imageSource,
  classes,
  artistImg,
  artistName,
  likes,
}) => {
  return (
    <div className={classNames("h-full", "w-full", classes)}>
      <div className=" relative h-5/6 w-full">
        <Image src={imageSource} layout="fill" objectFit="inherit" alt="" />
        <div className="absolute h-10 w-20 opacity-50  top-4 left-5">
          <Image src={"/logo.png"} alt={""} layout={"fill"} objectFit="fill" />
        </div>
        <RightPanel likes={likes} />
        <MidPanel artistImg={artistImg} artistName={artistName} />
      </div>
      <div className="h-1/6">
        <BottomPanel />
      </div>
    </div>
  );
};

export default Index;
