"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RedButton_1 = require("../elements/RedButton");
function BlackFridaySale() {
    return (<div className="w-[95%] md:w-[90%] lg:w-[50%]">
      <h3 className="text-[#FF4955]  text-[2rem] lg:text-5xl text-center font-Kr xl:mb-[2.5rem]">
        Black Friday Sale
      </h3>
      <h2 className="text-[3rem] lg:text-[6rem] xl:text-[9rem] font-medium text-center my-5 font-Lr leading-[3rem] lg:leading-[5rem] xl:leading-[8rem]">
        SAVE BIG:UP TO{" "}
        <span className="text-[#FF4955] text-[3rem] lg:text-[6rem] xl:text-[9rem] mr-3">
          60% OFF
        </span>
        ON ALL PRODUCTS <br />
      </h2>
        <p className="text-[1.4rem] md:text-[1.6rem] lg:txet-[2rem] text-center my-[2rem] lg:my-[3rem] font-M text-slate-300">
          Don’t miss this exclusive opportunity to embark on a journey of
          unbeatable savings and cutting-edge technology. It’s time to secure
          the best deals and upgrade your experience, so seize the moment and
          start shopping now!
        </p>

      <RedButton_1.default textCenter={"center"}/>
    </div>);
}
exports.default = BlackFridaySale;
