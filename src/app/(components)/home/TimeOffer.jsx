import React from "react";
import Image from "next/image";
import RedButton from "../elements/RedButton";

export default function TimeOffer() {
  return (
    <>
      <div className="relative w-full h-[300px] lg:h-[650px] px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px]">
        <Image
          src="/assets/images/bg-07.jpg"
          fill
          className="object-cover bg-center"
          alt="image"
        />
        <div className="absolute top-[50%] left-[50%] centerTransform z-10">
          <h3 className="text-[#FF4955]  text-[2rem] lg:text-4xl text-center font-Kr">
            Limmited-Time Offer
          </h3>
          <h2 className="w-[250px] md:w-[300px] lg:w-[600px] text-5xl md:text-9xl lg:text-7xl font-medium text-center my-6 font-Lr ">
            SAVE BIG:UP TO 60% OFF ON ALL HEADPHONES <br/>
            <span>ACT FAST BEFORE THEY'RE GONE</span>
          </h2>

          <RedButton textCenter={"center"} />
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
