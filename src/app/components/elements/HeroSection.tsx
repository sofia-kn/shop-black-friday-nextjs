import React from "react";

export default function HeroSection() {
  return (
    <div className="flex h-auto w-full lg-max:w-[90%] 3xl-max:w-[75%] flex-col justify-start items-center  mt-[115px] md:mt-[157px] lg:mt-[175px] lg-max:mt-[212px] 3xl-max:mt-[215px]  px-2">
      <p className="text-[#FF4955] mb-7 3xl-max:mb-6  font-Kr text-[20px] lg:text-[23px] lg-max:text-[30px]">
        Hurry, Black Friday Is Almost Here!
      </p>
      <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
        Time Left Until Our
        <span className="text-[#FF4955] text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  ml-4 ">
          Biggest Sale of the Year Begins
        </span>
      </h1>
      <button className="mt-[3.8rem] 3xl-max:mt-[6rem] text-3xl 3xl-max:text-[2rem]  font-Lr font-normal tracking-widest bg-[#FC3746] hover:bg-[#fc414f] w-[149px] 3xl-max:w-[15.4rem] h-[50px] 3xl-max:h-[5.2rem]">
        SET REMINDER
      </button>
    </div>
  );
}
