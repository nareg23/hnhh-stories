import React from "react";
import Stories from "react-insta-stories";
import { useRouter } from "next/router";
// import { storyObj } from "../../../data/stories";
import SeeMore from "./Story/SeeMore";
import Story from "./Story";
import AdCompontent from "./Story/AdCompontent";

const storyObj = [
  {
    content: () => <Story imageUrl={"/ciara.webp"} />,
    seeMore: ({ close }: any) => {
      return <SeeMore close={close} />;
    },
  },
  {
    content: () => <Story imageUrl={"/eminem.webp"} />,
  },
  {
    content: () => <Story imageUrl={"/wade.webp"} />,
  },
  {
    content: ({ action, isPaused }: any) => (
      <AdCompontent action={action} isPaused={isPaused} />
    ),
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "video",
  },
];

const index = () => {
  return (
    <div className="rounded-lg h-full w-full ">
      <Stories
        stories={storyObj}
        preventDefault={false}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default index;
