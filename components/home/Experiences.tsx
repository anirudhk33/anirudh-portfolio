import React from "react";
import SectionTitle from "../global/SectionTitle";
import { experiences } from "@/data/content/home"; // Assuming you have data for experiences
import { MLskills, SWEskills } from "@/data/content/home";

function Experience() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Recent Experiences" />
      <div className="max-w-5xl m-auto md:max-h-[400px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 items-start ">
        {experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold mb-1">
                {experience.company} -{" "}
                <span className="italic">{experience.jobTitle}</span>
              </h3>
              {/* <p className="italic ">{experience.jobTitle}</p> */}
              <p className=" mt-3">Technologies: {experience.stack}</p>
              <p className="mt-3"> {experience.desc}</p>
              <p className="text-sm mt-4 text-gray-600">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
