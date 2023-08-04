import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem  h-screen flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <img
          className="w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full -mt-20 z-5"
          style={{ animationDelay: "0.5s" }}
          src="/static/misc/mypic.jpg"
        />
        <h1 className="heroTitle  max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-8xl font-bold heroShinyBg mt-8 z-5">
          Anirudh Krishna
        </h1>
        <p className=" font-medium heroShiny1 text-fun-pink text-2xl md:text-3xl lg:text-4xl mt-5 z-5">
          Software Engineer • ML Enthusiast
        </p>{" "}
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors mt-10 z-5">
            Tell me more
          </div>
        </ScrollLink>
        <div></div>
      </div>
    </>
  );
}

export default Hero;
