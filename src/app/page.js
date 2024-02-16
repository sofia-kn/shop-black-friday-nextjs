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
      <main className="flex flex-col items-center justify-between mt-10 lg:mt-[15rem]">
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
        <div className="body-bg-image py-[25rem] px-[2rem] w-full h-screen flex flex-row justify-center items-center">
          <BlackFridaySale_1.default />
        </div>
      </main>
    </>);
};
exports.default = Home;
