import MainBody from "../components/MainBody";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=" w-screen h-screen flex overflow-hidden justify-center   md:pt-2 ">
      <div className="max-w-screen-sm w-full h-full  flex-col justify-center md:rounded-lg">
        {/* Header*/}
        <Header />
        {/* main-Content */}
        <MainBody />
      </div>
    </div>
  );
}
