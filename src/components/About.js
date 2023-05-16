import React from "react";
import fruit from "../assets/images/fruit.png";
import fruitLg from "../assets/images/fruitLg.jpg";

const About = () => {
  const aboutContent = {
    title: "About",
    subTitle: "Andy Griffith turned us down.",
    content:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!",
  };

  return (
    <div className="w-full flex flex-col mb-[49px] lg:mb-[69.5px] lg:flex-row lg:justify-between lg:items-center">
      <div className="flex flex-col lg:w-[50%]">
        <span className="outline-title Text-Style-3 h-[176px] lg:h-[92px]">
          {aboutContent?.title}
        </span>
        <div className="relative w-full mb-[80px] w-full">
          <img src={fruit} alt="fruit" className="lg:hidden" />
          <img
            src={fruitLg}
            alt="fruit"
            className="hidden lg:block w-full"
          />
          <div
            className="absolute top-[36px] lg:top-[65px] left-[32px] lg:left-[70px]
              w-[322px] lg:w-full h-[270px] lg:h-full bg-[#d8d8d8] -z-40"
          ></div>
        </div>
      </div>
      <div className="flex flex-col lg:w-[280px]">
        <h2 className="mb-[24px] w-full Text-Style-5">
          {aboutContent?.subTitle}
        </h2>
        <p className="Text-Style-6">{aboutContent?.content}</p>
      </div>
      
    </div>
  );
};

export default About;
