"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LocalShipping_1 = require("@mui/icons-material/LocalShipping");
var AdvantagesOfBlackShop_1 = require("../elements/AdvantagesOfBlackShop");
var Lock_1 = require("@mui/icons-material/Lock");
var LocationOn_1 = require("@mui/icons-material/LocationOn");
var Replay_1 = require("@mui/icons-material/Replay");
function WhyChoseBlackFriday() {
    return (<div className="flex flex-col lg:flex-row">
      <div className="w-full basis-1/2">
        <h4 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] text-center lg:text-left font-Kr">
          Why Choose BlackFridayShop?{" "}
        </h4>
        <h2 className="lg:w-[70%] lg:leading-[5rem] xl:leading-[7rem] text-[3.3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-medium  text-center lg:text-left font-Lr mt-4 xl:mt-5">
          THE JOY OF SHOPPING AT ITS BEST{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 basis-1/2 mt-[3rem] lg:mt-0">
        <AdvantagesOfBlackShop_1.default icon={<LocalShipping_1.default sx={{ width: "3rem", height: "3rem" }}/>} title={"FREE SHOPPING"} description={"Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy "}/>
        <AdvantagesOfBlackShop_1.default icon={<Lock_1.default sx={{ width: "3rem", height: "3rem" }}/>} title={"SECURE PAYMENTS"} description={"Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping "}/>
        <AdvantagesOfBlackShop_1.default icon={<LocationOn_1.default sx={{ width: "3rem", height: "3rem" }}/>} title={"Order Tracking "} description={"Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep "}/>
        <AdvantagesOfBlackShop_1.default icon={<Replay_1.default sx={{ width: "3rem", height: "3rem" }}/>} title={"Easy Returns "} description={"Celebrate worry-free shopping with our hassle-free returns – because we're here to make your shopping experience as smooth as possible "}/>
      </div>
    </div>);
}
exports.default = WhyChoseBlackFriday;
