import React from "react";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
function Heropage(props) {
  return (
    <>
      <div className=" w-full fixed top-0 z-20">
        <Navbar />
      </div>
      <div className="pt-5 lg:pt-10">
        <HeroPage />
      </div>
    </>
  );
}

export default Heropage;
