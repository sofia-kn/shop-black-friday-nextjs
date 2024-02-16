"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var image_1 = require("next/image");
var MainDescription_1 = require("../elements/MainDescription");
function BlackHeadphoneBanner() {
    return (<div className="container relative bgImg ">
      <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <div className="p-6 pb-0 md-max:w-full md-max:max-w-60 xl:p-8">
          <image_1.default src="/assets/images/headphone-02.png" width={400} height={250} alt="image" sizes="100vw" style={{ width: "100%", height: "auto" }}/>
        </div>
        <MainDescription_1.default mtop={"8"} pText={"You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!"}/>
      </div>
    </div>);
}
exports.default = BlackHeadphoneBanner;
