import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";
import Image from "next/image";

function Education() {
  return (
    <div className="flex flex-col  max-w-md md:max-w-full w-full m-auto md:pt-[300px] pb-[80px]">
      <SectionTitle title="Education" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 items-start">
        {testimonials.map((item, index) => {
          return (
            <a className="" href={item.link} target="_blank" rel="noreferrer">
              <div
                key={index}
                className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
              >
                <p className="relative font-bold">{item.quote}</p>
                <div className="flex flex-row justify-center gap-[50px]">
                  <img
                    className={`w-full ${item.style} h-[48px] w-auto md:h-[64px] mt-[12px]`}
                    src={item.image}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p>GPA: {item.gpa}</p>
                    <p>{item.years}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
