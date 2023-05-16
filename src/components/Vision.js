import React from "react";
import lemur from "../assets/images/lemur.png";

const Vision = () => {
  const visionContent = {
    title: "Our vision",
    subTitle:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.",
    content:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.",
  };

  return (
    <div className="w-full flex flex-col mb-[73.5px] lg:mb-[37.5px]">
      <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:w-full lg:mb-[156px]">
        <div className="outline-title Text-Style-7 lg:rotate-90 whitespace-nowrap lg:ml-auto lg:w-[150px]">
          {visionContent?.title}
        </div>
        <div className="flex flex-col">
          <h2 className="mb-[24px] w-full Text-Style-5 lg:w-[460px]">
            {visionContent?.subTitle}
          </h2>
          <p className="Text-Style-6 mb-[58.5px] lg:mb-0 lg:ml-[200px] lg:max-w-[665px]">
            {visionContent?.content}
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="w-[303px] h-[168px] lg:w-[90%] lg:h-[553px] bg-[#d8d8d8] -z-40"></div>
        <img
          src={lemur}
          alt="lemur"
          className="absolute top-[25px] left-[27px] lg:top-[83px] lg:left-[90px] z-40 lg:w-[90%] h-full"
        />
      </div>
    </div>
  );
};

export default Vision;
