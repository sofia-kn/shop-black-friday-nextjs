import React from "react";
import AdvantagesOfBlackShop from "../elements/AdvantagesOfBlackShop";


export default function WhyChoseBlackFriday() {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-full basis-1/2">
        <h4 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] text-center xl:text-left font-Kr">
          Why Choose BlackFridayShop?{" "}
        </h4>
        <h2 className="xl:w-[70%] xl:leading-[7rem] text-[3.3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-medium  text-center xl:text-left font-Lr mt-3 xl:mt-5">
          THE JOY OF SHOPPING AT ITS BEST{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 basis-1/2 mt-[3rem]">
        <AdvantagesOfBlackShop
          title={"FREE SHOPPING"}
          description={
            "Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy "
          }
        />
        <AdvantagesOfBlackShop   
          title={"SECURE PAYMENTS"}
          description={
            "Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping "
          }
        />
        <AdvantagesOfBlackShop  
          title={"Order Tracking "}
          description={
            "Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep "
          }
        />
        <AdvantagesOfBlackShop
          title={"Easy Returns "}
          description={
            "Celebrate worry-free shopping with our hassle-free returns – because we're here to make your shopping experience as smooth as possible "
          }
        />
      </div>
    </div>
  );
}
