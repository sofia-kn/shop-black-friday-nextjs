import React from "react";
import RedButton from "./RedButton";

export default function MainDescription({ mt,m, mTop,w, pText  }) {
  return (
    <div
      className={` m-${m} mt-${mTop} lg:w-1/2 flex justify-between flex-col lg:mt-[${mt}]`}
    >
      <h3 className="text-[#FF4955] text-xl lg:text-3xl text-center font-Kr lg:text-left">
        Up to 50% Off
      </h3>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium	text-center mt-6 mb-6 font-Lr break-words	lg:text-left	">
        GRAB YOUR FAVORITES BEFORE THEY'RE GONE
      </h2>
      <p className={`lg:w-${w} text-center w-full text-sm md:text-xl lg:text-xl font-M text-slate-100 lg:text-left mb-6`}>
      {pText}
      </p>
      <RedButton />
    </div>
  );
}
