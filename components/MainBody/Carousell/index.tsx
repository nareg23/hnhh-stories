import React from "react";
import Stories from "react-insta-stories";
import { useRouter } from "next/router";
// import { storyObj } from "../../../data/stories";
import SeeMore from "./stories/SeeMore";
import Story from "./Story";
import AdCompontent from "./Story/AdCompontent";

const storyObj = [
  {
    content: () => <Story imageUrl={"/ciara.webp"} />,
    seeMore: ({ close }) => {
      return <SeeMore close={close} />;
    },
  },
  {
    content: () => <Story imageUrl={"/eminem.webp"} />,
    seeMore: ({ close }) => {
      return <SeeMore close={close} />;
    },
  },
  {
    content: () => <Story imageUrl={"/wade.webp"} />,
    seeMore: ({ close }) => {
      return <SeeMore close={close} />;
    },
  },
  {
    content: ({ action, isPaused }) => (
      <AdCompontent action={action} isPaused={isPaused} />
    ),
    seeMore: ({ i, close }) => {
      return <SeeMore close={close} />;
    },
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "video",
  },
];

const index = () => {
  const storyStyles = {
    width: "100%",
    height: "100%",
    margin: "auto",
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <Stories
        stories={storyObj}
        currentIndex={storyObj.length + 1}
        storyStyles={storyStyles}
        keyboardNavigation
      />
    </div>
  );
};

export default index;
