import * as React from 'react';
import RedButton from "./RedButton";

export default function MainDescription(mt:number, mTop:number, pText:string ) {
  return (
    <div
      className={`m-8 mt-${mTop} lg:w-1/2 flex justify-between flex-col lg:mt-[${mt}] `}
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
}