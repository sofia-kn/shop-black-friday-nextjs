"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackFridayMadness_1 = require("./components/home/BlackFridayMadness");
var BlackHeadphoneBanner_1 = require("./components/home/BlackHeadphoneBanner");
var CustomerTestimonials_1 = require("./components/home/CustomerTestimonials");
var PinkHeadphoneBanner_1 = require("./components/home/PinkHeadphoneBanner");
var TimeOffer_1 = require("./components/home/TimeOffer");
var Timer_1 = require("./components/home/Timer");
var WhyChoseBlackFriday_1 = require("./components/home/WhyChoseBlackFriday");
var BlackFridaySale_1 = require("./components/home/BlackFridaySale");
var Home = function () {
    return (<>
        <div className="absolute bottom-[30rem] md:bottom-[7rem] xl:bottom-[7rem] flex w-full flex-col justify-center items-center  mt-[115px] md:mt-[157px] lg:mt-[175px] lg-max:mt-[212px] 3xl-max:mt-[215px]  px-2">
                <p className="text-[#FF4955] mb-7 3xl-max:mb-6  font-Kr text-[20px] lg:text-[23px] lg-max:text-[30px]">Hurry, Black Friday Is Almost Here!</p>
                <h1 className="text-center lg-max:w-[90%] 3xl-max:w-[75%] text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
                    Time Left Until Our
                    <span className="text-[#FF4955] text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  ml-4 ">
                         Biggest Sale of the Year Begins
                    </span>

                </h1>
                <button className="mt-[3.8rem] 3xl-max:mt-[6rem] text-3xl 3xl-max:text-[2rem]  font-Lr font-normal tracking-widest bg-[#FC3746] hover:bg-[#fc414f] w-[149px] 3xl-max:w-[15.4rem] h-[50px] 3xl-max:h-[5.2rem]">
                    SET REMINDER
                </button>
            </div>
      <main className="flex flex-col items-center justify-between relative bottom-[15rem] lg:mt-[15rem]">
        <Timer_1.default />
        <div className="relative px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <BlackHeadphoneBanner_1.default />
        </div>
        <PinkHeadphoneBanner_1.default />
        <div className="mt-[7rem]">
          <BlackFridayMadness_1.default />
        </div>
        <div className="w-full px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px] mt-[7rem]">
          <TimeOffer_1.default />
        </div>
        <div className="w-full mt-[7rem] px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <WhyChoseBlackFriday_1.default />
        </div>
        <div className="w-full mt-[7rem] px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <CustomerTestimonials_1.default />
        </div>
        <div className="body-bg-image pt-[25rem] px-[2rem] mb-[8rem] w-full h-screen flex flex-row justify-center items-center">
          <BlackFridaySale_1.default />
        </div>
      </main>
   </>);
};
exports.default = Home;
