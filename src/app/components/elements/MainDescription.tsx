"use client";

import RedButton from "./RedButton";
import { FC } from "react";

interface MainDescriptionProps {
  mTop: string;
  pText: string;
}

const MainDescription: FC<MainDescriptionProps> = ({ mTop, pText }) => {
  return (
    <div
      className={`m-8 mt-${mTop} lg:w-1/2 flex justify-between flex-col lg:mt-[8] `}
    >
      <h3 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] sx-max:text-center font-Kr">
        Up to 50% Off
      </h3>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium	text-center mt-6 mb-6 font-Lr break-words	lg:text-left">
        GRAB YOUR FAVORITES BEFORE THEY'RE GONE
      </h2>
      <p
        className={`xl:pr-[250px] text-center w-full text-[1.4rem] md:text-xl lg:text-xl font-M text-slate-100 lg:text-left mb-6`}
      >
        {pText}
      </p>
      <RedButton textCenter={"center"} textLeft={"left"} />
    </div>
  );
};
export default MainDescription;
