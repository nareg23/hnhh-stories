import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <main className="h-full bg-green-700">
      <div className="h-full flex flex-col w-full">
        <div className="w-full h-full">
          <button className="bg-red-700 text-white p-5 rounded-md">
            Stories
          </button>
          <div>
            <div className="h-1/3 w-1/6 relative">
              <Image src="/demo-1.jpg" alt="demo" layout="fill" />
            </div>
          </div>
        </div>
        <div className="h-full w-full ">
          <button className="bg-red-700 text-white p-5 rounded-md">
            Videos
          </button>
        </div>
      </div>
    </main>
  );
};
export default Main;
