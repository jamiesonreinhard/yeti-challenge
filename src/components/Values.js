import React from "react";

const Values = () => {
  const valuesContent = {
    title: "Our values",
    subTitle:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.",
    content:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.",
    content1:
      "Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.",
  };

  return (
    <div className="w-full flex flex-col">
      <span className="outline-title Text-Style-8 h-[129px] lg:text-center lg:mb-[40px]">
        {valuesContent?.title}
      </span>
      <h2 className="mb-[24px] lg:mb-[92px] w-full Text-Style-5 text-center lg:w-[701px] lg:mx-auto">
        {valuesContent?.subTitle}
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
        <p className="Text-Style-6 mb-[27px] lg:w-[560px]">{valuesContent?.content}</p>
        <p className="Text-Style-6 lg:w-[560px] flex justify-end">{valuesContent?.content1}</p>
      </div>
    </div>
  );
};

export default Values;
