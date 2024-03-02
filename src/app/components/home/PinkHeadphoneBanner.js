"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var image_1 = require("next/image");
var MainDescription_1 = require("../elements/MainDescription");
function PinkHeadphoneBanner() {
    return (<div className="w-full relative  mt-16  px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
      <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <div className="bg-slate-50 relative w-full h-[300px] lg:w-1/2 lg:h-[700px]">
          <image_1.default src="/assets/images/headphones-img-02.jpg" fill className="object-cover bg-center" alt="image"/>
        </div>

        <MainDescription_1.default mt={"16rem"} pText={" You can trust us to bring you the latest technology at unbeatable. Don’t miss this limited-time opportunity to upgrade your audio game."} mTop={''}/>
      </div>
    </div>);
}
exports.default = PinkHeadphoneBanner;
