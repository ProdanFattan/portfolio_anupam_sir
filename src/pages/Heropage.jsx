import React from "react";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
function Heropage(props) {
  return (
    <>
      <div className=" w-full fixed top-0 z-20">
        <Navbar />
      </div>
      <div className="py-5 lg:py-10">
        <HeroPage />
      </div>
    </>
  );
}

export default Heropage;
