import React from "react";
import RedButton from "../elements/RedButton";
export default function BlackFridaySale() {
  return (
    <div className="mt-[7rem]">
      <h3 className="text-[#FF4955]  text-[2rem] lg:text-5xl text-center font-Kr xl:mb-[2.5rem]">
        Black Friday Sale
      </h3>
      <h2 className="text-5xl md:text-6xl xl:text-[7rem] font-medium text-center my-5 font-Lr ">
        SAVE BIG:UP TO{" "}
        <span className="text-[#FF4955] text-5xl md:text-6xl xl:text-[7rem] mr-3">
          60% OFF
        </span>
        ON ALL PRODUCTS <br />
      </h2>
        <p className="text-[1.4rem] text-center my-5 font-M text-slate-300">
          Don’t miss this exclusive opportunity to embark on a journey of
          unbeatable savings and cutting-edge technology. It’s time to secure
          the best deals and upgrade your experience, so seize the moment and
          start shopping now!
        </p>

      <RedButton textCenter={"center"} />
    </div>
  );
}
